import { db } from "@/src/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Called by the worker when an agent's provisioning state changes.
export async function POST(req: NextRequest) {
  const token = req.headers.get("x-internal-token");
  if (process.env.WORKER_INTERNAL_TOKEN && token !== process.env.WORKER_INTERNAL_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { agentId, containerId, host, port, state } = await req.json();
  if (!agentId) {
    return NextResponse.json({ error: "agentId required" }, { status: 400 });
  }

  await db.agentInstance.update({
    where: { id: agentId },
    data: {
      ...(containerId ? { containerId } : {}),
      ...(host ? { internalHost: host } : {}),
      ...(port ? { port } : {}),
      state: state || "RUNNING",
    },
  });

  return NextResponse.json({ success: true });
}
