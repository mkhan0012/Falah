import { Metadata } from "next";
import VyomaHero from "@/components/sections/VyomaHero";
import VyomaTicker from "@/components/sections/VyomaTicker";
import VyomaGrowthSystem from "@/components/sections/VyomaGrowthSystem";
import VyomaBelief from "@/components/sections/VyomaBelief";
import VyomaWhyGrowthWins from "@/components/sections/VyomaWhyGrowthWins";
import VyomaTrustAudiences from "@/components/sections/VyomaTrustAudiences";
import VyomaHowWeWork from "@/components/sections/VyomaHowWeWork";
import VyomaCapabilities from "@/components/sections/VyomaCapabilities";
import VyomaIndustries from "@/components/sections/VyomaIndustries";
import VyomaProjectSpotlight from "@/components/sections/VyomaProjectSpotlight";
import VyomaFaq from "@/components/sections/VyomaFaq";
import VyomaClosingCTA from "@/components/sections/VyomaClosingCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "VYOMA Media | Branding, Web Design & Organic Growth Studio Hyderabad",
  description:
    "We build brands, digital experiences and organic visibility that create lasting commercial value. Growth you own, not growth you rent. Based in Hyderabad, India.",
  alternates: {
    canonical: "https://vyomamedia.com",
  },
  openGraph: {
    title: "VYOMA Media | Branding, Web Design & Organic Growth Studio Hyderabad",
    description:
      "We build brands, digital experiences and organic visibility that create lasting commercial value. Growth you own, not growth you rent.",
    url: "https://vyomamedia.com",
    siteName: "VYOMA Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION (Atmospheric Dark Hero in Deep Atmosphere #172B3A, Horizon Geometric Visual) */}
      <VyomaHero />

      {/* Kinetic Infinite Tenet Ticker */}
      <VyomaTicker />

      {/* 2. THE VYOMA GROWTH SYSTEM (Interactive Visualization: Strategy → Brand → Digital → Visibility → Growth) */}
      <VyomaGrowthSystem />

      {/* 3. WHAT WE BELIEVE (Rented vs Owned Attention & The Vyoma Rule) */}
      <VyomaBelief />

      {/* 4. WHY GROWTH YOU OWN WINS (Homeownership Analogy & 4 Compounding Pillars) */}
      <VyomaWhyGrowthWins />

      {/* 5. MULTI-STAKEHOLDER TRUST (Healthcare, Real Estate, Industrial B2B, Consumer) */}
      <VyomaTrustAudiences />

      {/* 6. HOW WE WORK (01 Strategy First, 02 Design Matters, 03 Systems Over Tactics) */}
      <VyomaHowWeWork />

      {/* 7. DISCIPLINES & CAPABILITIES (Strategy, Design, Technology, Growth) */}
      <VyomaCapabilities />

      {/* 8. INDUSTRIES WE BUILD FOR (Healthcare, Real Estate, B2B, Consumer, Politics, Film) */}
      <VyomaIndustries />

      {/* 9. CASE STUDY SPOTLIGHT (Bharat Hydraulics: Workshop → Digital System) */}
      <VyomaProjectSpotlight />

      {/* 10. FREQUENTLY ASKED QUESTIONS (Clear Answers, Zero Jargon) */}
      <VyomaFaq />

      {/* 11. CLOSING STRATEGIC CTA (Cinematic Deep Atmosphere: Let's Build Something That Lasts) */}
      <VyomaClosingCTA />
    </>
  );
}
