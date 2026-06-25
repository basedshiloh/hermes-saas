import { auth } from "@clerk/nextjs/server";
import { db } from "@/src/lib/db";
import { decrypt } from "@/src/lib/encryption";
import { enqueueProvision } from "@/src/lib/worker-client";
import { NextResponse } from "next/server";

export async function POST() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await db.user.findUnique({
    where: { clerkId: userId },
    include: { subscription: true, modelKeys: true, agentInstance: true },
  });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Decrypt the user's BYOK key (if they've saved one) to inject into the agent
  let modelKey: string | undefined;
  if (user.modelKeys.length > 0) {
    try {
      modelKey = decrypt(user.modelKeys[0].encryptedKey);
    } catch {
      modelKey = undefined;
    }
  }

  const plan = user.subscription?.plan ?? "STARTER";

  await db.agentInstance.upsert({
    where: { userId: user.id },
    create: { userId: user.id, state: "PROVISIONING" },
    update: { state: "PROVISIONING" },
  });

  try {
    const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/instance/callback`;
    // Use the Clerk userId as the canonical key — the chat WS also keys on it
    const result = await enqueueProvision(userId, plan, modelKey, callbackUrl);
    return NextResponse.json({ success: true, ...result });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to start provisioning", detail: String(err) },
      { status: 502 },
    );
  }
}
