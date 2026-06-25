import { db } from "@/src/lib/db";
import { getOrCreateUser } from "@/src/lib/user";
import { destroyContainer, getAgentStatus } from "@/src/lib/worker-client";
import { NextRequest, NextResponse } from "next/server";

async function getOwnedAgent(userDbId: string, agentId: string) {
  return db.agentInstance.findFirst({
    where: { id: agentId, userId: userDbId },
  });
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  let agent = await getOwnedAgent(user.id, id);
  if (!agent) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Self-heal: if still provisioning, ask the worker for the real state
  if (agent.state === "PROVISIONING" || agent.state === "PENDING") {
    try {
      const live = await getAgentStatus(agent.id);
      if (live.exists && live.status === "running") {
        agent = await db.agentInstance.update({
          where: { id: agent.id },
          data: {
            state: "RUNNING",
            containerId: live.containerId,
            internalHost: live.host,
            port: live.port,
          },
        });
      }
    } catch {
      /* worker unreachable — leave as-is */
    }
  }

  return NextResponse.json({ agent });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const agent = await getOwnedAgent(user.id, id);
  if (!agent) return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (agent.containerId) {
    try {
      await destroyContainer(agent.containerId);
    } catch {
      // best-effort; remove the DB row regardless
    }
  }

  await db.agentInstance.delete({ where: { id: agent.id } });
  return NextResponse.json({ success: true });
}
