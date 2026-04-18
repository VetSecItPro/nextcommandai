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
      <main className="flex-1">
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
