import ContactForm from "./ContactForm";
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

      <div className="relative mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[0.95fr_1.05fr] md:gap-20">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <div className="hairline rule-draw mt-4 w-16" />
          <h2 className="font-display mt-8 text-[2.2rem] font-light leading-[1.05] text-parchment sm:text-[2.8rem] md:text-[3.6rem]">
            Begin with a <em className="italic text-brass">briefing</em>.
          </h2>
          <p className="mt-8 max-w-lg leading-[1.75] text-parchment-dim">
            Share the outline of the mission. We will respond with a short,
            written read on what we believe a credible path looks like &mdash;
            and whether we are the right partner to walk it with you.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-start gap-4 text-parchment-dim">
              <span className="eyebrow whitespace-nowrap text-parchment-faint">
                Response
              </span>
              <span className="text-[0.95rem] leading-[1.8]">
                Within one business day, Monday&ndash;Friday, Central Time.
              </span>
            </div>
            <div className="flex items-start gap-4 text-parchment-dim">
              <span className="eyebrow whitespace-nowrap text-parchment-faint">
                Privacy
              </span>
              <span className="text-[0.95rem] leading-[1.8]">
                Submissions are treated as confidential business
                correspondence. Unclassified content only.
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
