import type { Metadata } from "next";
import { Footer, Nav } from "@/components/site";
import {
  Biography,
  Closing,
  Credentials,
  FounderHero,
} from "@/components/about";

export const metadata: Metadata = {
  title:
    "About Dr. Cornelia \u201CLia\u201D Murphy-House | Next Command AI Consulting",
  description:
    "Dr. Cornelia \u201CLia\u201D Murphy-House is a U.S. Army Veteran, Executive Leader, Cybersecurity Professional, Certified Life Coach, and Mission-Driven Entrepreneur \u2014 Founder & CEO of Next Command AI Consulting, LLC.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <FounderHero />
        <Biography />
        <Credentials />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
