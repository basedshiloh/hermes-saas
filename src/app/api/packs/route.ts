import { auth } from "@clerk/nextjs/server";
import { db } from "@/src/lib/db";
import { getOrCreateUser } from "@/src/lib/user";
import { PACKS } from "@/src/data/mock-dashboard";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await db.user.findUnique({
    where: { clerkId: userId },
    include: { packsEnabled: true },
  });

  const enabledPackIds = user?.packsEnabled.map((p: { packId: string }) => p.packId) || [];

  return NextResponse.json({
    packs: PACKS.map((pack) => ({
      ...pack,
      enabled: enabledPackIds.includes(pack.id),
    })),
  });
}

export async function POST(req: NextRequest) {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { packId } = await req.json();
  if (!PACKS.find((p) => p.id === packId)) {
    return NextResponse.json({ error: "Invalid pack" }, { status: 400 });
  }

  await db.packEnabled.upsert({
    where: { userId_packId: { userId: user.id, packId } },
    create: { userId: user.id, packId },
    update: {},
  });

  return NextResponse.json({ success: true });
}
