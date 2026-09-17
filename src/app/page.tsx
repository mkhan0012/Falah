import HeroSection from "@/components/sections/HeroSection";
import SelectedWork from "@/components/sections/SelectedWork";
import ServicesSection from "@/components/sections/ServicesSection";
import DigitalPresence from "@/components/sections/DigitalPresence";
import WhyVeyra from "@/components/sections/WhyVeyra";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SelectedWork />
      <ServicesSection />
      <DigitalPresence />
      <WhyVeyra />
      <FinalCta />
    </>
  );
}
