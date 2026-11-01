import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import SelectedWork from "@/components/sections/SelectedWork";
import VyomaFaq from "@/components/sections/VyomaFaq";

export const metadata: Metadata = {
  title: "Branding Studio & Agency in Hyderabad | Vyoma Media",
  description: "Vyoma Media is a luxury branding and digital growth studio in Hyderabad. We build category positioning and visual identities that command authority.",
  alternates: {
    canonical: "https://vyomamedia.com/branding-studio-hyderabad",
  },
};

export default function BrandingStudioHyderabad() {
  return (
    <>
      <main className="min-h-screen bg-cloud-white pt-36 md:pt-44 pb-24 text-deep-atmosphere selection:bg-sky-slate selection:text-white overflow-hidden relative font-sans">
        {/* Ambient atmospheric horizon glows */}
        <div className="pointer-events-none absolute left-1/4 top-20 w-[600px] h-[350px] bg-sky-slate/10 blur-[150px] rounded-full" />
        <div className="pointer-events-none absolute right-10 bottom-1/3 w-[450px] h-[450px] bg-mist-blue/40 blur-[140px] rounded-full" />

        <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
          
          <div className="mb-20 md:mb-28 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-slate/30 text-[11px] font-mono text-sky-slate mb-6 uppercase tracking-widest font-semibold shadow-xs">
              <Sparkles size={12} />
              <span>HYDERABAD · INDIA // BRAND ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-deep-atmosphere mb-8 uppercase leading-[0.95]">
              Branding Studio in Hyderabad<span className="text-sky-slate">.</span>
            </h1>

            <p className="text-lg sm:text-2xl text-graphite/80 font-sans leading-relaxed mb-10 max-w-3xl">
              We engineer brand identities that command authority. Comprehensive brand strategy, editorial visual systems, and category positioning for ambitious businesses in Hyderabad.
            </p>

            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-deep-atmosphere text-white px-8 py-4 rounded-full font-mono text-xs md:text-sm font-bold hover:bg-sky-slate transition-all uppercase shadow-md group tracking-wider"
            >
              <span>COMMISSION A BRAND SYSTEM</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-mist-blue py-16">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-deep-atmosphere">Strategic Positioning for Ambitious Brands</h2>
              <p className="text-base sm:text-lg text-graphite/80 leading-relaxed font-sans">
                Authority is not built with generic logos. As Hyderabad&apos;s leading branding studio, we define your distinct market thesis, craft high-craft visual identity systems, and align them directly with high-converting web applications.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-mist-blue p-8 shadow-xs">
              <h3 className="text-xs font-mono font-bold tracking-widest text-sky-slate mb-6 uppercase">OUR BRANDING METHOD</h3>
              <ul className="flex flex-col gap-4 text-sm font-sans text-deep-atmosphere">
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-sky-slate shrink-0 mt-0.5" /> Category Positioning & Core Thesis Mapping</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-sky-slate shrink-0 mt-0.5" /> Editorial Typography & Design Systems</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-sky-slate shrink-0 mt-0.5" /> Comprehensive Brand Architecture & Guidelines</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-sky-slate shrink-0 mt-0.5" /> High-Performance Next.js Web Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <SelectedWork limit={2} />
      <VyomaFaq />
    </>
  );
}
