import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

// Returns the DB user for the signed-in Clerk user, creating the row on first
// access. This removes any dependency on the Clerk webhook for the core flow.
export async function getOrCreateUser() {
  const { userId } = await auth();
  if (!userId) return null;

  const existing = await db.user.findUnique({ where: { clerkId: userId } });
  if (existing) return existing;

  const cu = await currentUser();
  const email =
    cu?.emailAddresses?.[0]?.emailAddress ?? `${userId}@no-email.local`;
  const name = [cu?.firstName, cu?.lastName].filter(Boolean).join(" ") || null;

  return db.user.upsert({
    where: { clerkId: userId },
    create: { clerkId: userId, email, name },
    update: {},
  });
}
