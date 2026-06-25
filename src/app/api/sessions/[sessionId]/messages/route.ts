import { db } from "@/src/lib/db";
import { getOrCreateUser } from "@/src/lib/user";
import { NextRequest, NextResponse } from "next/server";

// Append a message to a session (called by the chat UI to persist history)
export async function POST(req: NextRequest, { params }: { params: Promise<{ sessionId: string }> }) {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { sessionId } = await params;
  const session = await db.chatSession.findFirst({
    where: { id: sessionId, agent: { userId: user.id } },
    include: { _count: { select: { messages: true } } },
  });
  if (!session) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { role, content } = await req.json();
  if ((role !== "user" && role !== "assistant") || typeof content !== "string") {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  const message = await db.chatMessage.create({
    data: { sessionId, role, content },
  });

  // Title the session from the first user message; bump updatedAt for ordering
  const isFirstUserMsg = session._count.messages === 0 && role === "user";
  await db.chatSession.update({
    where: { id: sessionId },
    data: {
      updatedAt: new Date(),
      ...(isFirstUserMsg
        ? { title: content.slice(0, 60) + (content.length > 60 ? "..." : "") }
        : {}),
    },
  });

  return NextResponse.json({ message }, { status: 201 });
}
