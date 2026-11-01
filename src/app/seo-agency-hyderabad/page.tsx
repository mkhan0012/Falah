import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import SelectedWork from "@/components/sections/SelectedWork";
import VyomaFaq from "@/components/sections/VyomaFaq";

export const metadata: Metadata = {
  title: "SEO Agency in Hyderabad | Vyoma Media",
  description: "Vyoma Media is a premier SEO and GEO agency in Hyderabad. We engineer local SEO, technical architecture, and Generative Engine Optimization.",
  alternates: {
    canonical: "https://vyomamedia.com/seo-agency-hyderabad",
  },
};

export default function SeoAgencyHyderabad() {
  return (
    <>
      <main className="min-h-screen bg-cloud-white pt-36 md:pt-44 pb-24 text-deep-atmosphere selection:bg-sky-slate selection:text-white overflow-hidden relative font-sans">
        <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
          
          <div className="mb-20 md:mb-28 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-slate/30 text-[11px] font-mono text-sky-slate mb-6 uppercase tracking-widest font-semibold shadow-xs">
              <Sparkles size={12} />
              <span>HYDERABAD · INDIA // LOCAL & GLOBAL DOMINANCE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-deep-atmosphere mb-8 uppercase leading-[0.95]">
              SEO Agency in Hyderabad<span className="text-sky-slate">.</span>
            </h1>

            <p className="text-lg sm:text-2xl text-graphite/80 font-sans leading-relaxed mb-10 max-w-3xl">
              Dominate category search across Google and AI Answer Engines. We engineer high-velocity SEO and GEO pipelines that put your brand directly in front of enterprise B2B buyers.
            </p>

            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-deep-atmosphere text-white px-8 py-4 rounded-full font-mono text-xs md:text-sm font-bold hover:bg-sky-slate transition-all uppercase shadow-md group tracking-wider"
            >
              <span>REQUEST SEARCH AUDIT</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-mist-blue py-16">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-deep-atmosphere">Drive Verified Organic Inbound in Hyderabad</h2>
              <p className="text-base sm:text-lg text-graphite/80 leading-relaxed font-sans">
                Traditional keyword stuffing no longer delivers pipeline. As Hyderabad&apos;s premier growth studio, we combine Local Schema, Technical Next.js Speed, and Generative Engine Optimization (GEO) so your brand is cited and recommended by both Google and AI platforms like ChatGPT, Perplexity, and Gemini.
              </p>
            </div>
            
            <div className="rounded-3xl bg-white border border-mist-blue p-8 shadow-xs">
              <h3 className="text-xs font-mono font-bold tracking-widest text-sky-slate mb-6 uppercase">OUR TECHNICAL SEO ENGINE</h3>
              <ul className="flex flex-col gap-4 text-sm font-sans text-deep-atmosphere">
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-sky-slate shrink-0 mt-0.5" /> Hyper-Local Hyderabad & Multi-City GEO Targeting</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-sky-slate shrink-0 mt-0.5" /> Generative AI Answer Engine Optimization (ChatGPT, Perplexity)</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-sky-slate shrink-0 mt-0.5" /> Sub-Second TTFB & 99+ Core Web Vitals Audits</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-sky-slate shrink-0 mt-0.5" /> Programmatic Keyword Architecture for B2B Industries</li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      <SelectedWork />
      <VyomaFaq />
    </>
  );
}
