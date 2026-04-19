"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Monogram from "./Monogram";

const links = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#served", label: "Who We Serve" },
  { href: "/#approach", label: "Approach" },
  { href: "/about", label: "Founder" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const sheetId = "mobile-nav-sheet";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
        scrolled || open
          ? "bg-ink/85 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:h-20 md:px-10">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group -mx-2 inline-flex h-12 w-12 items-center justify-center text-parchment md:h-14 md:w-auto md:gap-3 md:px-2"
          aria-label="Next Command AI - Home"
        >
          <Monogram className="h-7 w-7 text-brass transition-colors group-hover:text-parchment" />
          <span className="hidden text-[0.72rem] uppercase tracking-[0.28em] text-parchment-dim md:block">
            Next Command AI
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.78rem] uppercase tracking-[0.22em] text-parchment-dim transition-colors hover:text-parchment focus-visible:text-parchment"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="group relative hidden items-center gap-2 border border-hairline-strong px-4 py-2.5 text-[0.72rem] uppercase tracking-[0.22em] text-parchment transition-colors hover:border-brass hover:text-brass md:inline-flex md:px-5"
          >
            <span>Request a Briefing</span>
            <span
              aria-hidden
              className="translate-y-[-1px] transition-transform group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={sheetId}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-12 w-12 items-center justify-center text-parchment transition-colors hover:text-brass md:hidden"
          >
            <span className="relative block h-[18px] w-6" aria-hidden>
              <span
                className={`absolute inset-x-0 top-[3px] h-px bg-current transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-[9px] h-px bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute inset-x-0 top-[15px] h-px bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id={sheetId}
        className={`overflow-hidden border-t border-hairline transition-[max-height,opacity] duration-500 md:hidden ${
          open ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-1 px-4 py-6">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${open ? 120 + i * 40 : 0}ms` }}
              className={`block border-b border-hairline py-5 text-[0.82rem] uppercase tracking-[0.22em] text-parchment-dim transition-all duration-500 hover:text-brass focus-visible:text-brass ${
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${open ? 280 : 0}ms` }}
            className={`mt-6 inline-flex min-h-[52px] items-center justify-center gap-3 bg-brass px-6 text-[0.78rem] uppercase tracking-[0.22em] text-ink transition-all duration-500 hover:bg-parchment ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            Request a Briefing
            <span aria-hidden>&rarr;</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
