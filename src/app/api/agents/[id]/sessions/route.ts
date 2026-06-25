import { db } from "@/src/lib/db";
import { getOrCreateUser } from "@/src/lib/user";
import { NextRequest, NextResponse } from "next/server";

// List chat sessions for an agent
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const agent = await db.agentInstance.findFirst({ where: { id, userId: user.id } });
  if (!agent) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const sessions = await db.chatSession.findMany({
    where: { agentId: agent.id },
    orderBy: { updatedAt: "desc" },
    select: { id: true, title: true, createdAt: true, updatedAt: true },
  });

  return NextResponse.json({ sessions });
}

// Create a new chat session for an agent
export async function POST(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const agent = await db.agentInstance.findFirst({ where: { id, userId: user.id } });
  if (!agent) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const session = await db.chatSession.create({
    data: { agentId: agent.id },
  });

  return NextResponse.json({ session }, { status: 201 });
}
