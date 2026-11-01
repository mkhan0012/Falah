"use client";

import TransitionLink from "@/components/ui/TransitionLink";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, Search, Sparkles } from "lucide-react";

export default function PreFooterBanner() {
  return (
    <section className="py-20 md:py-28 bg-[#070709] relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        
        {/* Pre-Footer Bento Banner Container with Radial Indigo/Chartreuse subtle mesh background */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0E0F14] via-[#161821] to-[#0E0F14] border border-white/[0.1] p-10 sm:p-16 lg:p-20 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          
          {/* Radial Mesh Glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 w-[500px] h-[500px] bg-[#6E3AFF]/20 blur-[140px] rounded-full" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 w-[500px] h-[500px] bg-[#D4FF00]/12 blur-[140px] rounded-full" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#D4FF00]/30 text-xs font-mono text-[#D4FF00] uppercase tracking-widest">
              <Sparkles size={12} /> READY TO DOMINATE
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[#F5F5F0] leading-[1.05]">
              LET&apos;S BUILD SOMETHING <span className="text-[#D4FF00]">DISTINCTIVE.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              Whether you are architecting a category-defining brand, engineering a sub-second web application, or establishing authority in AI Answer Engines.
            </p>

            {/* Dual Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticButton>
                <TransitionLink
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D4FF00] text-black font-mono font-bold text-xs sm:text-sm px-8 py-4 sm:py-4.5 rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(212,255,0,0.45)] transition-all group"
                >
                  START A PROJECT
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </TransitionLink>
              </MagneticButton>

              <TransitionLink
                href="/keyword-tool"
                className="inline-flex items-center gap-2 px-7 py-4 sm:py-4.5 rounded-full bg-white/[0.04] border border-white/[0.15] hover:border-[#D4FF00]/50 hover:bg-white/[0.08] text-[#F5F5F0] hover:text-[#D4FF00] font-mono text-xs font-semibold backdrop-blur-md transition-all group"
              >
                <Search size={14} className="text-[#D4FF00]" />
                USE FREE SEO TOOL
              </TransitionLink>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
