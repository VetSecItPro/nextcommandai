import Reveal from "./Reveal";

type Capability = {
  index: string;
  name: string;
  title: string;
  body: string;
};

const capabilities: Capability[] = [
  {
    index: "01",
    name: "Secure AI",
    title: "AI strategy with operational discipline.",
    body: "We help leaders adopt artificial intelligence without surrendering control — from mission framing and model selection to governance, safety review, and the guardrails required for classified and regulated environments.",
  },
  {
    index: "02",
    name: "Cybersecurity",
    title: "Posture hardened for adversaries, not checklists.",
    body: "Threat-informed architecture, zero-trust implementation, continuous monitoring, and incident response — engineered for organizations whose adversaries are deliberate, well-resourced, and patient.",
  },
  {
    index: "03",
    name: "Technology Modernization",
    title: "Legacy systems, reshaped for the decade ahead.",
    body: "Cloud migration, data platform re-architecture, and the careful sequencing of modernization programs so that capability grows while mission continuity is preserved.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-ink px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] gap-20 md:grid-cols-[340px_1fr] md:gap-28">
        <Reveal className="md:sticky md:top-28 md:self-start">
          <p className="eyebrow">Capabilities</p>
          <div className="hairline rule-draw mt-4 w-16" />
          <h2 className="font-display mt-8 text-[2rem] font-light leading-[1.1] text-parchment sm:text-[2.4rem] md:text-[2.8rem]">
            Three disciplines, <em className="italic text-brass">one</em>{" "}
            command.
          </h2>
          <p className="mt-6 max-w-sm text-parchment-dim">
            Every engagement is authored for the shape of the mission — not
            assembled from templates.
          </p>
        </Reveal>

        <ol className="divide-y divide-hairline border-y border-hairline">
          {capabilities.map((c, i) => (
            <Reveal as="li" delay={i * 120} key={c.index}>
              <article className="group grid gap-6 py-10 md:grid-cols-[64px_180px_1fr] md:items-start md:gap-10 md:py-14">
                <span className="font-display text-brass text-[0.9rem] tracking-[0.3em]">
                  {c.index}
                </span>
                <h3 className="font-display text-[1.6rem] font-light leading-[1.1] text-parchment md:text-[1.75rem]">
                  {c.name}
                </h3>
                <div>
                  <p className="font-display text-[1.25rem] font-light italic leading-snug text-parchment md:text-[1.4rem]">
                    {c.title}
                  </p>
                  <p className="mt-4 max-w-2xl leading-[1.75] text-parchment-dim">
                    {c.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
