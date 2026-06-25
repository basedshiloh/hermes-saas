import { db } from "@/src/lib/db";
import { getOrCreateUser } from "@/src/lib/user";
import { encrypt } from "@/src/lib/encryption";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const keys = await db.modelKey.findMany({
    where: { userId: user.id },
    select: { id: true, provider: true, label: true, createdAt: true },
  });

  return NextResponse.json({ keys });
}

export async function POST(req: NextRequest) {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { provider, key, label } = await req.json();
  if (!provider || !key) {
    return NextResponse.json({ error: "Provider and key are required" }, { status: 400 });
  }

  const modelKey = await db.modelKey.create({
    data: {
      userId: user.id,
      provider,
      encryptedKey: encrypt(key),
      label: label || `${provider} key`,
    },
    select: { id: true, provider: true, label: true, createdAt: true },
  });

  return NextResponse.json({ key: modelKey }, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const user = await getOrCreateUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const keyId = searchParams.get("id");
  if (!keyId) return NextResponse.json({ error: "Key ID required" }, { status: 400 });

  const key = await db.modelKey.findFirst({ where: { id: keyId, userId: user.id } });
  if (!key) return NextResponse.json({ error: "Key not found" }, { status: 404 });

  await db.modelKey.delete({ where: { id: keyId } });
  return NextResponse.json({ success: true });
}
