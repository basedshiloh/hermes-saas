import { auth } from "@clerk/nextjs/server";
import { createHmac } from "crypto";
import { NextResponse } from "next/server";

// Returns a signed wss:// URL for the dashboard chat. The worker's internal
// token never reaches the browser — we only send an HMAC of the user's id.
export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const wsBase = process.env.WORKER_WS_URL; // e.g. wss://46-225-17-248.sslip.io/worker/chat
  const token = process.env.WORKER_INTERNAL_TOKEN;

  if (!wsBase || !token) {
    // Not configured yet — dashboard falls back to demo mode
    return NextResponse.json({ wsUrl: null });
  }

  const sig = createHmac("sha256", token).update(userId).digest("hex");
  const wsUrl = `${wsBase}?userId=${encodeURIComponent(userId)}&sig=${sig}`;

  return NextResponse.json({ wsUrl });
}
