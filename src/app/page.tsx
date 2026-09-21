import HeroSection from "@/components/sections/HeroSection";
import CapabilitiesTicker from "@/components/sections/CapabilitiesTicker";
import SolutionsSection from "@/components/sections/SolutionsSection";
import SelectedWork from "@/components/sections/SelectedWork";
import HealthCheck from "@/components/sections/HealthCheck";
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
      <CapabilitiesTicker />
      <SolutionsSection />
      <SelectedWork limit={2} />
      <HealthCheck />
    </>
  );
}

