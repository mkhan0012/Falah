"use client";

import Image from "next/image";
import TransitionLink from "@/components/ui/TransitionLink";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function SelectedWorkOutcomes() {
  return (
    <section className="py-24 md:py-32 bg-[#070709] relative overflow-hidden" id="work">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 w-[600px] h-[400px] bg-[#6E3AFF]/10 blur-[150px] rounded-full" />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#D4FF00] mb-4 uppercase tracking-widest">
            <Sparkles size={12} /> PROVEN OUTCOMES
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#F5F5F0] mb-6 leading-tight">
            Real Results from Engineered Digital Presence.
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] font-sans leading-relaxed">
            We don&apos;t build vanity projects that fail to convert. Every system we launch fuses luxury editorial design with quantifiable revenue metrics.
          </p>
        </div>

        {/* Stacked Case Study Bento Cards */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* CASE 01: BHARAT HYDRAULICS */}
          <div className="group rounded-3xl bg-[#0E0F14] border border-white/[0.08] hover:border-[#D4FF00]/40 transition-all duration-500 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left (60% / 7 cols): High-Res Interactive Mockup */}
              <div
                className="lg:col-span-7 relative min-h-[320px] sm:min-h-[440px] lg:min-h-[500px] bg-[#161821] overflow-hidden"
                data-cursor="project"
              >
                <Image
                  src="/images/mockups/bharat.jpg"
                  alt="Bharat Hydraulics Digital System"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F14] via-transparent to-transparent lg:hidden pointer-events-none" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 rounded-full backdrop-blur-md bg-[#070709]/80 border border-white/[0.12] px-3.5 py-1.5 text-[11px] font-mono text-[#F5F5F0]">
                  Strategy · Web System · Technical SEO
                </div>

                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-xl backdrop-blur-md bg-[#070709]/80 border border-white/[0.1] px-3 py-1.5 text-[10px] font-mono text-[#D4FF00] hidden sm:flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  VERIFIED DEPLOYED SYSTEM
                </div>
              </div>

              {/* Right (40% / 5 cols): Narrative + QAID-Style Impact Metrics */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs tracking-widest text-[#D4FF00] uppercase">
                      01 / INDUSTRIAL & MANUFACTURING
                    </span>
                    <span className="text-xs font-mono text-white/40">EST. CASE</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F5F5F0] tracking-tight mb-4">
                    Bharat Hydraulics
                  </h3>

                  <div className="mb-6 space-y-2">
                    <div className="text-xs font-mono text-white/40 uppercase tracking-wider">The Challenge:</div>
                    <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                      Transforming a legacy industrial manufacturer into a high-trust global digital supplier through a brutalist Next.js catalog and authoritative GEO answer structure.
                    </p>
                  </div>

                  {/* QAID-Style Impact Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="rounded-2xl bg-[#070709] border border-white/[0.08] p-4 text-left">
                      <div className="text-2xl sm:text-3xl font-display font-bold text-[#D4FF00]">
                        3.2x
                      </div>
                      <div className="text-[11px] font-mono text-[#9CA3AF] mt-1 leading-snug">
                        High-Intent B2B Inquiries
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#070709] border border-white/[0.08] p-4 text-left">
                      <div className="text-2xl sm:text-3xl font-display font-bold text-[#10B981]">
                        +185%
                      </div>
                      <div className="text-[11px] font-mono text-[#9CA3AF] mt-1 leading-snug">
                        Industrial Keyword Rankings
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <TransitionLink
                  href="/work/bharat-hydraulics"
                  className="inline-flex items-center justify-between w-full py-4 px-6 rounded-full bg-white/[0.04] hover:bg-[#D4FF00] text-[#F5F5F0] hover:text-black border border-white/[0.1] hover:border-[#D4FF00] font-mono text-xs font-bold transition-all duration-300 group/btn"
                >
                  <span>EXPLORE FULL CASE STUDY</span>
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </TransitionLink>
              </div>

            </div>
          </div>

          {/* CASE 02: NOVAZEN */}
          <div className="group rounded-3xl bg-[#0E0F14] border border-white/[0.08] hover:border-[#D4FF00]/40 transition-all duration-500 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left (60% / 7 cols): High-Res Interactive Mockup */}
              <div
                className="lg:col-span-7 relative min-h-[320px] sm:min-h-[440px] lg:min-h-[500px] bg-[#161821] overflow-hidden"
                data-cursor="project"
              >
                <Image
                  src="/images/mockups/novazen.jpg"
                  alt="Novazen Pharmaceutical Digital Presence"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F14] via-transparent to-transparent lg:hidden pointer-events-none" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 rounded-full backdrop-blur-md bg-[#070709]/80 border border-white/[0.12] px-3.5 py-1.5 text-[11px] font-mono text-[#F5F5F0]">
                  Brand Experience · Website · Content Direction
                </div>

                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-xl backdrop-blur-md bg-[#070709]/80 border border-white/[0.1] px-3 py-1.5 text-[10px] font-mono text-[#D4FF00] hidden sm:flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  VERIFIED DEPLOYED SYSTEM
                </div>
              </div>

              {/* Right (40% / 5 cols): Narrative + QAID-Style Impact Metrics */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs tracking-widest text-[#D4FF00] uppercase">
                      02 / PHARMACEUTICAL & HEALTHCARE
                    </span>
                    <span className="text-xs font-mono text-white/40">EST. CASE</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F5F5F0] tracking-tight mb-4">
                    Novazen
                  </h3>

                  <div className="mb-6 space-y-2">
                    <div className="text-xs font-mono text-white/40 uppercase tracking-wider">The Challenge:</div>
                    <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                      Architecting a modern, compliant, and authoritative digital ecosystem for a healthcare innovator, balancing clinical density with editorial brand clarity.
                    </p>
                  </div>

                  {/* QAID-Style Impact Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="rounded-2xl bg-[#070709] border border-white/[0.08] p-4 text-left">
                      <div className="text-2xl sm:text-3xl font-display font-bold text-[#D4FF00]">
                        2.4x
                      </div>
                      <div className="text-[11px] font-mono text-[#9CA3AF] mt-1 leading-snug">
                        Faster Stakeholder Onboarding
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#070709] border border-white/[0.08] p-4 text-left">
                      <div className="text-2xl sm:text-3xl font-display font-bold text-[#10B981]">
                        99/100
                      </div>
                      <div className="text-[11px] font-mono text-[#9CA3AF] mt-1 leading-snug">
                        Core Web Vitals Score
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <TransitionLink
                  href="/work/novazen"
                  className="inline-flex items-center justify-between w-full py-4 px-6 rounded-full bg-white/[0.04] hover:bg-[#D4FF00] text-[#F5F5F0] hover:text-black border border-white/[0.1] hover:border-[#D4FF00] font-mono text-xs font-bold transition-all duration-300 group/btn"
                >
                  <span>EXPLORE FULL CASE STUDY</span>
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </TransitionLink>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
