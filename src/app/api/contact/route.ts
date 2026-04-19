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

const escapeHtml = (s: string): string =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

type Submission = {
  fullName: string;
  email: string;
  phone: string | null;
  organization: string | null;
  mission: string | null;
  ip: string;
  userAgent: string | null;
  receivedAt: string;
};

async function sendBriefingEmail(submission: Submission) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.warn(
      "[contact] Resend not configured, logging only",
      submission,
    );
    return { sent: false, reason: "not_configured" };
  }

  const subject = `Briefing request from ${submission.fullName}${submission.organization ? ` (${submission.organization})` : ""}`;

  const missionBlock = submission.mission
    ? `<p style="margin:0 0 4px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#8d866f">Mission</p>
       <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#0a0907;white-space:pre-wrap">${escapeHtml(submission.mission)}</p>`
    : "";

  const html = `<!doctype html><html><body style="margin:0;padding:0;background:#0a0907;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;color:#efe8d4">
    <div style="max-width:600px;margin:0 auto;background:#0a0907">
      <div style="padding:32px;border-bottom:1px solid rgba(200,169,106,.18)">
        <p style="margin:0;font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#c8a96a">Next Command AI Consulting</p>
        <h1 style="margin:16px 0 0;font-family:Georgia,serif;font-weight:300;font-size:28px;line-height:1.15;color:#efe8d4">New briefing request.</h1>
      </div>
      <div style="background:#efe8d4;color:#0a0907;padding:32px">
        <p style="margin:0 0 4px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#8d866f">From</p>
        <p style="margin:0 0 4px;font-size:17px;line-height:1.4;color:#0a0907"><strong>${escapeHtml(submission.fullName)}</strong></p>
        <p style="margin:0 0 24px;font-size:15px;line-height:1.4;color:#0a0907">
          <a style="color:#9c824e;text-decoration:none" href="mailto:${escapeHtml(submission.email)}">${escapeHtml(submission.email)}</a>
          ${submission.phone ? ` &middot; <a style="color:#9c824e;text-decoration:none" href="tel:${escapeHtml(submission.phone)}">${escapeHtml(submission.phone)}</a>` : ""}
        </p>
        ${submission.organization ? `<p style="margin:0 0 4px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#8d866f">Organization</p><p style="margin:0 0 24px;font-size:15px;line-height:1.5;color:#0a0907">${escapeHtml(submission.organization)}</p>` : ""}
        ${missionBlock}
        <hr style="border:none;border-top:1px solid rgba(200,169,106,.42);margin:24px 0" />
        <p style="margin:0;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#8d866f">Received ${escapeHtml(submission.receivedAt)} &middot; ${escapeHtml(submission.ip)}</p>
      </div>
    </div>
  </body></html>`;

  const text = [
    `New briefing request. Next Command AI Consulting`,
    ``,
    `Name:         ${submission.fullName}`,
    `Email:        ${submission.email}`,
    submission.phone ? `Phone:        ${submission.phone}` : null,
    submission.organization ? `Organization: ${submission.organization}` : null,
    ``,
    submission.mission ? `Mission:\n${submission.mission}` : null,
    ``,
    `Received: ${submission.receivedAt} from ${submission.ip}`,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: submission.email,
      subject,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error("[contact] Resend send failed", {
      status: res.status,
      body: body.slice(0, 500),
    });
    return { sent: false, reason: `resend_${res.status}` };
  }
  return { sent: true };
}

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

  const submission: Submission = {
    fullName,
    email,
    phone: truncate(body.phone) || null,
    organization: truncate(body.organization) || null,
    mission: truncate(body.mission) || null,
    ip,
    userAgent: request.headers.get("user-agent")?.slice(0, 500) ?? null,
    receivedAt: new Date().toISOString(),
  };

  const result = await sendBriefingEmail(submission).catch((err) => {
    console.error("[contact] unexpected send error", err);
    return { sent: false, reason: "exception" };
  });

  if (!result.sent) {
    console.log("[contact] briefing request (not emailed)", {
      submission,
      reason: result.reason,
    });
  } else {
    console.log("[contact] briefing request emailed", {
      email: submission.email,
      fullName: submission.fullName,
    });
  }

  return NextResponse.json({ ok: true });
}
