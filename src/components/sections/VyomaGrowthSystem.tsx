"use client";

import { useState } from "react";
import TransitionLink from "@/components/ui/TransitionLink";
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function VyomaGrowthSystem() {
  const [selectedStage, setSelectedStage] = useState(0);
  const stages = siteConfig.growthSystem;
  const current = stages[selectedStage];

  return (
    <section className="relative py-24 sm:py-32 bg-[#F1F3F1] text-[#30383D] border-b border-[#7899B0]/25 overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono font-bold uppercase tracking-widest text-[#172B3A] shadow-sm">
            <Sparkles size={13} className="text-[#D3A56C]" />
            <span>OPERATIONAL METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#172B3A] leading-tight">
            THE VYOMA <br className="hidden sm:inline" />
            <span className="text-[#7899B0]">GROWTH SYSTEM.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#30383D] leading-relaxed font-sans">
            A beautiful website is useless if nobody finds it. A loud campaign is wasted money if it lands on a weak experience. We connect research, brand identity, modern web engineering, and organic search into one self-reinforcing commercial engine.
          </p>

          <div className="pt-2">
            <span className="inline-block px-4 py-2 rounded-xl bg-[#172B3A] text-[#F1F3F1] font-mono text-xs sm:text-sm font-bold tracking-wider uppercase">
              ONE CONNECTED SYSTEM. BUILT FOR LONG-TERM GROWTH.
            </span>
          </div>
        </div>

        {/* The 5-Stage Interactive Pipeline Header */}
        <div className="mb-8">
          <div className="hidden lg:grid grid-cols-5 gap-3">
            {stages.map((stage, idx) => {
              const isSelected = selectedStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(idx)}
                  className={`relative p-5 rounded-2xl text-left transition-all duration-300 border ${
                    isSelected
                      ? "bg-[#172B3A] text-[#F1F3F1] border-[#172B3A] shadow-[0_12px_32px_rgba(23,43,58,0.18)] scale-[1.02]"
                      : "bg-white text-[#30383D] border-[#7899B0]/25 hover:border-[#172B3A] hover:bg-[#DCE6EB]/40 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest ${
                        isSelected ? "text-[#D3A56C]" : "text-[#7899B0]"
                      }`}
                    >
                      {stage.step}
                    </span>
                    {idx < stages.length - 1 && (
                      <ChevronRight
                        size={14}
                        className={isSelected ? "text-[#7899B0]" : "text-[#7899B0]/60"}
                      />
                    )}
                  </div>
                  <h3
                    className={`font-display font-bold text-lg tracking-tight uppercase ${
                      isSelected ? "text-white" : "text-[#172B3A]"
                    }`}
                  >
                    {stage.name}
                  </h3>
                  <div
                    className={`h-1 w-full rounded-full mt-3 ${
                      isSelected ? "bg-[#7899B0]" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Tab Carousel */}
          <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 custom-scrollbar">
            {stages.map((stage, idx) => {
              const isSelected = selectedStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(idx)}
                  className={`px-4 py-2.5 rounded-xl shrink-0 font-mono text-xs font-bold uppercase transition-all ${
                    isSelected
                      ? "bg-[#172B3A] text-[#F1F3F1] shadow-md"
                      : "bg-white text-[#30383D] border border-[#7899B0]/30"
                  }`}
                >
                  {stage.step} · {stage.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Interactive Card */}
        <div className="rounded-3xl bg-white border border-[#7899B0]/30 p-8 sm:p-12 lg:p-14 shadow-[0_16px_45px_rgba(23,43,58,0.08)] relative overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Detail Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-[#172B3A] text-white flex items-center justify-center font-mono font-bold text-sm">
                  {current.step}
                </span>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#7899B0] uppercase font-bold">
                    CONNECTED STAGE {current.step} OF 05
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-[#172B3A] tracking-tight">
                    {current.name}
                  </h3>
                </div>
              </div>

              <h4 className="text-xl sm:text-2xl font-display font-semibold text-[#172B3A] leading-snug">
                {current.headline}
              </h4>

              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-sans">
                {current.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <TransitionLink
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#172B3A] hover:bg-[#20394c] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md group"
                >
                  <span>COMMISSION THIS SYSTEM</span>
                  <ArrowUpRight
                    size={14}
                    className="text-[#7899B0] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </TransitionLink>

                <button
                  onClick={() => setSelectedStage((selectedStage + 1) % stages.length)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#DCE6EB]/60 hover:bg-[#DCE6EB] text-[#172B3A] font-mono text-xs font-semibold uppercase tracking-wider transition-colors border border-[#7899B0]/25"
                >
                  <span>NEXT STAGE: {stages[(selectedStage + 1) % stages.length].name}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Deliverables & Interconnection Column */}
            <div className="lg:col-span-5 rounded-2xl bg-[#DCE6EB]/40 border border-[#7899B0]/20 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#7899B0]/20">
                <span className="text-xs font-mono font-bold tracking-widest text-[#172B3A] uppercase">
                  VERIFIED DELIVERABLES
                </span>
                <span className="text-[10px] font-mono text-[#7899B0] uppercase font-bold">
                  STAGE {current.step} OUTPUT
                </span>
              </div>

              <ul className="space-y-3.5">
                {current.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-[#7899B0] shrink-0 mt-0.5"
                    />
                    <span className="text-sm font-sans font-medium text-[#172B3A]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#7899B0]/20 space-y-2">
                <div className="text-[10px] font-mono uppercase text-[#7899B0] font-bold">
                  INTERCONNECTION WITH NEXT STAGE:
                </div>
                <p className="text-xs text-[#30383D] font-mono">
                  {selectedStage === 0 && "→ Strategy feeds positioning directly into Brand identity rules."}
                  {selectedStage === 1 && "→ Brand guidelines inform the UI/UX architecture and web design."}
                  {selectedStage === 2 && "→ Digital platform is architected specifically for SEO & indexing."}
                  {selectedStage === 3 && "→ Organic rankings generate steady pipeline for Growth attribution."}
                  {selectedStage === 4 && "→ Closed-loop data loops back into ongoing Strategy refinement."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Flow Indicator Ribbon */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#172B3A] text-[#F1F3F1] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#D3A56C] animate-ping" />
            <span className="text-xs font-mono tracking-widest uppercase font-bold text-[#DCE6EB]">
              STRATEGIC METHODOLOGY:
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-xs font-mono font-bold overflow-x-auto">
            {stages.map((st, i) => (
              <span key={st.id} className="flex items-center gap-2 shrink-0">
                <span
                  className={selectedStage === i ? "text-[#D3A56C] underline underline-offset-4" : "text-[#7899B0]"}
                >
                  {st.name}
                </span>
                {i < stages.length - 1 && <span className="text-white/40">→</span>}
              </span>
            ))}
          </div>

          <span className="text-[10px] font-mono tracking-widest text-[#7899B0] uppercase">
            HYDERABAD · EST. 2025
          </span>
        </div>
      </div>
    </section>
  );
}
