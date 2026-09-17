import { Metadata } from "next";
import FinalCta from "@/components/sections/FinalCta";
import Image from "next/image";
import AboutSection from "@/components/sections/AboutSection";
import VeyraMethod from "@/components/sections/VeyraMethod";

export const metadata: Metadata = {
  title: "About | FALAH BRANDHOUSE",
  description: "A brand and digital growth studio based in Hyderabad, India.",
};

export default function AboutPage() {
  return (
    <>
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 mb-32">
          <p className="text-sm font-bold tracking-[0.2em] text-foreground/40 mb-8">
            HYDERABAD Â· INDIA
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif tracking-tight mb-8">
            ABOUT <span className="text-foreground/40 italic">FALAH</span>
          </h1>
          <p className="text-xl md:text-3xl text-foreground/80 max-w-4xl font-light leading-relaxed">
            We are a creative studio operating at the intersection of brand strategy, 
            high-end digital design, and organic growth.
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 mb-24">
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-charcoal rounded-sm mb-32">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Studio Aesthetic"
              fill
              className="object-cover grayscale opacity-80"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 mb-32">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 text-accent">OUR PHILOSOPHY</h2>
              <p className="text-xl leading-relaxed text-foreground/70 mb-6">
                Most agencies focus on one thing: they either build pretty websites that no one visits, or they run aggressive marketing campaigns to terrible landing pages.
              </p>
              <p className="text-xl leading-relaxed text-foreground/70">
                At FALAH BRANDHOUSE, we believe in systems. A premium brand identity, a high-converting digital experience, and a robust SEO structure must work together. That is how market leaders are built.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 text-accent">OUR CAPABILITIES</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategy</h3>
                  <p className="text-foreground/60 leading-relaxed">Brand Positioning, Tone of Voice, Digital Strategy, Market Research.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Design</h3>
                  <p className="text-foreground/60 leading-relaxed">Visual Identity, Art Direction, UI/UX Design, Web Design.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Technology</h3>
                  <p className="text-foreground/60 leading-relaxed">Front-end Development, Headless CMS, Web Performance, Technical SEO.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Growth</h3>
                  <p className="text-foreground/60 leading-relaxed">Content Strategy, Organic Search, Local SEO, Personal Branding.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <AboutSection />
        <VeyraMethod />
      </main>
      <FinalCta />
    </>
  );
}