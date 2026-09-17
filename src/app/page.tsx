import HeroSection from "@/components/sections/HeroSection";
import FalahGrid from "@/components/sections/FalahGrid";
import SelectedWork from "@/components/sections/SelectedWork";
import IndustryScroll from "@/components/sections/IndustryScroll";
import ServicesSection from "@/components/sections/ServicesSection";
import DigitalPresence from "@/components/sections/DigitalPresence";
import PersonalBranding from "@/components/sections/PersonalBranding";
import VeyraMethod from "@/components/sections/VeyraMethod";
import HealthCheck from "@/components/sections/HealthCheck";
import InsightsSection from "@/components/sections/InsightsSection";
import FinalCta from "@/components/sections/FinalCta";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FalahGrid />
      <SelectedWork />
      <IndustryScroll />
      <AboutSection />
      <ServicesSection />
      <DigitalPresence />
      <PersonalBranding />
      <VeyraMethod />
      <HealthCheck />
      <InsightsSection />
      <FinalCta />
    </>
  );
}
