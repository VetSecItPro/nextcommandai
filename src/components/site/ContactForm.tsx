"use client";

import { useState } from "react";

type Step = 1 | 2 | "success";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  mission: string;
  website: string;
};

const initial: FormState = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  mission: "",
  website: "",
};

const inputBase =
  "h-12 w-full border border-hairline bg-ink-2/60 px-4 text-[0.95rem] text-parchment placeholder:text-parchment-faint transition-colors focus:border-brass focus:outline-none";

const labelBase =
  "text-[0.7rem] uppercase tracking-[0.22em] text-parchment-dim";

export default function ContactForm() {
  const [step, setStep] = useState<Step>(1);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState<FormState>(initial);

  function advanceToStep2(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    if (!form.fullName.trim() || !form.email.trim()) {
      setError("Name and email are required.");
      return;
    }
    setStep(2);
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setBusy(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });
    setBusy(false);

    if (!res.ok) {
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      setError(body.error ?? "Something went wrong. Please try again.");
      return;
    }
    setStep("success");
  }

  if (step === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col gap-6 border border-brass/40 bg-ink-2/80 p-10 text-parchment md:p-14"
      >
        <p className="eyebrow">Received</p>
        <div className="hairline w-12" />
        <h3 className="font-display text-[1.8rem] font-light leading-[1.15] md:text-[2.1rem]">
          Briefing received.
        </h3>
        <p className="max-w-md text-[0.98rem] leading-[1.75] text-parchment-dim">
          A member of the practice will respond with a short, written read
          within one business day, Monday&ndash;Friday, Central Time.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-hairline-strong bg-ink/60 backdrop-blur-sm">
      <div className="flex items-center gap-3 border-b border-hairline px-6 py-4 text-[0.7rem] uppercase tracking-[0.22em] md:px-8">
        <span
          className={
            step === 1 ? "text-brass" : "text-parchment-faint"
          }
        >
          01 &middot; Contact
        </span>
        <span className="h-px w-8 bg-hairline-strong" aria-hidden />
        <span
          className={
            step === 2 ? "text-brass" : "text-parchment-faint"
          }
        >
          02 &middot; Engagement
        </span>
      </div>

      <div className="p-6 md:p-8">
        {step === 1 ? (
          <form onSubmit={advanceToStep2} className="flex flex-col gap-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className={labelBase}>
                  Full Name <span className="text-brass">*</span>
                </label>
                <input
                  id="fullName"
                  required
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, fullName: e.target.value }))
                  }
                  placeholder="Your full name"
                  className={inputBase}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelBase}>
                  Email <span className="text-brass">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, email: e.target.value }))
                  }
                  placeholder="you@agency.gov"
                  className={inputBase}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className={labelBase}>
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, phone: e.target.value }))
                  }
                  placeholder="(555) 000-0000"
                  className={inputBase}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="organization" className={labelBase}>
                  Organization
                </label>
                <input
                  id="organization"
                  autoComplete="organization"
                  value={form.organization}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, organization: e.target.value }))
                  }
                  placeholder="Agency, prime, or program office"
                  className={inputBase}
                />
              </div>
            </div>

            <div aria-hidden className="absolute -left-[9999px] top-[-9999px]">
              <label>
                Website
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, website: e.target.value }))
                  }
                />
              </label>
            </div>

            {error ? (
              <p role="alert" className="text-[0.9rem] text-brass">
                {error}
              </p>
            ) : null}

            <div className="flex items-center justify-end pt-2">
              <button
                type="submit"
                className="group inline-flex min-h-[52px] items-center gap-3 bg-brass px-7 text-[0.78rem] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-parchment"
              >
                Continue
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="mission" className={labelBase}>
                Tell us about the mission.
              </label>
              <textarea
                id="mission"
                rows={6}
                value={form.mission}
                onChange={(e) =>
                  setForm((s) => ({ ...s, mission: e.target.value }))
                }
                placeholder="A few sentences on the program, the decision in front of you, and any constraints we should know up front."
                className="min-h-[160px] w-full border border-hairline bg-ink-2/60 p-4 text-[0.98rem] leading-[1.7] text-parchment placeholder:text-parchment-faint transition-colors focus:border-brass focus:outline-none"
              />
              <p className="text-[0.78rem] text-parchment-faint">
                Unclassified content only. Response within one business day.
              </p>
            </div>

            {error ? (
              <p role="alert" className="text-[0.9rem] text-brass">
                {error}
              </p>
            ) : null}

            <div className="flex flex-col-reverse items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex min-h-[52px] items-center justify-center border border-hairline-strong px-6 text-[0.78rem] uppercase tracking-[0.22em] text-parchment transition-colors hover:border-brass hover:text-brass"
              >
                &larr; Back
              </button>
              <button
                type="submit"
                disabled={busy}
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 bg-brass px-7 text-[0.78rem] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-parchment disabled:opacity-60"
              >
                {busy ? "Sending..." : "Send Briefing Request"}
                {!busy ? (
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                ) : null}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
