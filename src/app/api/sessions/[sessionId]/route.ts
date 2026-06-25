import { db } from "@/src/lib/db";
import { getOrCreateUser } from "@/src/lib/user";
import { NextRequest, NextResponse } from "next/server";

async function getOwnedSession(userDbId: string, sessionId: string) {
  return db.chatSession.findFirst({
    where: { id: sessionId, agent: { userId: userDbId } },
  });
}

// Get a session with its messages
export async function GET(_req: NextRequest, { params }: { params: Promise<{ sessionId: string }> }) {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { sessionId } = await params;
  const session = await getOwnedSession(user.id, sessionId);
  if (!session) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const messages = await db.chatMessage.findMany({
    where: { sessionId },
    orderBy: { createdAt: "asc" },
    select: { id: true, role: true, content: true, createdAt: true },
  });

  return NextResponse.json({ session, messages });
}

// Delete a session
export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ sessionId: string }> }) {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { sessionId } = await params;
  const session = await getOwnedSession(user.id, sessionId);
  if (!session) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await db.chatSession.delete({ where: { id: sessionId } });
  return NextResponse.json({ success: true });
}
