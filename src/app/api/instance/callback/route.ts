import { db } from "@/src/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Called by the worker service when provisioning state changes. The userId here
// is the Clerk id (the canonical key the worker uses).
export async function POST(req: NextRequest) {
  const token = req.headers.get("x-internal-token");
  if (process.env.WORKER_INTERNAL_TOKEN && token !== process.env.WORKER_INTERNAL_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { userId, instanceId, containerId, host, port, state } = body;

  if (!userId) {
    return NextResponse.json({ error: "userId required" }, { status: 400 });
  }

  const user = await db.user.findUnique({ where: { clerkId: userId } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  await db.agentInstance.update({
    where: { userId: user.id },
    data: {
      containerId: containerId || instanceId,
      internalHost: host,
      port,
      state: state || "RUNNING",
    },
  });

  return NextResponse.json({ success: true });
}
