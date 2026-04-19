import Image from "next/image";
import Reveal from "@/components/site/Reveal";

export default function FounderHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-[1fr_340px] md:items-end md:gap-0 md:px-10">
        <Reveal>
          <p className="eyebrow">Founder &amp; CEO</p>
          <div className="hairline rule-draw mt-4 w-16" />
          <h1 className="font-display mt-8 text-[2.4rem] font-light leading-[1.05] text-parchment [text-wrap:balance] sm:text-[3.4rem] sm:leading-[1.02] md:text-[4.4rem]">
            <span className="whitespace-nowrap">Dr. Cornelia</span>{" "}
            <em className="whitespace-nowrap italic text-brass">
              &ldquo;Lia&rdquo;
            </em>{" "}
            <br className="hidden sm:block" />
            <span className="whitespace-nowrap">Murphy-House</span>
          </h1>
          <p className="mt-8 max-w-xl text-[1rem] leading-[1.8] text-parchment-dim md:text-[1.08rem]">
            U.S. Army Veteran &middot; Executive Leader &middot; Cybersecurity
            Professional &middot; Certified Life Coach &middot; Mission-Driven
            Entrepreneur
          </p>
        </Reveal>

        <Reveal delay={180}>
          <figure className="founder-fade relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-visible sm:max-w-[320px] md:mx-0 md:-ml-24 md:max-w-[340px] lg:-ml-[151px]">
            <Image
              src="/founder.jpg"
              alt="Dr. Cornelia ‘Lia’ Murphy-House"
              fill
              priority
              sizes="(min-width: 1024px) 340px, (min-width: 768px) 340px, (min-width: 640px) 320px, 280px"
              quality={95}
              className="object-cover"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
