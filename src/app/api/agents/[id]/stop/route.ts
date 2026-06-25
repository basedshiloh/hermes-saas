import { auth } from "@clerk/nextjs/server";
import { db } from "@/src/lib/db";
import { stopContainer } from "@/src/lib/worker-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await db.user.findUnique({ where: { clerkId: userId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

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
