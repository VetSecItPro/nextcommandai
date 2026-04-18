import {
  Approach,
  Capabilities,
  Clients,
  Contact,
  Footer,
  Hero,
  Nav,
} from "@/components/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero />
        <Capabilities />
        <Clients />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
