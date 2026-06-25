import { auth } from "@clerk/nextjs/server";
import { db } from "@/src/lib/db";
import { decrypt } from "@/src/lib/encryption";
import { enqueueProvision } from "@/src/lib/worker-client";
import { PACKS } from "@/src/data/mock-dashboard";
import { NextRequest, NextResponse } from "next/server";

// List the signed-in user's agents
export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await db.user.findUnique({
    where: { clerkId: userId },
    include: { agentInstances: { orderBy: { createdAt: "desc" } } },
  });

  return NextResponse.json({ agents: user?.agentInstances ?? [] });
}

// Create + deploy a new agent
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await db.user.findUnique({
    where: { clerkId: userId },
    include: { subscription: true, modelKeys: true },
  });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { name, packId } = await req.json();
  const pack = PACKS.find((p) => p.id === packId) ?? PACKS.find((p) => p.id === "general")!;

  const agent = await db.agentInstance.create({
    data: {
      userId: user.id,
      name: name?.trim() || `${pack.name} Agent`,
      packId: pack.id,
      state: "PROVISIONING",
    },
  });

  // Decrypt the user's BYOK key (if saved) to inject into the agent
  let modelKey: string | undefined;
  if (user.modelKeys.length > 0) {
    try {
      modelKey = decrypt(user.modelKeys[0].encryptedKey);
    } catch {
      modelKey = undefined;
    }
  }

  try {
    await enqueueProvision({
      agentId: agent.id,
      userId,
      plan: user.subscription?.plan ?? "STARTER",
      modelKey,
      callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/agents/callback`,
    });
  } catch {
    // Worker unreachable — leave agent in PROVISIONING; user can retry
  }

  return NextResponse.json({ agent }, { status: 201 });
}
