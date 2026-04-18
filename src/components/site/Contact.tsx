import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink-2 px-6 py-28 md:px-10 md:py-44"
    >
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.06]">
        <svg
          aria-hidden
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-brass" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[1.15fr_1fr] md:gap-24">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <div className="hairline rule-draw mt-4 w-16" />
          <h2 className="font-display mt-8 text-[2.2rem] font-light leading-[1.05] text-parchment sm:text-[2.8rem] md:text-[3.6rem]">
            Begin with a <em className="italic text-brass">briefing</em>.
          </h2>
          <p className="mt-8 max-w-lg leading-[1.75] text-parchment-dim">
            Share the outline of the mission. We will respond with a short,
            written read on what we believe a credible path looks like — and
            whether we are the right partner to walk it with you.
          </p>

          <div className="mt-12 space-y-6">
            <a
              href="mailto:contact@nextcommandai.com?subject=Briefing%20Request"
              className="group inline-flex items-center gap-4 text-parchment transition-colors hover:text-brass"
            >
              <span className="eyebrow text-parchment-faint">Direct</span>
              <span className="font-display text-[1.4rem] font-light md:text-[1.7rem]">
                contact@nextcommandai.com
              </span>
              <span
                aria-hidden
                className="h-px w-10 bg-hairline-strong transition-[width,background] group-hover:w-16 group-hover:bg-brass"
              />
            </a>

            <div className="flex items-start gap-4 text-parchment-dim">
              <span className="eyebrow text-parchment-faint">Hours</span>
              <span className="text-[0.95rem] leading-[1.8]">
                Responses within one business day, Mon-Fri, Central Time.
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="border border-hairline-strong bg-ink/40 p-8 backdrop-blur-sm md:p-10">
            <p className="eyebrow">By Appointment</p>
            <h3 className="font-display mt-5 text-[1.6rem] font-light leading-[1.15] text-parchment md:text-[1.9rem]">
              Private consultations with the founding principals.
            </h3>
            <div className="hairline rule-draw mt-6 w-10" />
            <ul className="mt-8 space-y-5 text-[0.95rem] leading-[1.7] text-parchment-dim">
              <li className="flex gap-4">
                <span className="mt-2 block h-px w-4 shrink-0 bg-brass" />
                <span>
                  <span className="text-parchment">Discovery.</span> A focused
                  conversation on mission, constraints, and the decision in
                  front of you.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="mt-2 block h-px w-4 shrink-0 bg-brass" />
                <span>
                  <span className="text-parchment">Read-back.</span> A written
                  assessment you can circulate inside your organization without
                  editing.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="mt-2 block h-px w-4 shrink-0 bg-brass" />
                <span>
                  <span className="text-parchment">Path forward.</span> A
                  proposed sequence of work if — and only if — there is one
                  worth proposing.
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
