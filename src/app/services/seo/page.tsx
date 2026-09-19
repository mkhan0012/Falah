import { Metadata } from "next";
import FinalCta from "@/components/sections/FinalCta";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ServiceCapabilities from "@/components/sections/ServiceCapabilities";

export const metadata: Metadata = {
  title: "SEO & Search Visibility | FALAH BRANDHOUSE",
  description: "We build technical and content systems that ensure your brand is discovered by the right people at the right time.",
};

const capabilities = [
        { title: "Technical SEO", desc: "Optimizing site architecture, core web vitals, and crawlability for search engines." },
      { title: "Content Strategy", desc: "Creating targeted content clusters that capture organic search intent." },
      { title: "Local SEO", desc: "Dominating local search results and Google Business profiles for regional authority." },
      { title: "Authority Building", desc: "Acquiring high-quality backlinks and digital PR to increase domain authority." }
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
              SERVICES / seo
            </p>
            
            <h1 className="text-6xl md:text-[8vw] leading-[0.9] font-primary font-bold tracking-tight text-graphite mb-12 uppercase">
              SEO & Search Visibility
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-warm-grey pt-12">
              <div className="md:col-span-8 lg:col-span-6">
                <p className="text-2xl md:text-3xl text-slate font-primary leading-relaxed font-medium">
                  We build technical and content systems that ensure your brand is discovered by the right people at the right time.
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
                Being the best in your industry means nothing if nobody can find you. Organic visibility is the most sustainable engine for long-term growth. We ensure you capture high-intent traffic directly from search.
              </p>
            </div>
          </div>

          <div className="border-t border-warm-grey pt-24 mb-32">
            <ServiceCapabilities capabilities={capabilities} visualizerType="visibility" />
          </div>

        </div>
      </main>
      <FinalCta />
    </>
  );
}