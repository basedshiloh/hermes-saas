import { db } from "@/src/lib/db";
import { getOrCreateUser } from "@/src/lib/user";
import { stopContainer } from "@/src/lib/worker-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const agent = await db.agentInstance.findFirst({ where: { id, userId: user.id } });
  if (!agent?.containerId) return NextResponse.json({ error: "Not found" }, { status: 404 });

  try {
    await stopContainer(agent.containerId);
    await db.agentInstance.update({ where: { id: agent.id }, data: { state: "SLEEPING" } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to stop" }, { status: 502 });
  }
}
