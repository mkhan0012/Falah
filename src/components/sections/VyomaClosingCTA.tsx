"use client";

import TransitionLink from "@/components/ui/TransitionLink";
import { ArrowUpRight, Sparkles, Search, MessageSquare, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function VyomaClosingCTA() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#172B3A] text-[#F1F3F1] overflow-hidden font-sans border-t border-[#7899B0]/25">
      {/* Deep atmosphere horizon glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#7899B0]/15 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Horizontal datum line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7899B0]/50 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1200px] relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#7899B0]/30 text-xs font-mono uppercase tracking-[0.2em] text-[#DCE6EB]">
            <Sparkles size={13} className="text-[#D3A56C]" />
            <span>START A STRATEGIC ENGAGEMENT</span>
          </div>

          {/* Giant Closing Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#F1F3F1] leading-[1.05] uppercase">
            LET’S BUILD SOMETHING <br />
            <span className="text-[#7899B0]">THAT LASTS.</span>
          </h2>

          {/* Body Narrative */}
          <p className="text-base sm:text-xl text-[#DCE6EB] leading-relaxed max-w-2xl mx-auto font-sans">
            Tell us what you’re building, where you want to go and what you need to achieve. We’ll review your digital footprint and provide an honest architectural assessment of where to start.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <TransitionLink
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#7899B0] hover:bg-[#F1F3F1] text-[#172B3A] font-mono font-bold text-sm tracking-wider uppercase transition-all shadow-[0_4px_30px_rgba(120,153,176,0.35)] group"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </TransitionLink>

            <TransitionLink
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-[#7899B0]/30 hover:border-[#F1F3F1] text-[#F1F3F1] font-mono text-xs sm:text-sm tracking-wider transition-all"
            >
              <span>EXPLORE ALL CASE STUDIES</span>
              <ArrowRight size={15} className="text-[#7899B0]" />
            </TransitionLink>
          </div>

          {/* Hyderabad Footnote */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-[#7899B0]">
            <span>HYDERABAD HQ</span>
            <span>·</span>
            <span>IN-PERSON OR VIRTUAL DISCOVERY</span>
            <span>·</span>
            <span>EST. 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
