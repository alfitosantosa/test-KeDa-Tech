import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { QuoteBand } from "@/components/quote-band";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <QuoteBand />
      <Pricing />
      <Contact />
      <SiteFooter />
    </main>
  );
}
