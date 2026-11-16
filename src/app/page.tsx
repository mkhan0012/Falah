import { Metadata } from "next";
import { generateWebsiteSchema } from "@/lib/seo";
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
import VyomaSpeedTelemetry from "@/components/sections/VyomaSpeedTelemetry";
import VyomaFaq from "@/components/sections/VyomaFaq";
import VyomaClosingCTA from "@/components/sections/VyomaClosingCTA";

export const metadata: Metadata = {
  title: "VYOMA Media | Branding, Web Design & SEO Studio Hyderabad",
  description:
    "We build brands, digital experiences, and organic visibility that create lasting value. Growth you own, not growth you rent. Based in Hyderabad, India.",
  alternates: {
    canonical: "https://vyomamedia.co.in",
    languages: {
      "en-IN": "https://vyomamedia.co.in",
      "en": "https://vyomamedia.co.in",
      "x-default": "https://vyomamedia.co.in",
    },
    types: {
      "application/rss+xml": "https://vyomamedia.co.in/feed.xml",
    },
  },
  openGraph: {
    title: "VYOMA Media | Branding, Web Design & SEO Studio Hyderabad",
    description:
      "We build brands, digital experiences, and organic visibility that create lasting value. Growth you own, not growth you rent. Based in Hyderabad, India.",
    url: "https://vyomamedia.co.in",
    siteName: "Vyoma Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
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

      {/* 9. CASE STUDY SPOTLIGHT & 3D PARALLAX HARDWARE SHOWCASE */}
      <VyomaProjectSpotlight />

      {/* 10. SPEED & CORE WEB VITALS TELEMETRY GAUGE (Sub-second Performance & Conversion Audit) */}
      <VyomaSpeedTelemetry />

      {/* 11. FREQUENTLY ASKED QUESTIONS (Clear Answers, Zero Jargon) */}
      <VyomaFaq />

      {/* 12. CLOSING STRATEGIC CTA (Cinematic Deep Atmosphere: Let's Build Something That Lasts) */}
      <VyomaClosingCTA />
    </>
  );
}
