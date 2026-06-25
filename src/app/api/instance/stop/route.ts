import { auth } from "@clerk/nextjs/server";
import { db } from "@/src/lib/db";
import { stopInstance } from "@/src/lib/worker-client";
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
    await stopInstance(user.agentInstance.containerId);
    await db.agentInstance.update({
      where: { userId: user.id },
      data: { state: "SLEEPING" },
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to stop instance" }, { status: 500 });
  }
}
