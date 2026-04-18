import { NextResponse } from "next/server";
import { clientIpFrom, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  fullName?: string;
  email?: string;
  phone?: string;
  organization?: string;
  mission?: string;
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 8 * 1024;
const MAX_FIELD_CHARS = 4000;

export async function POST(request: Request) {
  const ip = clientIpFrom(request);
  const limit = rateLimit(`contact:${ip}`, {
    limit: 5,
    windowMs: 15 * 60 * 1000,
  });
  if (!limit.ok) {
    const retryAfter = Math.max(
      1,
      Math.ceil((limit.resetAt - Date.now()) / 1000),
    );
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(retryAfter) } },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const truncate = (value: unknown): string => {
    if (typeof value !== "string") return "";
    return value.slice(0, MAX_FIELD_CHARS).trim();
  };

  const fullName = truncate(body.fullName);
  const email = truncate(body.email);
  if (!fullName || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const submission = {
    fullName,
    email,
    phone: truncate(body.phone) || null,
    organization: truncate(body.organization) || null,
    mission: truncate(body.mission) || null,
    ip,
    receivedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent")?.slice(0, 500) ?? null,
  };

  console.log("[contact] briefing request received", submission);

  return NextResponse.json({ ok: true });
}
