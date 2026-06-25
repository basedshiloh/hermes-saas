import { db } from "@/src/lib/db";
import { getOrCreateUser } from "@/src/lib/user";
import { createHmac } from "crypto";
import { NextRequest, NextResponse } from "next/server";

// Returns a signed wss:// URL for chatting with a specific agent. We verify the
// signed-in user owns the agent, then sign the agentId with the worker's shared
// secret. The secret never reaches the browser.
export async function GET(req: NextRequest) {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const agentId = req.nextUrl.searchParams.get("agentId");
  if (!agentId) return NextResponse.json({ error: "agentId required" }, { status: 400 });

  const agent = await db.agentInstance.findFirst({
    where: { id: agentId, userId: user.id },
  });
  if (!agent) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const wsBase = process.env.WORKER_WS_URL;
  const token = process.env.WORKER_INTERNAL_TOKEN;
  if (!wsBase || !token) {
    return NextResponse.json({ wsUrl: null });
  }

  const sig = createHmac("sha256", token).update(agentId).digest("hex");
  const wsUrl = `${wsBase}?agentId=${encodeURIComponent(agentId)}&sig=${sig}`;

  return NextResponse.json({ wsUrl });
}
