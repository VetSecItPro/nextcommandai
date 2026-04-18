import Image from "next/image";
import Reveal from "@/components/site/Reveal";

export default function FounderHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:grid-cols-[1.05fr_1fr] md:items-end md:gap-20 md:px-10">
        <Reveal>
          <p className="eyebrow">Founder &amp; CEO</p>
          <div className="hairline rule-draw mt-4 w-16" />
          <h1 className="font-display mt-8 text-[2.6rem] font-light leading-[1.02] text-parchment sm:text-[3.4rem] md:text-[4.4rem]">
            Dr. Cornelia{" "}
            <em className="italic text-brass">&ldquo;Lia&rdquo;</em>{" "}
            <br className="hidden sm:block" />
            Murphy-House
          </h1>
          <p className="mt-8 max-w-xl text-[1rem] leading-[1.8] text-parchment-dim md:text-[1.08rem]">
            U.S. Army Veteran &middot; Executive Leader &middot; Cybersecurity
            Professional &middot; Certified Life Coach &middot; Mission-Driven
            Entrepreneur
          </p>
        </Reveal>

        <Reveal delay={180}>
          <figure className="relative aspect-[4/5] w-full overflow-hidden border border-hairline-strong bg-ink-2">
            <Image
              src="/founder.jpg"
              alt="Dr. Cornelia ‘Lia’ Murphy-House"
              fill
              priority
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 pb-5">
              <span className="eyebrow text-parchment">Portrait</span>
              <span className="h-px w-16 bg-brass" />
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
