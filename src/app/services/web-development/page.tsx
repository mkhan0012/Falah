import { Metadata } from "next";
import FinalCta from "@/components/sections/FinalCta";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ServiceCapabilities from "@/components/sections/ServiceCapabilities";

export const metadata: Metadata = {
  title: "Digital Experiences | FALAH BRANDHOUSE",
  description: "We design and develop high-performance digital experiences that look exceptional and are engineered to convert.",
};

const capabilities = [
        { title: "UI/UX Design", desc: "Designing intuitive user journeys that guide visitors toward conversion." },
      { title: "Custom Development", desc: "Building scalable, lightning-fast applications using Next.js and modern stacks." },
      { title: "Creative Animation", desc: "Implementing GSAP and WebGL for memorable, premium micro-interactions." },
      { title: "Conversion Optimization", desc: "Structuring layouts and copy specifically to maximize lead generation." }
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
              SERVICES / web development
            </p>
            
            <h1 className="text-6xl md:text-[8vw] leading-[0.9] font-primary font-bold tracking-tight text-graphite mb-12 uppercase">
              Digital Experiences
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-warm-grey pt-12">
              <div className="md:col-span-8 lg:col-span-6">
                <p className="text-2xl md:text-3xl text-slate font-primary leading-relaxed font-medium">
                  We design and develop high-performance digital experiences that look exceptional and are engineered to convert.
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
                Your website is your best salesperson, working 24/7. It dictates whether a prospect trusts you enough to make contact. We build platforms that combine high-end aesthetics with flawless technical execution.
              </p>
            </div>
          </div>

          <div className="border-t border-warm-grey pt-24 mb-32">
            <ServiceCapabilities capabilities={capabilities} visualizerType="digital" />
          </div>

        </div>
      </main>
      <FinalCta />
    </>
  );
}