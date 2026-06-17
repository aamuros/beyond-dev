import { prisma } from "./prisma";

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_SUBMISSIONS = 3;

export async function isRateLimited(key: string): Promise<boolean> {
  const now = new Date();
  const resetAt = new Date(now.getTime() + WINDOW_MS);

  // Ensure record exists
  await prisma.rateLimit.upsert({
    where: { key },
    create: { key, count: 0, resetAt },
    update: {},
  });

  // Atomically reset expired windows
  await prisma.rateLimit.updateMany({
    where: { key, resetAt: { lt: now } },
    data: { count: 0, resetAt },
  });

  // Atomically increment only if under limit
  const result = await prisma.rateLimit.updateMany({
    where: { key, count: { lt: MAX_SUBMISSIONS } },
    data: { count: { increment: 1 } },
  });

  return result.count === 0;
}
