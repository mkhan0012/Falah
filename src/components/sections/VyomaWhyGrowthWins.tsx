"use client";

import { Home, TrendingUp, Award, Zap, Bot, XCircle, CheckCircle2, ShieldAlert } from "lucide-react";
import TransitionLink from "@/components/ui/TransitionLink";

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

const comparisonMatrix = [
  {
    metric: "Customer Acquisition Cost",
    rented: "Rises every quarter as ad auctions grow more expensive.",
    owned: "Decays toward zero as organic search authority compounds.",
  },
  {
    metric: "Traffic Continuity",
    rented: "Drops to zero the day your paid ad budget runs out.",
    owned: "Continues generating qualified RFPs 24/7 without recurring spend.",
  },
  {
    metric: "Engineering & Speed",
    rented: "Generic WordPress/Wix templates averaging 4.5s – 6s load latency.",
    owned: "Custom Next.js App Router engineering with 100/100 Core Web Vitals (<0.4s).",
  },
  {
    metric: "Commercial Valuation",
    rented: "Creates zero balance-sheet equity. Pure operational expense.",
    owned: "Builds defensible brand IP, ranked digital real estate, and permanent enterprise value.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
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

        {/* High-Contrast Architectural Comparison Table */}
        <div className="mb-20 rounded-3xl bg-[#172B3A] text-[#F1F3F1] border border-[#7899B0]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-10 space-y-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#D3A56C] font-bold block">
              THE COMMERCIAL AUDIT
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Commodity Agency Model vs. The VYOMA Owned System
            </h3>
            <p className="text-sm sm:text-base text-[#DCE6EB] leading-relaxed">
              Why relying on recurring performance ads and template websites creates an escalating cash drain, while owned digital infrastructure compounds value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Rented Model Card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                <XCircle size={18} className="text-red-400 shrink-0" />
                <span className="text-xs font-mono tracking-wider text-red-300 uppercase font-bold">
                  TYPICAL AGENCY (RENTED TRAFFIC)
                </span>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-[#DCE6EB]/80 font-sans">
                {comparisonMatrix.map((item, idx) => (
                  <li key={idx} className="pb-3 border-b border-white/5 last:border-b-0 space-y-1">
                    <span className="text-[11px] font-mono text-[#7899B0] uppercase block">
                      {item.metric}:
                    </span>
                    <p className="text-white/80">{item.rented}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Owned Model Card */}
            <div className="rounded-2xl bg-gradient-to-b from-[#7899B0]/20 to-[#172B3A] border border-[#7899B0]/40 p-6 sm:p-8 space-y-6 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#7899B0]/30">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#D3A56C] shrink-0" />
                  <span className="text-xs font-mono tracking-wider text-[#D3A56C] uppercase font-bold">
                    VYOMA SYSTEM (OWNED ASSETS)
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D3A56C]/10 text-[#D3A56C] border border-[#D3A56C]/30 font-bold uppercase">
                  PERMANENT MOAT
                </span>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-white font-sans">
                {comparisonMatrix.map((item, idx) => (
                  <li key={idx} className="pb-3 border-b border-white/10 last:border-b-0 space-y-1">
                    <span className="text-[11px] font-mono text-[#D3A56C] uppercase block font-semibold">
                      {item.metric}:
                    </span>
                    <p className="text-[#F1F3F1] font-medium leading-relaxed">{item.owned}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* High-Status Partnership Criteria ("Who We Are NOT For") */}
        <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE6EB]/60 border border-[#7899B0]/30 text-xs font-mono uppercase tracking-wider text-[#172B3A] font-bold">
              <ShieldAlert size={14} className="text-[#D3A56C]" />
              <span>ENGAGEMENT STANDARDS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A]">
              We Are Highly Selective About Who We Partner With.
            </h3>
            <p className="text-sm sm:text-base text-[#30383D] leading-relaxed">
              We operate as a high-conviction growth consultancy, taking on a strictly capped number of client transformations per quarter to guarantee direct partner attention and institutional execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 rounded-2xl bg-red-50/50 border border-red-200/60 space-y-3">
              <div className="text-xs font-mono font-bold text-red-700 uppercase tracking-wider flex items-center gap-1.5">
                <XCircle size={15} />
                <span>WHO WE ARE NOT FOR</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#30383D]/90 list-disc pl-4 leading-relaxed">
                <li>Companies looking for cheap, quick-turnaround graphic tasks or ad hoc flyer design.</li>
                <li>Brands that view digital presence as a disposable expense rather than a commercial asset.</li>
                <li>Vendors seeking superficial social media vanity metrics without revenue attribution.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#DCE6EB]/30 border border-[#7899B0]/30 space-y-3">
              <div className="text-xs font-mono font-bold text-[#172B3A] uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#D3A56C]" />
                <span>WHO WE ARE BUILT FOR</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#30383D] list-disc pl-4 leading-relaxed">
                <li>Founders and enterprise executives building enduring category authority.</li>
                <li>B2B manufacturers, healthcare leaders, and luxury firms requiring precision engineering.</li>
                <li>Organizations ready to permanently own their search demand and inbound acquisition pathways.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#7899B0]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono text-[#7899B0]">
              Q4 Intake: Limited to 3 enterprise engagements per cycle.
            </p>
            <TransitionLink
              href="/request-proposal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#172B3A] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#20394c] transition-colors"
            >
              <span>SUBMIT STRATEGIC RFP ↗</span>
            </TransitionLink>
          </div>
        </div>

      </div>
    </section>
  );
}
