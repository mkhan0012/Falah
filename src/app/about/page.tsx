import { Metadata } from "next";
import FinalCta from "@/components/sections/FinalCta";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | FALAH BRANDHOUSE",
  description: "A brand and digital growth studio based in Hyderabad, India.",
};

export default function AboutPage() {
  return (
    <>
      <main className="pt-40 pb-32 bg-ivory text-graphite min-h-screen selection:bg-vermilion selection:text-ivory">
        
        {/* Header */}
        <section className="container mx-auto px-6 md:px-[5vw] mb-32">
          <div className="border-b border-warm-grey pb-16">
            <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate mb-8 uppercase">
              HYDERABAD · INDIA
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-primary font-bold tracking-tighter leading-[0.85] mb-12 uppercase">
              ABOUT <br className="hidden md:block" />
              <span className="text-slate">FALAH</span>
            </h1>
            <p className="text-2xl md:text-4xl text-graphite/80 max-w-4xl font-primary leading-tight font-medium">
              We are a creative studio operating at the intersection of brand strategy, high-end digital design, and organic growth.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="container mx-auto px-6 md:px-[5vw] mb-32">
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-charcoal">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Studio Aesthetic"
              fill
              className="object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
              priority
            />
          </div>
        </section>

        {/* Philosophy & Capabilities */}
        <section className="container mx-auto px-6 md:px-[5vw] mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            
            <div className="border-t border-graphite pt-8">
              <h2 className="text-sm font-mono font-bold tracking-widest text-slate mb-12 uppercase">OUR PHILOSOPHY</h2>
              <div className="space-y-8 font-primary text-2xl text-graphite leading-relaxed">
                <p>
                  Most agencies focus on one thing: they either build pretty websites that no one visits, or they run aggressive marketing campaigns to terrible landing pages.
                </p>
                <p>
                  At FALAH BRANDHOUSE, we believe in systems. A premium brand identity, a high-converting digital experience, and a robust SEO structure must work together. That is how market leaders are built.
                </p>
              </div>
            </div>

            <div className="border-t border-graphite pt-8">
              <h2 className="text-sm font-mono font-bold tracking-widest text-slate mb-12 uppercase">OUR CAPABILITIES</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                
                <div>
                  <h3 className="text-3xl font-primary font-bold mb-4">Strategy</h3>
                  <p className="text-sm font-mono text-slate leading-relaxed uppercase tracking-widest">
                    Brand Positioning<br />Tone of Voice<br />Digital Strategy<br />Market Research
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-primary font-bold mb-4">Design</h3>
                  <p className="text-sm font-mono text-slate leading-relaxed uppercase tracking-widest">
                    Visual Identity<br />Art Direction<br />UI/UX Design<br />Web Design
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-primary font-bold mb-4">Technology</h3>
                  <p className="text-sm font-mono text-slate leading-relaxed uppercase tracking-widest">
                    Front-end Dev<br />Headless CMS<br />Web Performance<br />Technical SEO
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-primary font-bold mb-4 text-vermilion">Growth</h3>
                  <p className="text-sm font-mono text-slate leading-relaxed uppercase tracking-widest">
                    Content Strategy<br />Organic Search<br />Local SEO<br />Personal Branding
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>
        
      </main>
      <FinalCta />
    </>
  );
}