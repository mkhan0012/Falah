"use client";

import { CheckCircle2, ArrowUpRight, Cpu, Layers, ExternalLink } from "lucide-react";
import TransitionLink from "@/components/ui/TransitionLink";

export default function VyomaProjectSpotlight() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F1F3F1] border-b border-[#7899B0]/25 overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono uppercase tracking-widest text-[#172B3A] font-semibold shadow-sm">
            <span>CASE STUDY SPOTLIGHT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#172B3A] leading-tight">
            Bharat Hydraulics. <br />
            <span className="text-[#7899B0]">FROM WORKSHOP → DIGITAL SYSTEM.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-sans">
            How an established hydraulic manufacturing and engineering business transformed its workshop operations into an organized, high-credibility digital presence.
          </p>
        </div>

        {/* The Spotlight Bento Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Challenge & Architecture */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            {/* The Challenge Card */}
            <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#7899B0]/20">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#172B3A]">
                  THE CORE PROBLEM
                </span>
                <span className="text-xs font-mono text-[#7899B0]">INDUSTRIAL B2B</span>
              </div>
              <h3 className="text-xl font-display font-bold text-[#172B3A]">
                Decades of precision manufacturing capability, but offline referral dependency and lack of structured technical discoverability.
              </h3>
              <p className="text-sm sm:text-base text-[#30383D] leading-relaxed">
                Industrial procurement managers and plant engineers search online for hydraulic cylinder specifications, repair tolerances, and custom pump fabrication. Without a structured digital system, the business was largely invisible to national and regional procurement committees.
              </p>
            </div>

            {/* What VYOMA Delivered */}
            <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#7899B0]/20">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#172B3A]">
                  WHAT VYOMA DELIVERED
                </span>
                <span className="text-xs font-mono text-[#7899B0] font-bold">SYSTEM ARCHITECTURE</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#DCE6EB]/40 border border-[#7899B0]/20">
                  <CheckCircle2 size={18} className="text-[#172B3A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#172B3A]">
                      Technical Product Specification Hierarchy
                    </h4>
                    <p className="text-xs sm:text-sm text-[#30383D] mt-0.5 leading-relaxed">
                      Reorganized complex hydraulic catalogues into structured, searchable digital data sheets designed around how procurement engineers search.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#DCE6EB]/40 border border-[#7899B0]/20">
                  <CheckCircle2 size={18} className="text-[#172B3A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#172B3A]">
                      Direct RFQ & Commercial Enquiry Routing
                    </h4>
                    <p className="text-xs sm:text-sm text-[#30383D] mt-0.5 leading-relaxed">
                      Integrated seamless Request-for-Quote triggers and WhatsApp direct lines for rapid plant emergency repairs and component quotes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Link & System Details */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-[#172B3A] text-[#F1F3F1] border border-[#7899B0]/30 p-8 sm:p-10 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#7899B0]/25">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#D3A56C] font-bold">
                  LIVE DEPLOYMENT
                </span>
                <span className="text-xs font-mono text-[#DCE6EB]">INDUSTRIAL B2B</span>
              </div>

              <div>
                <h3 className="text-3xl font-display font-black text-white uppercase tracking-tight">
                  BHARAT HYDRAULICS
                </h3>
                <p className="text-sm font-mono text-[#7899B0] mt-1">
                  Hydraulic Cylinders · Power Packs · Precision Spares
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-[#7899B0]/20 text-xs text-[#DCE6EB] space-y-1">
                  <span className="text-[#7899B0] font-mono block text-[10px] uppercase">DISCIPLINE DELIVERED:</span>
                  <p className="font-semibold text-white">
                    Brand Strategy · Next.js Web System · Technical SEO · Digital Enquiry Routing
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-[#7899B0]/20 text-xs text-[#DCE6EB] space-y-1">
                  <span className="text-[#7899B0] font-mono block text-[10px] uppercase">VERIFIED WEB DEPLOYMENT:</span>
                  <a
                    href="https://www.bharathydraulics.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-white hover:text-[#D3A56C] transition-colors flex items-center gap-1.5"
                  >
                    <span>bharathydraulics.site ↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#7899B0]/25 space-y-3">
              <TransitionLink
                href="/work/bharat-hydraulics"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#7899B0] text-[#172B3A] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-md group"
              >
                <span>READ COMPLETE CASE STUDY</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </TransitionLink>

              <a
                href="https://www.bharathydraulics.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-[#7899B0]/25 text-[#DCE6EB] font-mono text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>OPEN LIVE WEBSITE ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Other Projects Preview Ticker Bar */}
        <div className="p-6 rounded-2xl bg-white border border-[#7899B0]/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7899B0] font-bold">
              EXPLORE ALL THREE PRODUCTION CASE STUDIES
            </span>
            <p className="font-display font-bold text-base sm:text-lg text-[#172B3A]">
              Bharat Hydraulics (Industrial B2B) · Novazen (Healthcare) · Velora (Real Estate)
            </p>
          </div>
          <TransitionLink
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#172B3A] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#20394c] transition-colors shrink-0"
          >
            <span>VIEW WORK ARCHIVE</span>
            <ArrowUpRight size={14} />
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
