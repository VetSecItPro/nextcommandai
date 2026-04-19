import Link from "next/link";
import Monogram from "./Monogram";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-ink px-6 py-6 md:px-10 md:py-7">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex items-center gap-3">
          <Monogram className="h-7 w-7 text-brass" />
          <span className="text-[0.78rem] uppercase tracking-[0.24em] text-parchment-dim">
            Next Command AI Consulting, LLC
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.75rem] uppercase tracking-[0.22em] text-parchment-dim md:gap-x-8">
          {[
            { href: "/#capabilities", label: "Capabilities" },
            { href: "/#served", label: "Who We Serve" },
            { href: "/#approach", label: "Approach" },
            { href: "/about", label: "Founder" },
            { href: "/#contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex min-h-[32px] items-center transition-colors hover:text-brass"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-5 flex max-w-[1400px] flex-col gap-2 border-t border-hairline pt-4 text-[0.78rem] uppercase tracking-[0.2em] text-parchment-faint md:flex-row md:items-center md:justify-between">
        <span>&copy; {year} Next Command AI Consulting, LLC. All rights reserved.</span>
        <span className="text-brass-dim">Veteran-Owned &middot; United States</span>
      </div>
    </footer>
  );
}
