import { auth } from "@clerk/nextjs/server";
import { db } from "@/src/lib/db";
import { startInstance } from "@/src/lib/worker-client";
import { NextResponse } from "next/server";

export async function POST() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await db.user.findUnique({
    where: { clerkId: userId },
    include: { agentInstance: true },
  });

  if (!user?.agentInstance?.containerId) {
    return NextResponse.json({ error: "No instance found" }, { status: 404 });
  }

  try {
    await startInstance(user.agentInstance.containerId);
    await db.agentInstance.update({
      where: { userId: user.id },
      data: { state: "RUNNING" },
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to start instance" }, { status: 500 });
  }
}
