import Reveal from "@/components/site/Reveal";

const roles = [
  { label: "Founder & CEO", org: "Next Command AI Consulting, LLC" },
  { label: "Founder & CEO", org: "3MARIES, Inc." },
  { label: "Chief of Staff", org: "Come On In Elite" },
];

const certifications = [
  "U.S. Army Veteran",
  "Executive Leader",
  "Cybersecurity Professional",
  "Certified Ethical Hacker (CEH)",
  "Certified AI Consultant",
  "Certified Life Coach",
];

const service = [
  "Board Leadership \u2014 AUSA, MG John C. Fremont Chapter, Las Vegas",
  "Interviewer \u2014 Operation Homefront",
  "State of Nevada DFree Coordinator \u2014 Zeta Phi Beta Sorority, Incorporated",
  "State Coordinator for Women Who Win \u2014 Zeta Phi Beta Sorority, Incorporated",
];

const honors = [
  "The President\u2019s Lifetime Achievement Award",
  "Community Service Awards",
];

type Column = {
  kicker: string;
  title: string;
  items: string[];
  subItems?: { primary: string; secondary: string }[];
};

export default function Credentials() {
  const columns: Column[] = [
    {
      kicker: "Leadership",
      title: "Roles",
      items: [],
      subItems: roles.map((r) => ({ primary: r.label, secondary: r.org })),
    },
    { kicker: "Credentials", title: "Professional", items: certifications },
    { kicker: "Service", title: "Community &amp; Veteran", items: service },
    { kicker: "Recognition", title: "Honors", items: honors },
  ];

  return (
    <section className="relative bg-ink-2 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow">Record</p>
          <div className="hairline rule-draw mt-4 w-16" />
          <h2 className="font-display mt-8 max-w-3xl text-[2rem] font-light leading-[1.08] text-parchment sm:text-[2.4rem] md:text-[3rem]">
            A record of <em className="italic text-brass">service</em>,
            credential, and recognition.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-hairline md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {columns.map((col, i) => (
            <Reveal as="article" delay={i * 100} key={col.title}>
              <div className="h-full bg-ink-2 p-8 md:p-10">
                <p className="eyebrow">{col.kicker}</p>
                <h3
                  className="font-display mt-5 text-[1.35rem] font-light leading-[1.2] text-parchment md:text-[1.55rem]"
                  dangerouslySetInnerHTML={{ __html: col.title }}
                />
                <div className="hairline rule-draw mt-5 w-10" />
                <ul className="mt-6 space-y-4 text-[0.95rem] leading-[1.65] text-parchment-dim">
                  {col.subItems
                    ? col.subItems.map((s) => (
                        <li key={s.secondary} className="flex gap-3">
                          <span className="mt-2 block h-px w-3 shrink-0 bg-brass" />
                          <span>
                            <span className="block text-parchment">
                              {s.primary}
                            </span>
                            <span className="block text-[0.88rem] text-parchment-faint">
                              {s.secondary}
                            </span>
                          </span>
                        </li>
                      ))
                    : col.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 block h-px w-3 shrink-0 bg-brass" />
                          <span>{item}</span>
                        </li>
                      ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
