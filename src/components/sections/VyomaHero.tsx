"use client";

import { useEffect, useRef } from "react";
import TransitionLink from "@/components/ui/TransitionLink";
import { ArrowUpRight, ArrowRight, ShieldCheck, Compass, Sparkles, Layers } from "lucide-react";
import LogoMark from "@/components/ui/LogoMark";
import gsap from "gsap";

export default function VyomaHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-stagger", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".hero-visual-facet", {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-36 sm:pt-44 md:pt-48 pb-24 md:pb-32 bg-[#172B3A] text-[#F1F3F1] overflow-hidden font-sans border-b border-[#7899B0]/25"
    >
      {/* Horizon-inspired lines & controlled subtle gradients */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none bg-gradient-to-b from-[#7899B0]/20 via-[#172B3A]/60 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none bg-[#7899B0]/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none bg-[#D3A56C]/5 blur-[150px]"
        aria-hidden="true"
      />

      {/* Architectural Coordinate Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 horizon-grid-dark"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        {/* Top Header Location & Est Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#7899B0]/25 mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 hero-stagger">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7899B0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D3A56C]"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#DCE6EB] font-semibold">
              HYDERABAD · INDIA · EST. 2025
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#7899B0] hero-stagger">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7899B0]" />
            <span>Branding · Web Design · Technology · Organic Growth</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading + Copy + CTAs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#7899B0]/30 text-[#DCE6EB] text-xs font-mono font-bold tracking-widest uppercase shadow-inner hero-stagger">
                <Sparkles size={12} className="text-[#D3A56C]" />
                <span>STUDIO MANIFESTO</span>
              </div>

              {/* Main Heading: Exact wording from Prompt */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-[5rem] font-display font-extrabold tracking-tight text-[#F1F3F1] leading-[1.02] hero-stagger">
                GROWTH YOU OWN. <br />
                <span className="text-[#7899B0]">NOT GROWTH YOU RENT.</span>
              </h1>

              {/* Supporting Copy: Exact wording from Prompt */}
              <p className="text-lg sm:text-xl md:text-2xl text-[#DCE6EB] leading-relaxed max-w-2xl font-sans hero-stagger">
                We build brands, digital experiences and organic visibility that create lasting commercial value.
              </p>
            </div>

            {/* Narrative Explanation */}
            <p className="text-sm sm:text-base text-[#7899B0] max-w-xl leading-relaxed hero-stagger">
              Anyone can run paid ads for a month. We architect the brand positioning, ultra-fast web systems, and organic search discoverability that continue compounding and generating revenue long after the budget is spent.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5 hero-stagger">
              <TransitionLink
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#7899B0] text-[#172B3A] font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_4px_25px_rgba(120,153,176,0.35)] hover:bg-[#F1F3F1] hover:shadow-[0_6px_30px_rgba(241,243,241,0.25)] group"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </TransitionLink>

              <TransitionLink
                href="/work"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 border border-[#7899B0]/30 hover:border-[#F1F3F1] text-[#F1F3F1] font-mono font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all group"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowRight
                  size={15}
                  className="text-[#7899B0] group-hover:text-[#F1F3F1] group-hover:translate-x-1 transition-transform"
                />
              </TransitionLink>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-[#7899B0]/20 grid grid-cols-3 gap-4 max-w-lg hero-stagger">
              <div>
                <div className="text-lg sm:text-2xl font-mono font-bold text-[#F1F3F1]">100%</div>
                <div className="text-[10px] font-mono uppercase text-[#7899B0]">Owned Equity</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-mono font-bold text-[#D3A56C]">0 ₹</div>
                <div className="text-[10px] font-mono uppercase text-[#7899B0]">Rented Dependency</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-mono font-bold text-[#7899B0]">24/7</div>
                <div className="text-[10px] font-mono uppercase text-[#7899B0]">Compounding Asset</div>
              </div>
            </div>
          </div>

          {/* Right Column: Horizon-inspired Geometric Architectural Visual */}
          <div className="lg:col-span-5 hero-visual-facet">
            <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-[#7899B0]/30 p-8 sm:p-10 backdrop-blur-md shadow-2xl overflow-hidden group">
              {/* Subtle Horizon lines across visual box */}
              <div
                className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_bottom,transparent_49%,rgba(120,153,176,0.3)_50%,transparent_51%)] bg-[size:100%_2rem]"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#7899B0]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#172B3A] border border-[#7899B0]/40 flex items-center justify-center">
                      <LogoMark variant="light" className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#D3A56C] uppercase font-bold tracking-widest block">
                        GEOMETRIC IDENTITY
                      </span>
                      <h3 className="font-display font-bold text-lg text-[#F1F3F1]">
                        THE HORIZON MARK
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#7899B0]">01 // ELEVATION</span>
                </div>

                {/* Vector Horizon Composition */}
                <div className="py-6 flex flex-col items-center justify-center relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 relative flex items-center justify-center">
                    {/* Concentric Horizon Elevation Rings */}
                    <div className="absolute inset-0 rounded-full border border-[#7899B0]/25 animate-[spin_40s_linear_infinite]" />
                    <div className="absolute inset-3 rounded-full border border-dashed border-[#7899B0]/40" />
                    <div className="absolute inset-8 rounded-full bg-[#172B3A] border border-[#7899B0]/50 shadow-inner flex items-center justify-center">
                      <LogoMark variant="light" className="w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Horizontal Datum Line indicator */}
                  <div className="w-full flex items-center gap-2 mt-6">
                    <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#7899B0] to-transparent" />
                    <span className="text-[9px] font-mono tracking-widest text-[#D3A56C] uppercase font-bold px-2 py-0.5 rounded bg-white/5 border border-[#7899B0]/20">
                      HORIZON DATUM // OPENNESS
                    </span>
                    <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#7899B0] to-transparent" />
                  </div>
                </div>

                {/* Strategic Principle Statement */}
                <div className="p-4 rounded-2xl bg-[#172B3A]/80 border border-[#7899B0]/25 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#DCE6EB]">
                    <span className="font-bold">STUDIO ARCHITECTURE</span>
                    <span className="text-[#D3A56C]">HYDERABAD</span>
                  </div>
                  <p className="text-xs text-[#DCE6EB] leading-relaxed">
                    Designed around the openness and expansiveness of the sky, combined with the precision of modern technology, strategic positioning, and Swiss editorial design.
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#7899B0]">
                  <span>STRATEGY · DESIGN · TECH · GROWTH</span>
                  <span className="text-[#F1F3F1]">VERIFIED ENGINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
