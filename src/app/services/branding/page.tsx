import { Metadata } from "next";
import FinalCta from "@/components/sections/FinalCta";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ServiceCapabilities from "@/components/sections/ServiceCapabilities";

export const metadata: Metadata = {
  title: "Brand Strategy & Identity | FALAH BRANDHOUSE",
  description: "We build distinct identities that help businesses stand out, communicate clearly, and command premium positioning in their market.",
};

const capabilities = [
        { title: "Brand Positioning", desc: "Defining exactly where you sit in the market and why audiences should care." },
      { title: "Visual Identity", desc: "Crafting a premium aesthetic including typography, color systems, and logo design." },
      { title: "Tone of Voice", desc: "Establishing how your brand speaks, writes, and communicates across all channels." },
      { title: "Brand Guidelines", desc: "A comprehensive rulebook ensuring visual and strategic consistency as you scale." }
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
              SERVICES / branding
            </p>
            
            <h1 className="text-6xl md:text-[8vw] leading-[0.9] font-primary font-bold tracking-tight text-graphite mb-12 uppercase">
              Brand Strategy & Identity
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-warm-grey pt-12">
              <div className="md:col-span-8 lg:col-span-6">
                <p className="text-2xl md:text-3xl text-slate font-primary leading-relaxed font-medium">
                  We build distinct identities that help businesses stand out, communicate clearly, and command premium positioning in their market.
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
                A brand is more than a logo. It is the underlying architecture of how your market perceives you. Without clear positioning, businesses compete on price. With a premium identity, they compete on value.
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