import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const fullName = (body.fullName ?? "").trim();
  const email = (body.email ?? "").trim();
  if (!fullName || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const submission = {
    fullName,
    email,
    phone: (body.phone ?? "").trim() || null,
    organization: (body.organization ?? "").trim() || null,
    mission: (body.mission ?? "").trim() || null,
    receivedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") ?? null,
  };

  console.log("[contact] briefing request received", submission);

  return NextResponse.json({ ok: true });
}
