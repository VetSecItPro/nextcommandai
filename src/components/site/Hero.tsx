import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
      </div>
      <div className="grain pointer-events-none absolute inset-0 -z-0" />

      <div className="mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Next Command AI Consulting, LLC</p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="font-display mt-6 text-[2.4rem] font-light leading-[1.05] text-parchment sm:text-[3.4rem] md:text-[4.4rem] lg:text-[5.2rem]">
              Secure <em className="italic text-brass">AI</em>,
              <br className="hidden sm:block" /> Cybersecurity &amp;{" "}
              <br className="hidden sm:block" />
              Technology Modernization.
            </h1>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 max-w-xl">
              <div className="hairline rule-draw mb-8 w-24" />
              <p className="text-[1.02rem] leading-[1.75] text-parchment-dim md:text-[1.08rem]">
                Next Command AI Consulting, LLC is a veteran-owned consulting
                firm specializing in AI strategy, cybersecurity, and technology
                modernization for government agencies and prime contractors.
              </p>
            </div>
          </Reveal>
          <Reveal delay={520}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 bg-brass px-7 py-4 text-[0.78rem] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-parchment"
              >
                Request a Briefing
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </a>
              <a
                href="#capabilities"
                className="group inline-flex items-center gap-3 text-[0.78rem] uppercase tracking-[0.22em] text-parchment transition-colors hover:text-brass"
              >
                Our Capabilities
                <span className="h-px w-10 bg-hairline-strong transition-[width,background] group-hover:w-16 group-hover:bg-brass" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-6 z-10 flex items-center gap-3 md:right-10">
        <span className="eyebrow text-parchment-faint">Scroll</span>
        <span className="h-12 w-px animate-pulse bg-gradient-to-b from-brass to-transparent" />
      </div>
    </section>
  );
}
