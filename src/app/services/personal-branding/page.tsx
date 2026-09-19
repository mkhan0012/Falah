import { Metadata } from "next";
import FinalCta from "@/components/sections/FinalCta";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ServiceCapabilities from "@/components/sections/ServiceCapabilities";

export const metadata: Metadata = {
  title: "Personal Branding | FALAH BRANDHOUSE",
  description: "Turn your expertise into a digital presence people remember. We build the strategic foundation and digital home for your personal brand.",
};

const capabilities = [
        { title: "Executive Positioning", desc: "Defining your unique narrative and establishing thought leadership in your space." },
      { title: "Visual Identity", desc: "Creating a premium aesthetic that reflects your professional caliber." },
      { title: "Digital Home", desc: "Designing and developing a bespoke personal website that acts as your central hub." },
      { title: "Content Distribution", desc: "A structured system for sharing your expertise across LinkedIn and Twitter." }
];

export default function ServicePage() {
  return (
    <>
      <main className="min-h-screen bg-ivory pt-40 pb-24 text-graphite">
        <div className="container mx-auto px-6 md:px-[5vw]">
          
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate hover:text-vermilion transition-colors mb-16 uppercase"
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>

          <div className="mb-24 md:mb-32">
            <p className="text-[10px] md:text-xs font-mono tracking-widest text-slate mb-8 uppercase">
              SERVICES / personal branding
            </p>
            
            <h1 className="text-6xl md:text-[8vw] leading-[0.9] font-primary font-bold tracking-tight text-graphite mb-12 uppercase">
              Personal Branding
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-warm-grey pt-12">
              <div className="md:col-span-8 lg:col-span-6">
                <p className="text-2xl md:text-3xl text-slate font-primary leading-relaxed font-medium">
                  Turn your expertise into a digital presence people remember. We build the strategic foundation and digital home for your personal brand.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-warm-grey pt-24 mb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate uppercase">WHY IT MATTERS</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-3xl md:text-4xl text-graphite leading-tight font-primary font-medium max-w-4xl">
                People do business with people. In a saturated market, your personal brand is the ultimate differentiator. It commands trust, justifies premium pricing, and opens doors that corporate brands cannot.
              </p>
            </div>
          </div>

          <div className="border-t border-warm-grey pt-24 mb-32">
            <ServiceCapabilities capabilities={capabilities} visualizerType="brand" />
          </div>

        </div>
      </main>
      <FinalCta />
    </>
  );
}