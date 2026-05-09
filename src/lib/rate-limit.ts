const submissions = new Map<string, number[]>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_SUBMISSIONS = 3;

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userSubmissions = submissions.get(ip) || [];

  const recentSubmissions = userSubmissions.filter(
    (time) => now - time < WINDOW_MS
  );

  if (recentSubmissions.length >= MAX_SUBMISSIONS) {
    return true;
  }

  submissions.set(ip, [...recentSubmissions, now]);
  return false;
}
