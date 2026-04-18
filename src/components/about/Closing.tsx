import Reveal from "@/components/site/Reveal";

export default function Closing() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 md:px-10 md:py-40">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-hairline-strong to-transparent" />
      <div className="relative mx-auto max-w-[1100px] text-center">
        <Reveal>
          <p className="eyebrow">Ethos</p>
        </Reveal>
        <Reveal delay={120}>
          <blockquote className="font-display mt-10 text-[1.7rem] font-light italic leading-[1.35] text-parchment md:text-[2.4rem] md:leading-[1.25]">
            &ldquo;A trusted voice, an impactful leader, and an unwavering
            advocate for{" "}
            <span className="not-italic text-brass">positive change</span>.&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-14 flex items-center justify-center gap-5">
            <span className="h-px w-14 bg-hairline-strong" />
            <span className="eyebrow text-parchment-faint">
              Blytheville, Arkansas &middot; Las Vegas, Nevada
            </span>
            <span className="h-px w-14 bg-hairline-strong" />
          </div>
        </Reveal>
        <Reveal delay={380}>
          <a
            href="/#contact"
            className="group mt-14 inline-flex items-center gap-3 bg-brass px-7 py-4 text-[0.78rem] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-parchment"
          >
            Request a Briefing
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
