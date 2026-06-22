import { auth } from "@clerk/nextjs/server";
import { db } from "@/src/lib/db";
import { encrypt } from "@/src/lib/encryption";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await db.user.findUnique({ where: { clerkId: userId } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const keys = await db.modelKey.findMany({
    where: { userId: user.id },
    select: { id: true, provider: true, label: true, createdAt: true },
  });

  return NextResponse.json({ keys });
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

  const { provider, key, label } = await req.json();
  if (!provider || !key) {
    return NextResponse.json(
      { error: "Provider and key are required" },
      { status: 400 },
    );
  }

  const encryptedKey = encrypt(key);

  const modelKey = await db.modelKey.create({
    data: {
      userId: user.id,
      provider,
      encryptedKey,
      label: label || `${provider} key`,
    },
    select: { id: true, provider: true, label: true, createdAt: true },
  });

  await db.auditLog.create({
    data: {
      userId: user.id,
      action: "model_key.created",
      details: { provider, keyId: modelKey.id },
    },
  });

  return NextResponse.json({ key: modelKey }, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await db.user.findUnique({ where: { clerkId: userId } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const { searchParams } = new URL(req.url);
  const keyId = searchParams.get("id");
  if (!keyId) {
    return NextResponse.json({ error: "Key ID required" }, { status: 400 });
  }

  const key = await db.modelKey.findFirst({
    where: { id: keyId, userId: user.id },
  });
  if (!key) {
    return NextResponse.json({ error: "Key not found" }, { status: 404 });
  }

  await db.modelKey.delete({ where: { id: keyId } });

  await db.auditLog.create({
    data: {
      userId: user.id,
      action: "model_key.deleted",
      details: { provider: key.provider, keyId },
    },
  });

  return NextResponse.json({ success: true });
}
