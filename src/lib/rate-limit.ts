import { prisma } from "./prisma";

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_SUBMISSIONS = 3;

export async function isRateLimited(key: string): Promise<boolean> {
  const now = new Date();
  const resetAt = new Date(now.getTime() + WINDOW_MS);

  const record = await prisma.rateLimit.findUnique({ where: { key } });

  if (!record) {
    await prisma.rateLimit.create({
      data: { key, count: 1, resetAt },
    });
    return false;
  }

  if (record.resetAt < now) {
    await prisma.rateLimit.update({
      where: { key },
      data: { count: 1, resetAt },
    });
    return false;
  }

  if (record.count >= MAX_SUBMISSIONS) {
    return true;
  }

  await prisma.rateLimit.update({
    where: { key },
    data: { count: { increment: 1 } },
  });
  return false;
}
