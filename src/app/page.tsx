import HeroSection from "@/components/sections/HeroSection";
import SelectedWork from "@/components/sections/SelectedWork";
import DigitalPresence from "@/components/sections/DigitalPresence";
import ServicesSection from "@/components/sections/ServicesSection";
import PersonalBranding from "@/components/sections/PersonalBranding";
import FalahMethod from "@/components/sections/FalahMethod";
import HealthCheck from "@/components/sections/HealthCheck";
import InsightsSection from "@/components/sections/InsightsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FALAH BRANDHOUSE | Brand & Digital Growth Studio",
  description: "Strategy, design, digital experiences and growth systems for ambitious businesses and people in Hyderabad, India.",
  alternates: {
    canonical: "https://falahbrandhouse.com",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SelectedWork />
      <DigitalPresence />
      <ServicesSection />
      <PersonalBranding />
      <FalahMethod />
      <HealthCheck />
      <InsightsSection />
          </>
  );
}

