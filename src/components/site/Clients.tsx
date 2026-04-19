import Reveal from "./Reveal";

const audiences = [
  {
    kicker: "Public Sector",
    name: "Government Agencies",
    body: "Supporting federal, defense, and civilian agencies charged with protecting national interests, where procurement discipline, accreditation pathways, and mission assurance are non-negotiable.",
  },
  {
    kicker: "Private Sector",
    name: "Prime Contractors",
    body: "Partnering with primes delivering into defense, intelligence, and civil programs, augmenting program teams with practitioners who have held the mission on the government side.",
  },
];

type WhyIcon = (props: { className?: string }) => React.ReactElement;

const IconIntegrated: WhyIcon = ({ className }) => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden
    className={className}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 4v5" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M10.8 13.2c0-2.87 2.33-5.2 5.2-5.2s5.2 2.33 5.2 5.2c0 1.8-.9 3.4-2.3 4.35V20H13.1v-2.45c-1.4-.95-2.3-2.55-2.3-4.35Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path d="M13.2 23h5.6M14 26h4" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const IconVeteran: WhyIcon = ({ className }) => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden
    className={className}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="16" cy="16" r="6.5" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="16" cy="16" r="2" fill="currentColor" />
  </svg>
);

const IconResponsible: WhyIcon = ({ className }) => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden
    className={className}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M16 6 6 10v7.5c0 5 4 8.5 10 10.5 6-2 10-5.5 10-10.5V10L16 6Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="m11.5 16.5 3 3 6-7"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
);

const IconScalable: WhyIcon = ({ className }) => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden
    className={className}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="7" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="25" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="7" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="25" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="m9 11 4 4M23 11l-4 4M9 21l4-4M23 21l-4-4"
      stroke="currentColor"
      strokeWidth="1.1"
      opacity="0.7"
    />
  </svg>
);

const reasons: {
  Icon: WhyIcon;
  title: string;
  body: string;
}[] = [
  {
    Icon: IconIntegrated,
    title: "AI + Cybersecurity Integrated Perspective",
    body: "Combines innovation with risk awareness to support secure implementation.",
  },
  {
    Icon: IconVeteran,
    title: "Veteran-Led, Mission-Driven Execution",
    body: "Brings discipline, accountability, and follow-through.",
  },
  {
    Icon: IconResponsible,
    title: "Responsible Technology Focus",
    body: "Prioritizes ethical, practical, and secure solutions over hype.",
  },
  {
    Icon: IconScalable,
    title: "Scalable, Partnership-Ready Model",
    body: "Actively building a curated network across AI, cybersecurity, cloud, and data.",
  },
];

export default function Clients() {
  return (
    <section
      id="served"
      className="relative bg-ink-2 px-6 py-14 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow">Who We Serve</p>
          <div className="hairline rule-draw mt-4 w-16" />
          <h2 className="font-display mt-8 text-[1.8rem] font-light leading-[1.1] text-parchment sm:text-[2.2rem] md:whitespace-nowrap md:text-[2.4rem] lg:text-[2.8rem]">
            Built for the institutions that{" "}
            <em className="italic text-brass">carry</em> the mission.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-px bg-hairline md:mt-10 md:grid-cols-2">
          {audiences.map((a, i) => (
            <Reveal as="article" delay={i * 160} key={a.name}>
              <div className="h-full bg-ink-2 p-10 md:p-14">
                <p className="eyebrow">{a.kicker}</p>
                <h3 className="font-display mt-6 text-[1.8rem] font-light leading-[1.1] text-parchment md:text-[2.2rem]">
                  {a.name}
                </h3>
                <div className="hairline rule-draw mt-6 w-12" />
                <p className="mt-6 max-w-lg leading-[1.75] text-parchment-dim">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <Reveal>
            <p className="eyebrow">Why Next Command</p>
            <div className="hairline rule-draw mt-4 w-12" />
            <h3 className="font-display mt-6 max-w-2xl text-[1.6rem] font-light leading-[1.15] text-parchment md:text-[2rem]">
              An <em className="italic text-brass">integrated</em> perspective,
              led by veterans, built to scale.
            </h3>
          </Reveal>

          <ul className="mt-10 grid gap-px bg-hairline md:mt-12 md:grid-cols-2">
            {reasons.map(({ Icon, title, body }, i) => (
              <Reveal as="li" delay={i * 100} key={title}>
                <div className="flex h-full gap-5 bg-ink-2 p-8 md:p-10">
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center border border-hairline-strong text-brass"
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-[1.2rem] font-light leading-[1.25] text-parchment md:text-[1.35rem]">
                      {title}
                    </p>
                    <p className="mt-3 max-w-lg text-[0.98rem] leading-[1.7] text-parchment-dim">
                      {body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200}>
            <blockquote className="mt-12 flex gap-5 border-l-2 border-brass pl-6 md:mt-16 md:pl-8">
              <p className="font-display text-[1.3rem] font-light italic leading-[1.4] text-parchment md:text-[1.7rem] md:leading-[1.35]">
                &ldquo;We don&rsquo;t just implement AI, we align it with{" "}
                <span className="not-italic text-brass">
                  security, mission objectives, and real-world execution
                </span>
                .&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
