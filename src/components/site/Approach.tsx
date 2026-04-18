import Reveal from "./Reveal";

const tenets = [
  {
    label: "Veteran-Owned",
    body: "Founded and led by operators who served the mission first. Advice is grounded in accountability, not theater.",
  },
  {
    label: "Command-Grade Rigor",
    body: "Clarity of intent, discipline of execution, honesty in reporting — the standards a commander expects of a staff.",
  },
  {
    label: "Quiet Delivery",
    body: "Results that your program office can defend in a review, and your adversary will not notice until it is too late.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-ink px-6 py-28 md:px-10 md:py-44"
    >
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-hairline-strong to-transparent" />

      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          <p className="eyebrow">Our Approach</p>
        </Reveal>
        <Reveal delay={100}>
          <blockquote className="font-display mt-10 text-[1.75rem] font-light italic leading-[1.35] text-parchment md:text-[2.6rem] md:leading-[1.25]">
            &ldquo;The advantage belongs to the side that sees first, decides
            first, and acts with the fewest regrets. Our craft is to put that
            advantage in the hands of the{" "}
            <span className="not-italic text-brass">mission owner</span>.&rdquo;
          </blockquote>
        </Reveal>

        <div className="mt-20 grid gap-10 text-left md:mt-28 md:grid-cols-3 md:gap-12">
          {tenets.map((t, i) => (
            <Reveal key={t.label} delay={i * 140}>
              <div className="border-t border-hairline-strong pt-6">
                <p className="eyebrow">{t.label}</p>
                <p className="mt-4 leading-[1.75] text-parchment-dim">
                  {t.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
