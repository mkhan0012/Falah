"use client";

import { Home, TrendingUp, Award, Zap, Bot } from "lucide-react";

const compoundingPillars = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Zero Cost-Per-Click Inbound",
    headline: "A page that ranks brings qualified enquiries month after month, with zero cost per click.",
    detail: "While competitors bid up paid auction costs every quarter, your organic rankings capture high-intent searchers at zero marginal acquisition cost.",
  },
  {
    number: "02",
    icon: Award,
    title: "Defensible Brand Equity",
    headline: "A brand people recognize gets chosen over cheaper competitors, because trust shortens every decision.",
    detail: "Premium positioning eliminates destructive price wars. When decision makers already respect your name, sales cycles collapse from quarters to weeks.",
  },
  {
    number: "03",
    icon: Zap,
    title: "High-Velocity Digital Foundation",
    headline: "A fast, well-tracked web experience makes every future initiative work exponentially harder.",
    detail: "Sub-second load times and rigorous event tracking maximize conversion rates for all incoming traffic, boosting the performance of every digital touchpoint.",
  },
  {
    number: "04",
    icon: Bot,
    title: "AI Search & LLM Answer Citation (GEO)",
    headline: "Search has expanded beyond blue links into AI answers and generative summaries.",
    detail: "Modern AI platforms synthesize information from authoritative, structured sources. We engineer entity schema and topical maps so you are cited first.",
  },
];

export default function VyomaWhyGrowthWins() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F1F3F1] border-b border-[#7899B0]/25 overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono uppercase tracking-widest text-[#172B3A] font-semibold shadow-sm">
            <span>WHY GROWTH YOU OWN WINS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#172B3A] leading-tight">
            Rented traffic stops. <br />
            <span className="text-[#7899B0]">Owned visibility compounds.</span>
          </h2>

          {/* Renting vs Buying Home Metaphor Callout */}
          <div className="p-6 rounded-2xl bg-white border border-[#7899B0]/30 flex items-start gap-4 shadow-sm">
            <div className="p-2.5 rounded-xl bg-[#DCE6EB] text-[#172B3A] shrink-0 mt-0.5 shadow-sm">
              <Home size={20} />
            </div>
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed">
              <strong className="text-[#172B3A] font-semibold">Think about renting versus buying a home.</strong> Rent is easy to start and gone every month. Ownership takes more deliberate engineering at the beginning, then builds commercial equity for years.
            </p>
          </div>
        </div>

        {/* 4 Compounding Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {compoundingPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="rounded-3xl bg-white border border-[#7899B0]/25 hover:border-[#172B3A] p-8 sm:p-10 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between shadow-sm hover:shadow-[0_12px_36px_rgba(23,43,58,0.08)]"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#DCE6EB]/60 border border-[#7899B0]/25 flex items-center justify-center text-[#172B3A] group-hover:bg-[#172B3A] group-hover:text-white transition-all duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-widest text-[#7899B0]">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#172B3A] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-base font-semibold text-[#30383D] leading-snug mb-3">
                      {pillar.headline}
                    </p>
                    <p className="text-sm text-[#30383D]/80 leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#7899B0]/20 flex items-center justify-between text-xs font-mono text-[#7899B0]">
                  <span>COMPOUNDING EQUITY</span>
                  <span className="group-hover:text-[#172B3A] transition-colors font-bold">
                    0{pillar.number} / 04 →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
