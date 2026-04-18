const BUCKETS = new Map<string, { count: number; resetAt: number }>();

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  resetAt: number;
};

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): RateLimitResult {
  const now = Date.now();
  const bucket = BUCKETS.get(key);

  if (!bucket || bucket.resetAt <= now) {
    const resetAt = now + windowMs;
    BUCKETS.set(key, { count: 1, resetAt });
    sweepExpired(now);
    return { ok: true, remaining: limit - 1, resetAt };
  }

  if (bucket.count >= limit) {
    return { ok: false, remaining: 0, resetAt: bucket.resetAt };
  }

  bucket.count += 1;
  return {
    ok: true,
    remaining: limit - bucket.count,
    resetAt: bucket.resetAt,
  };
}

function sweepExpired(now: number) {
  if (BUCKETS.size < 2048) return;
  for (const [key, bucket] of BUCKETS) {
    if (bucket.resetAt <= now) BUCKETS.delete(key);
  }
}

export function clientIpFrom(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("cf-connecting-ip") ??
    "anonymous"
  );
}
