import { auth } from "@clerk/nextjs/server";
import { db } from "@/src/lib/db";
import { destroyContainer } from "@/src/lib/worker-client";
import { NextRequest, NextResponse } from "next/server";

async function getOwnedAgent(clerkId: string, agentId: string) {
  const user = await db.user.findUnique({ where: { clerkId } });
  if (!user) return null;
  const agent = await db.agentInstance.findFirst({
    where: { id: agentId, userId: user.id },
  });
  return agent;
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const agent = await getOwnedAgent(userId, id);
  if (!agent) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ agent });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const agent = await getOwnedAgent(userId, id);
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
