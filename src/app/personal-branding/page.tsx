import { Metadata } from "next";
import FinalCta from "@/components/sections/FinalCta";
import PersonalBranding from "@/components/sections/PersonalBranding";

export const metadata: Metadata = {
  title: "Personal Branding | FALAH BRANDHOUSE",
  description: "Turn your expertise into a digital presence people remember.",
};

export default function PersonalBrandingPage() {
  return (
    <>
      <main className="min-h-screen bg-ivory pt-32 pb-0">
        
        {/* Page Header */}
        <div className="container mx-auto px-6 md:px-[5vw] mb-24 md:mb-32">
          <p className="text-[10px] md:text-xs font-mono tracking-widest text-slate mb-8 uppercase">
            SERVICES / PERSONAL BRANDING
          </p>
          
          <h1 className="text-6xl md:text-[8vw] leading-[0.9] font-primary font-bold tracking-tight text-graphite mb-12">
            TURN <span className="text-slate">EXPERTISE</span><br />
            INTO <span className="text-vermilion">AUTHORITY.</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-warm-grey pt-8">
            <div className="md:col-span-6 lg:col-span-5">
              <p className="text-xl md:text-2xl text-slate font-primary leading-relaxed">
                For founders, executives, professionals, and creators. We build the strategic foundation, the visual identity, and the digital home for your personal brand.
              </p>
            </div>
          </div>
        </div>

        {/* Core interactive section */}
        <div className="border-t border-warm-grey">
          <PersonalBranding />
        </div>
      </main>
      <FinalCta />
    </>
  );
}