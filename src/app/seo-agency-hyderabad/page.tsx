import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SelectedWork from "@/components/sections/SelectedWork";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "SEO Agency in Hyderabad | FALAH BRANDHOUSE",
  description: "FALAH BRANDHOUSE is a top-rated SEO agency in Hyderabad. We specialize in local SEO, technical SEO, and AI Optimization (GEO) to generate organic leads.",
  alternates: {
    canonical: "https://falahbrandhouse.com/seo-agency-hyderabad",
  },
};

export default function SeoAgencyHyderabad() {
  return (
    <>
      <main className="min-h-screen bg-ivory pt-32 pb-24 text-graphite overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-[5vw]">
          
          <div className="mb-20 md:mb-32 max-w-5xl">
            <div className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-vermilion mb-4 uppercase">
              HYDERABAD, INDIA
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[6vw] leading-[1] font-primary font-bold tracking-tight text-graphite mb-6 md:mb-8 uppercase">
              SEO Agency in Hyderabad
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-slate font-primary leading-relaxed font-medium mb-10 md:mb-12 max-w-3xl">
              Dominate search results in Hyderabad. We build advanced SEO and AI-optimized strategies to put your business directly in front of high-intent customers.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-vermilion text-ivory px-6 md:px-8 py-3 md:py-4 font-mono text-xs md:text-sm font-bold hover:bg-graphite transition-colors uppercase group"
            >
              START A PROJECT <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-y border-warm-grey py-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Drive Organic Leads in Hyderabad</h2>
              <p className="text-lg text-slate mb-4">
                Traditional SEO isn't enough anymore. As a premier SEO agency in Hyderabad, we combine Local SEO, Technical SEO, and Generative Engine Optimization (GEO) so your brand is recommended by both Google and AI platforms like ChatGPT.
              </p>
            </div>
            <div className="bg-charcoal text-ivory p-8">
              <h3 className="text-xs font-mono font-bold tracking-widest text-ivory/60 mb-6 uppercase">OUR SEO APPROACH</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-vermilion shrink-0 mt-1" /> Hyper-Local Hyderabad SEO Setup</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-vermilion shrink-0 mt-1" /> Generative AI Engine Optimization</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-vermilion shrink-0 mt-1" /> High-Performance Technical SEO</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-vermilion shrink-0 mt-1" /> Content & Authority Building</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <SelectedWork limit={2} />
      <FaqSection />
    </>
  );
}
