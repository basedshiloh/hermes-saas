import { auth } from "@clerk/nextjs/server";
import { db } from "@/src/lib/db";
import { decrypt } from "@/src/lib/encryption";
import { getOrCreateUser } from "@/src/lib/user";
import { enqueueProvision, getAgentStatus } from "@/src/lib/worker-client";
import { PACKS } from "@/src/data/mock-dashboard";
import { NextRequest, NextResponse } from "next/server";

// List the signed-in user's agents, reconciling any still-provisioning agents
// against the worker's real container state (self-healing, no callback needed).
export async function GET() {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let agents = await db.agentInstance.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  const pending = agents.filter(
    (a) => a.state === "PROVISIONING" || a.state === "PENDING",
  );

  if (pending.length > 0) {
    await Promise.allSettled(
      pending.map(async (a) => {
        const live = await getAgentStatus(a.id);
        if (live.exists && live.status === "running") {
          await db.agentInstance.update({
            where: { id: a.id },
            data: {
              state: "RUNNING",
              containerId: live.containerId,
              internalHost: live.host,
              port: live.port,
            },
          });
        }
      }),
    );
    agents = await db.agentInstance.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });
  }

  return NextResponse.json({ agents });
}

// Create + deploy a new agent
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  const user = await getOrCreateUser();
  if (!user || !userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const subscription = await db.subscription.findUnique({ where: { userId: user.id } });
  const modelKeys = await db.modelKey.findMany({ where: { userId: user.id } });

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
  if (modelKeys.length > 0) {
    try {
      modelKey = decrypt(modelKeys[0].encryptedKey);
    } catch {
      modelKey = undefined;
    }
  }

  try {
    await enqueueProvision({
      agentId: agent.id,
      userId,
      plan: subscription?.plan ?? "STARTER",
      modelKey,
      callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/agents/callback`,
    });
  } catch {
    // Worker unreachable — leave agent in PROVISIONING; user can retry
  }

  return NextResponse.json({ agent }, { status: 201 });
}
