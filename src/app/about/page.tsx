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
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-warm-grey">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Studio Aesthetic"
              fill
              className="object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
              priority
            />
          </div>
        </section>

        {/* Philosophy */}
        <section className="container mx-auto px-6 md:px-[5vw] mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-32">
            
            <div className="md:col-span-5 border-t border-graphite pt-8">
              <h2 className="text-sm font-mono font-bold tracking-widest text-slate mb-12 uppercase">WHAT WE BELIEVE</h2>
            </div>
            <div className="md:col-span-7 border-t border-graphite pt-8">
              <div className="space-y-8 font-primary text-3xl md:text-4xl text-graphite leading-tight font-medium">
                <p>
                  A beautiful website is useless if no one sees it. An aggressive marketing campaign is a waste of money if it sends traffic to a poor digital experience.
                </p>
                <p className="text-slate">
                  At FALAH BRANDHOUSE, we believe in systems. The Brand + Digital + Growth model exists because true market leadership requires all three. A premium brand identity, a high-converting digital experience, and a robust visibility structure must work together.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Working Principles */}
        <section className="bg-white border-y border-warm-grey py-32 mb-32">
          <div className="container mx-auto px-6 md:px-[5vw]">
            <h2 className="text-sm font-mono font-bold tracking-widest text-slate mb-24 uppercase text-center">WORKING PRINCIPLES</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              <div className="flex flex-col gap-6 items-center text-center px-4">
                <div className="w-12 h-12 rounded-full border border-warm-grey flex items-center justify-center text-xs font-mono font-bold text-graphite mb-4">01</div>
                <strong className="block text-3xl font-primary">Strategy First</strong>
                <p className="text-slate text-lg leading-relaxed">We don't guess. Everything we build is rooted in clear positioning and market understanding.</p>
              </div>
              <div className="flex flex-col gap-6 items-center text-center px-4">
                <div className="w-12 h-12 rounded-full border border-warm-grey flex items-center justify-center text-xs font-mono font-bold text-graphite mb-4">02</div>
                <strong className="block text-3xl font-primary">Design Matters</strong>
                <p className="text-slate text-lg leading-relaxed">Aesthetics build trust. We create premium visual identities that command authority.</p>
              </div>
              <div className="flex flex-col gap-6 items-center text-center px-4">
                <div className="w-12 h-12 rounded-full border border-warm-grey flex items-center justify-center text-xs font-mono font-bold text-graphite mb-4">03</div>
                <strong className="block text-3xl font-primary">Systems over Tactics</strong>
                <p className="text-slate text-lg leading-relaxed">We build sustainable digital engines, not short-term hacks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="container mx-auto px-6 md:px-[5vw]">
          <div className="border-t border-warm-grey pt-16">
            <h2 className="text-sm font-mono font-bold tracking-widest text-slate mb-16 uppercase">OUR CAPABILITIES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-24">
              
              <div>
                <h3 className="text-4xl font-primary font-bold mb-6">Strategy</h3>
                <p className="text-sm font-mono text-slate leading-loose uppercase tracking-widest">
                  Brand Positioning<br />Tone of Voice<br />Digital Strategy<br />Market Research
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-primary font-bold mb-6">Design</h3>
                <p className="text-sm font-mono text-slate leading-loose uppercase tracking-widest">
                  Visual Identity<br />Art Direction<br />UI/UX Design<br />Web Design
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-primary font-bold mb-6">Technology</h3>
                <p className="text-sm font-mono text-slate leading-loose uppercase tracking-widest">
                  Front-end Dev<br />Headless CMS<br />Web Performance<br />Technical SEO
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-primary font-bold mb-6 text-vermilion">Growth</h3>
                <p className="text-sm font-mono text-slate leading-loose uppercase tracking-widest">
                  Content Strategy<br />Organic Search<br />Local SEO<br />Personal Branding
                </p>
              </div>

            </div>
          </div>
        </section>
        
      </main>
      <FinalCta />
    </>
  );
}

