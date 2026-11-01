import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import SelectedWork from "@/components/sections/SelectedWork";
import VyomaFaq from "@/components/sections/VyomaFaq";

export const metadata: Metadata = {
  title: "Web Design Company in Hyderabad | Vyoma Media",
  description: "Vyoma Media is a luxury web design and Next.js engineering company in Hyderabad. We build conversion-engineered web systems that rank.",
  alternates: {
    canonical: "https://vyomamedia.com/web-design-company-hyderabad",
  },
};

export default function WebDesignHyderabad() {
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
              <span>HYDERABAD · INDIA // NEXT.JS WEB SYSTEMS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-deep-atmosphere mb-8 uppercase leading-[0.95]">
              Web Design in Hyderabad<span className="text-sky-slate">.</span>
            </h1>

            <p className="text-lg sm:text-2xl text-graphite/80 font-sans leading-relaxed mb-10 max-w-3xl">
              We design and engineer high-speed Next.js web applications focused on buyer psychology, sub-second latency, and qualified lead conversion for Hyderabad enterprises and global brands.
            </p>

            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-deep-atmosphere text-white px-8 py-4 rounded-full font-mono text-xs md:text-sm font-bold hover:bg-sky-slate transition-all uppercase shadow-md group tracking-wider"
            >
              <span>ENGINEER YOUR WEB SYSTEM</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-mist-blue py-16">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-deep-atmosphere">Why Next.js Architecture Wins</h2>
              <p className="text-base sm:text-lg text-graphite/80 leading-relaxed font-sans">
                Your website is your primary authority asset. In competitive B2B markets, bloated WordPress templates bleed conversions. We engineer custom Next.js web systems that load in milliseconds, ace Core Web Vitals, and convert high-intent inbound searchers.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-mist-blue p-8 shadow-xs">
              <h3 className="text-xs font-mono font-bold tracking-widest text-sky-slate mb-6 uppercase">SYSTEM SPECIFICATIONS</h3>
              <ul className="flex flex-col gap-4 text-sm font-sans text-deep-atmosphere">
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-sky-slate shrink-0 mt-0.5" /> High-Craft Custom UI/UX Architecture</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-sky-slate shrink-0 mt-0.5" /> Next.js App Router & Serverless Deployment</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-sky-slate shrink-0 mt-0.5" /> Built-in Generative Engine Optimization (GEO)</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-sky-slate shrink-0 mt-0.5" /> 99+ Lighthouse Performance & Security Hardening</li>
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
