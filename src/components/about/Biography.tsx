import Reveal from "@/components/site/Reveal";

const paragraphs = [
  "Dr. Cornelia \u201CLia\u201D Murphy-House is a U.S. Army Veteran, Executive Leader, Cybersecurity Professional, Certified Life Coach, and Mission-Driven Entrepreneur whose life reflects Faith, Resilience, Service, and Transformational Leadership. A proud native of Blytheville, Arkansas, and the youngest of 13 siblings, she has built a legacy rooted in perseverance, purpose, and an unwavering commitment to helping others rise.",
  "As the Founder & CEO of Next Command AI Consulting, LLC and 3MARIES, Inc., Dr. Murphy-House leads initiatives that advance Ethical AI, Cybersecurity Awareness, Education, Veteran Empowerment, and Community Support. She is widely respected for combining technical insight with compassionate leadership, equipping individuals, organizations, and communities with the tools and confidence to move forward with clarity and purpose.",
  "A Certified Ethical Hacker (CEH) and Certified AI Consultant, she also serves as Chief of Staff for Come On In Elite, where she provides Strategic Leadership, Operational Excellence, and service-centered support to further the organization\u2019s mission and impact.",
  "Her record of service includes Board Leadership with AUSA, MG John C. Fremont Chapter, Las Vegas, service as an Interviewer for Operation Homefront, and prior volunteer leadership through Zeta Phi Beta Sorority, Incorporated, where she served as State of Nevada DFree Coordinator and State Coordinator for Women Who Win. Her contributions have been honored through The President\u2019s Lifetime Achievement Award and Community Service Awards. Her Leadership, Humanitarian Service, and Dedication to Community Empowerment continue to distinguish her as a trusted voice, impactful leader, and unwavering advocate for positive change.",
];

export default function Biography() {
  return (
    <section className="relative bg-ink px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[260px_1fr] md:gap-24">
        <Reveal className="md:sticky md:top-32 md:self-start">
          <p className="font-display text-[1.3rem] font-light italic leading-[1.3] text-parchment md:text-[1.5rem]">
            Faith. Resilience. Service. Transformational Leadership.
          </p>
          <div className="hairline rule-draw mt-6 w-12" />
        </Reveal>

        <div className="max-w-[65ch] space-y-8 text-[1.02rem] leading-[1.85] text-parchment-dim [text-wrap:pretty] md:space-y-10 md:text-[1.08rem]">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90} as="p">
              <span
                dangerouslySetInnerHTML={{
                  __html: p
                    .replace(
                      /Dr\. Cornelia \u201CLia\u201D Murphy-House/g,
                      '<span class="text-parchment">Dr. Cornelia \u201CLia\u201D Murphy-House</span>',
                    )
                    .replace(
                      /(Next Command AI Consulting, LLC|3MARIES, Inc\.|Come On In Elite|AUSA, MG John C\. Fremont Chapter, Las Vegas|Operation Homefront|Zeta Phi Beta Sorority, Incorporated|The President\u2019s Lifetime Achievement Award)/g,
                      '<em class="not-italic text-parchment">$1</em>',
                    ),
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
