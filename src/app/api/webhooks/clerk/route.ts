import { db } from "@/src/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const type = payload.type as string;

  if (type === "user.created" || type === "user.updated") {
    const { id, email_addresses, first_name, last_name } = payload.data;
    const email = email_addresses?.[0]?.email_address;
    if (!email) return NextResponse.json({ received: true });

    const name = [first_name, last_name].filter(Boolean).join(" ") || null;

    await db.user.upsert({
      where: { clerkId: id },
      create: { clerkId: id, email, name },
      update: { email, name },
    });
  }

  if (type === "user.deleted") {
    const { id } = payload.data;
    await db.user.deleteMany({ where: { clerkId: id } });
  }

  return NextResponse.json({ received: true });
}
