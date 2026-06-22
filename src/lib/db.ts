import { PrismaClient } from "@/src/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prisma: any;
};

function createClient() {
  // Prisma v7 requires adapter or accelerateUrl; use accelerateUrl with DATABASE_URL
  // In production with Neon, replace with @prisma/adapter-neon for better serverless perf
  return new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL!,
  });
}

export const db = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
