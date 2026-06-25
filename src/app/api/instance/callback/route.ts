import { db } from "@/src/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId, instanceId, containerId, host, port, state } = body;

  if (!userId) {
    return NextResponse.json({ error: "userId required" }, { status: 400 });
  }

  await db.agentInstance.update({
    where: { userId },
    data: {
      containerId: containerId || instanceId,
      internalHost: host,
      port,
      state: state || "RUNNING",
    },
  });

  return NextResponse.json({ success: true });
}
