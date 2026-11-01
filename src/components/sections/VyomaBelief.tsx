"use client";

import { ShieldAlert, Sparkles, RefreshCw, Layers } from "lucide-react";

export default function VyomaBelief() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F1F3F1] border-b border-[#7899B0]/25 overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#DCE6EB]/50 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono uppercase tracking-widest text-[#172B3A] font-semibold shadow-sm">
            <Sparkles size={13} className="text-[#D3A56C]" />
            <span>OUR CORE BELIEF</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#172B3A] leading-tight">
            A beautiful website is useless if nobody finds it.{" "}
            <span className="text-[#7899B0]">
              A loud campaign is wasted money if it lands on a weak experience.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-sans">
            Today, almost every agency says it does everything: branding, websites, SEO, ads. So “all-in-one” is no longer the differentiator. The real question is: <strong className="text-[#172B3A]">what is it all built for?</strong>
          </p>
        </div>

        {/* The Split Paradigm: Rented Attention vs. Owned Attention */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Rented Attention (The Fragile Treadmill) */}
          <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md transition-all">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#30383D] font-bold flex items-center gap-2">
                  <ShieldAlert size={15} className="text-[#172B3A]" />
                  RENTED ATTENTION (THE TREADMILL)
                </span>
                <span className="text-xs font-mono text-[#172B3A] font-semibold">DEPLETES CAPITAL</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-[#172B3A]">
                The Moment You Stop Paying, Traffic Drops to Zero.
              </h3>

              <p className="text-sm sm:text-base text-[#30383D] leading-relaxed">
                Much of conventional digital marketing is rented attention. You pay platforms for impressions, traffic arrives temporarily, and the moment you pause the spend, it vanishes. You have built no permanent commercial asset. You are back to zero.
              </p>

              {/* Rented Flowchart diagram */}
              <div className="p-4 rounded-2xl bg-[#DCE6EB]/40 border border-[#7899B0]/20 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-[#30383D]">
                  <span className="font-medium">Continuous Ad Spend</span>
                  <span className="text-[#172B3A] font-bold">Fragile Equity</span>
                </div>
                <div className="w-full bg-[#7899B0]/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#172B3A] w-[90%] h-full rounded-full" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#30383D] pt-1">
                  <span>Ad Budget Exhausted</span>
                  <span className="text-[#172B3A] font-bold">→ Commercial Equity: 0%</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#7899B0]/20 text-xs font-mono text-[#7899B0] flex items-center gap-2">
              <RefreshCw size={13} className="text-[#172B3A]" />
              <span>Perpetual spend required to stay visible</span>
            </div>
          </div>

          {/* Card 2: Owned Attention (The VYOMA Compounding Engine) */}
          <div className="rounded-3xl bg-[#172B3A] text-[#F1F3F1] border border-[#7899B0]/40 p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group shadow-xl">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#7899B0] font-bold flex items-center gap-2">
                  <Sparkles size={15} className="text-[#D3A56C]" />
                  OWNED ATTENTION (VYOMA SYSTEM)
                </span>
                <span className="text-xs font-mono text-[#D3A56C] font-semibold">COMPOUNDING EQUITY</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white">
                Every Month of Work Builds an Asset You Own Forever.
              </h3>

              <p className="text-sm sm:text-base text-[#DCE6EB] leading-relaxed">
                VYOMA engineers an owned digital estate. Category-defining brand positioning, high-converting Next.js architecture, and compounding search discoverability that continue attracting the highest-value clients long after launch.
              </p>

              {/* Owned System diagram */}
              <div className="p-4 rounded-2xl bg-white/5 border border-[#7899B0]/30 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-[#DCE6EB]">
                  <span className="font-medium">Organic Asset Growth</span>
                  <span className="text-[#D3A56C] font-bold">Compounding ROI</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#7899B0] w-[100%] h-full rounded-full" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#DCE6EB] pt-1">
                  <span>Ad Budget Stays at Zero</span>
                  <span className="text-[#D3A56C] font-bold">→ Commercial Equity: 100%</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#7899B0]/25 text-xs font-mono text-[#DCE6EB] flex items-center gap-2">
              <Layers size={13} className="text-[#7899B0]" />
              <span>Digital assets that continue creating value over time</span>
            </div>
          </div>
        </div>

        {/* The VYOMA Rule Callout Banner */}
        <div className="rounded-2xl bg-white border border-[#7899B0]/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7899B0] font-bold">
              THE VYOMA RULE
            </span>
            <p className="font-display font-bold text-lg sm:text-xl text-[#172B3A]">
              We do not build anything that stops working the day the engagement ends.
            </p>
          </div>
          <span className="text-xs font-mono font-semibold px-4 py-2 rounded-full bg-[#172B3A] text-white shrink-0">
            OWNERSHIP OVER DEPENDENCY
          </span>
        </div>
      </div>
    </section>
  );
}
