import { db } from "@/src/lib/db";
import { getStripe } from "@/src/lib/stripe";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event;
  try {
    event = getStripe().webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const userId = session.metadata?.userId;
      const plan = session.metadata?.plan;

      if (!userId || !plan) break;

      await db.subscription.upsert({
        where: { userId },
        create: {
          userId,
          stripeCustomerId: session.customer as string,
          stripeSubId: session.subscription as string,
          plan: plan as "STARTER" | "PRO" | "BUSINESS",
          status: "ACTIVE",
          currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
        update: {
          stripeSubId: session.subscription as string,
          plan: plan as "STARTER" | "PRO" | "BUSINESS",
          status: "ACTIVE",
          currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
      });

      // Agents are created explicitly by the user from the dashboard
      // ("Deploy Agent"), not auto-provisioned on subscription.

      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object;
      const sub = await db.subscription.findUnique({
        where: { stripeSubId: subscription.id },
      });
      if (!sub) break;

      await db.subscription.update({
        where: { stripeSubId: subscription.id },
        data: {
          status: subscription.status === "active" ? "ACTIVE" :
                  subscription.status === "past_due" ? "PAST_DUE" :
                  subscription.status === "canceled" ? "CANCELED" : "UNPAID",
        },
      });
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object;
      await db.subscription.updateMany({
        where: { stripeSubId: subscription.id },
        data: { status: "CANCELED" },
      });
      break;
    }
  }

  return NextResponse.json({ received: true });
}
