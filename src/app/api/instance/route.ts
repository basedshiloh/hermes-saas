import { auth } from "@clerk/nextjs/server";
import { db } from "@/src/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await db.user.findUnique({
    where: { clerkId: userId },
    include: {
      agentInstance: {
        include: {
          provisioningJobs: { orderBy: { startedAt: "desc" }, take: 1 },
        },
      },
    },
  });

  return NextResponse.json({ instance: user?.agentInstance || null });
}
