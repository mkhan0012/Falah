import HeroSection from "@/components/sections/HeroSection";
import SelectedWork from "@/components/sections/SelectedWork";
import DigitalPresence from "@/components/sections/DigitalPresence";
import ServicesSection from "@/components/sections/ServicesSection";
import PersonalBranding from "@/components/sections/PersonalBranding";
import FalahMethod from "@/components/sections/FalahMethod";
import HealthCheck from "@/components/sections/HealthCheck";
import InsightsSection from "@/components/sections/InsightsSection";
import FinalCta from "@/components/sections/FinalCta";

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
      <FinalCta />
    </>
  );
}

