import { auth } from "@clerk/nextjs/server";
import { db } from "@/src/lib/db";
import { loadPacks } from "@/src/lib/packs";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await db.user.findUnique({
    where: { clerkId: userId },
    include: { packsEnabled: true },
  });

  const allPacks = loadPacks();
  const enabledPackIds = user?.packsEnabled.map((p: { packId: string }) => p.packId) || [];

  return NextResponse.json({
    packs: allPacks.map((pack) => ({
      ...pack,
      enabled: enabledPackIds.includes(pack.id),
    })),
  });
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await db.user.findUnique({ where: { clerkId: userId } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const { packId } = await req.json();
  const allPacks = loadPacks();
  if (!allPacks.find((p) => p.id === packId)) {
    return NextResponse.json({ error: "Invalid pack" }, { status: 400 });
  }

  await db.packEnabled.upsert({
    where: { userId_packId: { userId: user.id, packId } },
    create: { userId: user.id, packId },
    update: {},
  });

  return NextResponse.json({ success: true });
}
