import Link from "next/link";
import Monogram from "./Monogram";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-ink px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[1.2fr_1fr_1fr] md:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <Monogram className="h-7 w-7 text-brass" />
            <span className="text-[0.82rem] uppercase tracking-[0.24em] text-parchment-dim sm:text-[0.78rem] sm:tracking-[0.28em]">
              Next Command AI Consulting, LLC
            </span>
          </div>
          <p className="font-display mt-8 max-w-md text-[1.2rem] font-light italic leading-snug text-parchment md:text-[1.35rem]">
            Secure AI, cybersecurity &amp; technology modernization — for the
            missions that matter.
          </p>
        </div>

        <div>
          <p className="eyebrow">Site</p>
          <div className="hairline rule-draw mt-3 w-10" />
          <ul className="mt-4 text-[0.95rem] text-parchment-dim">
            {[
              { href: "/#capabilities", label: "Capabilities" },
              { href: "/#served", label: "Who We Serve" },
              { href: "/about", label: "Founder" },
              { href: "/#approach", label: "Approach" },
              { href: "/#contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex min-h-[44px] items-center py-2 transition-colors hover:text-brass"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Office of Record</p>
          <div className="hairline rule-draw mt-3 w-10" />
          <address className="mt-6 space-y-1 text-[0.95rem] not-italic leading-[1.7] text-parchment-dim">
            <div className="py-1">United States</div>
            <p className="py-1 text-parchment-faint">
              Inquiries by briefing request.
            </p>
            <Link
              href="/#contact"
              className="mt-2 inline-flex min-h-[44px] items-center gap-3 border border-hairline-strong px-4 text-[0.72rem] uppercase tracking-[0.22em] text-parchment transition-colors hover:border-brass hover:text-brass"
            >
              Request a Briefing <span aria-hidden>&rarr;</span>
            </Link>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1400px] flex-col gap-4 border-t border-hairline pt-8 text-[0.86rem] uppercase tracking-[0.2em] text-parchment-faint sm:text-[0.8rem] sm:tracking-[0.22em] md:flex-row md:items-center md:justify-between">
        <span>&copy; {year} Next Command AI Consulting, LLC. All rights reserved.</span>
        <span className="text-brass-dim">Veteran-Owned &middot; United States</span>
      </div>
    </footer>
  );
}
