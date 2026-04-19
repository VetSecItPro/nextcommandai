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
      </div>
    </section>
  );
}
