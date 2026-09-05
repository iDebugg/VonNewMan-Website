import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { Difference } from "@/components/sections/Difference";
import { TrustBand } from "@/components/sections/TrustBand";
import { Products } from "@/components/sections/Products";
import { Approach } from "@/components/sections/Approach";
import { Services } from "@/components/sections/Services";
import { Sectors } from "@/components/sections/Sectors";
import { Locations } from "@/components/sections/Locations";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        <Hero />
        <Difference />
        <TrustBand />
        <Products />
        <Approach />
        <Services />
        <Sectors />
        <Locations />
        <Team />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
