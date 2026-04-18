"use client";

import { useEffect, useState } from "react";
import Monogram from "./Monogram";

const links = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#served", label: "Who We Serve" },
  { href: "/about", label: "Founder" },
  { href: "/#approach", label: "Approach" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
        scrolled
          ? "bg-ink/72 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
        <a href="/" className="group flex items-center gap-3 text-parchment">
          <Monogram className="h-7 w-7 text-brass transition-colors group-hover:text-parchment" />
          <span className="hidden text-[0.72rem] uppercase tracking-[0.28em] text-parchment-dim sm:block">
            Next Command AI
          </span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.78rem] uppercase tracking-[0.22em] text-parchment-dim transition-colors hover:text-parchment"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/#contact"
          className="group relative inline-flex items-center gap-2 border border-hairline-strong px-4 py-2.5 text-[0.72rem] uppercase tracking-[0.22em] text-parchment transition-colors hover:border-brass hover:text-brass md:px-5"
        >
          <span>Request a Briefing</span>
          <span aria-hidden className="translate-y-[-1px] transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>
    </header>
  );
}
