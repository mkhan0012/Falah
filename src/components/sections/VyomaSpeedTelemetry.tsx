"use client";

import { useState } from "react";
import { Zap, AlertTriangle, CheckCircle2, Sparkles, ShieldAlert } from "lucide-react";
import TransitionLink from "@/components/ui/TransitionLink";

interface TelemetryMode {
  id: "vyoma" | "commodity";
  label: string;
  tag: string;
  score: number;
  lcp: string;
  inp: string;
  cls: string;
  fcp: string;
  totalTime: string;
  payload: string;
  requests: string;
  bounceRisk: string;
  seoPenalty: string;
  assessment: string;
}

const telemetryData: Record<"vyoma" | "commodity", TelemetryMode> = {
  vyoma: {
    id: "vyoma",
    label: "VYOMA Next.js 15 Engine",
    tag: "VERIFIED ARCHITECTURE",
    score: 100,
    lcp: "0.58s",
    inp: "18ms",
    cls: "0.000",
    fcp: "0.34s",
    totalTime: "340ms",
    payload: "184 KB (Lean)",
    requests: "12 Edge Requests",
    bounceRisk: "< 1.2% (Minimal)",
    seoPenalty: "Zero · Top Crawl Priority",
    assessment: "Google prioritizes this site in local 3-pack & LLM answer engines. Mobile visitors convert at peak efficiency.",
  },
  commodity: {
    id: "commodity",
    label: "Commodity Agency (WordPress / Elementor / Wix)",
    tag: "UNOPTIMIZED STANDARD",
    score: 42,
    lcp: "4.82s",
    inp: "380ms",
    cls: "0.284",
    fcp: "2.90s",
    totalTime: "4,820ms",
    payload: "4.8 MB (Bloated)",
    requests: "89 Plugin Scripts",
    bounceRisk: "53% Bounce Probability",
    seoPenalty: "Severe Mobile Penalty",
    assessment: "More than half of mobile visitors abandon before the hero loads. Rented ad spend is burned on bounced clicks.",
  },
};

export default function VyomaSpeedTelemetry() {
  const [activeMode, setActiveMode] = useState<"vyoma" | "commodity">("vyoma");
  const [isSimulating, setIsSimulating] = useState(false);

  const current = telemetryData[activeMode];

  const handleSimulate = (mode: "vyoma" | "commodity") => {
    if (mode === activeMode && !isSimulating) return;
    setIsSimulating(true);
    setActiveMode(mode);
    setTimeout(() => {
      setIsSimulating(false);
    }, 600);
  };

  // Radial Circle Gauge stroke calculation
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (current.score / 100) * circumference;

  return (
    <section className="relative py-24 sm:py-32 bg-[#172B3A] text-[#F1F3F1] border-b border-[#7899B0]/25 overflow-hidden font-sans">
      {/* Subtle Atmospheric Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#F1F3F1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#7899B0]/30 text-xs font-mono uppercase tracking-[0.2em] text-[#DCE6EB] shadow-sm">
            <Zap size={13} className="text-[#D3A56C]" />
            <span>LIVE SPEED & CORE WEB VITALS TELEMETRY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#F1F3F1] leading-[1.05] uppercase">
            Sub-Second Speed. <br />
            <span className="text-[#93B2C8]">Every 100ms of Latency Costs 7% Conversion.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#DCE6EB] leading-relaxed max-w-2xl font-sans">
            Google ranks websites on Core Web Vitals. If your page takes 4 seconds to load, 53% of mobile decision-makers abandon it. We engineer clean Next.js systems running on global edge networks.
          </p>
        </div>

        {/* Interactive Benchmark Controller Switcher */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2.5 rounded-2xl bg-white/5 border border-[#7899B0]/25 backdrop-blur-md mb-10 max-w-2xl">
          <button
            type="button"
            onClick={() => handleSimulate("vyoma")}
            className={`flex-1 py-3 px-5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeMode === "vyoma"
                ? "bg-[#D3A56C] text-[#172B3A] shadow-md"
                : "text-[#DCE6EB] hover:text-white hover:bg-white/5"
            }`}
          >
            <Sparkles size={14} />
            <span>VYOMA Next.js Engine (100/100)</span>
          </button>

          <button
            type="button"
            onClick={() => handleSimulate("commodity")}
            className={`flex-1 py-3 px-5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeMode === "commodity"
                ? "bg-[#D3A56C] text-[#172B3A] shadow-md"
                : "text-[#DCE6EB] hover:text-white hover:bg-white/5"
            }`}
          >
            <AlertTriangle size={14} />
            <span>Typical Commodity Agency</span>
          </button>
        </div>

        {/* Telemetry Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Speedometer Gauge Card */}
          <div className="lg:col-span-5 rounded-3xl bg-white/5 border border-[#7899B0]/25 p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#93B2C8]">
                LIGHTHOUSE BENCHMARK
              </span>
              <span
                className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full font-bold ${
                  activeMode === "vyoma"
                    ? "bg-[#D3A56C]/20 text-[#D3A56C] border border-[#D3A56C]/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}
              >
                {current.tag}
              </span>
            </div>

            {/* Circular Speedometer */}
            <div className="py-8 flex flex-col items-center justify-center relative">
              <div className="relative w-44 h-44 flex items-center justify-center">
                {/* SVG Gauge */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
                  {/* Track Circle */}
                  <circle
                    cx="64"
                    cy="64"
                    r={radius}
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  {/* Progress Indicator */}
                  <circle
                    cx="64"
                    cy="64"
                    r={radius}
                    stroke={activeMode === "vyoma" ? "#D3A56C" : "#ef4444"}
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={isSimulating ? circumference : strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-700 ease-out"
                  />
                </svg>

                {/* Internal Dial Readout */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span
                    className={`font-display font-black text-5xl sm:text-6xl leading-none transition-all duration-500 ${
                      activeMode === "vyoma" ? "text-white" : "text-red-400"
                    }`}
                  >
                    {isSimulating ? "--" : current.score}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#93B2C8] mt-1">
                    OVERALL SCORE
                  </span>
                </div>
              </div>

              {/* Total Latency Pill */}
              <div className="mt-6 text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-mono font-black text-white">
                  {current.totalTime}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#93B2C8]">
                  Full Page Render Time
                </div>
              </div>
            </div>

            {/* Assessment Footer Box */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-[#DCE6EB] leading-relaxed">
              <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#93B2C8] mb-1 flex items-center gap-1.5">
                {activeMode === "vyoma" ? (
                  <CheckCircle2 size={13} className="text-[#D3A56C]" />
                ) : (
                  <ShieldAlert size={13} className="text-red-400" />
                )}
                <span>COMMERCIAL AUDIT CONCLUSION</span>
              </div>
              <p>{current.assessment}</p>
            </div>
          </div>

          {/* Right Column: The 4 Google Core Web Vitals Breakdown */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            {/* Vitals Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LCP Card */}
              <div className="p-6 rounded-2xl bg-white/5 border border-[#7899B0]/25 backdrop-blur-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#93B2C8]">
                    LCP // LARGEST CONTENTFUL PAINT
                  </span>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${
                      activeMode === "vyoma" ? "bg-[#D3A56C]/20 text-[#D3A56C]" : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {activeMode === "vyoma" ? "GOOD (< 2.5s)" : "POOR (> 4.0s)"}
                  </span>
                </div>
                <div className="text-3xl font-display font-black text-white">
                  {current.lcp}
                </div>
                <p className="text-xs text-[#DCE6EB]/80 leading-relaxed font-sans">
                  Time until the main hero content and typography are completely visible to the visitor.
                </p>
              </div>

              {/* INP Card */}
              <div className="p-6 rounded-2xl bg-white/5 border border-[#7899B0]/25 backdrop-blur-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#93B2C8]">
                    INP // INTERACTION TO NEXT PAINT
                  </span>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${
                      activeMode === "vyoma" ? "bg-[#D3A56C]/20 text-[#D3A56C]" : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {activeMode === "vyoma" ? "INSTANT (< 200ms)" : "FROZEN (> 300ms)"}
                  </span>
                </div>
                <div className="text-3xl font-display font-black text-white">
                  {current.inp}
                </div>
                <p className="text-xs text-[#DCE6EB]/80 leading-relaxed font-sans">
                  The tactile responsiveness of navigation menus, consultation booking buttons, and inputs.
                </p>
              </div>

              {/* CLS Card */}
              <div className="p-6 rounded-2xl bg-white/5 border border-[#7899B0]/25 backdrop-blur-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#93B2C8]">
                    CLS // CUMULATIVE LAYOUT SHIFT
                  </span>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${
                      activeMode === "vyoma" ? "bg-[#D3A56C]/20 text-[#D3A56C]" : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {activeMode === "vyoma" ? "ZERO SHIFT (< 0.1)" : "UNSTABLE (> 0.25)"}
                  </span>
                </div>
                <div className="text-3xl font-display font-black text-white">
                  {current.cls}
                </div>
                <p className="text-xs text-[#DCE6EB]/80 leading-relaxed font-sans">
                  Visual stability. Zero sudden jumps or jarring button movement as imagery streams into the page.
                </p>
              </div>

              {/* FCP Card */}
              <div className="p-6 rounded-2xl bg-white/5 border border-[#7899B0]/25 backdrop-blur-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#93B2C8]">
                    FCP // FIRST CONTENTFUL PAINT
                  </span>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${
                      activeMode === "vyoma" ? "bg-[#D3A56C]/20 text-[#D3A56C]" : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {activeMode === "vyoma" ? "SUB-SECOND (< 1.8s)" : "SLUGGISH (> 2.5s)"}
                  </span>
                </div>
                <div className="text-3xl font-display font-black text-white">
                  {current.fcp}
                </div>
                <p className="text-xs text-[#DCE6EB]/80 leading-relaxed font-sans">
                  Sub-second initial server response. The instant reassurance that your business is operating.
                </p>
              </div>
            </div>

            {/* Technical Payload Comparison Bar */}
            <div className="p-6 rounded-2xl bg-white/5 border border-[#7899B0]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-[#93B2C8] uppercase block text-[10px]">PAYLOAD SIZE</span>
                  <span className="text-white font-bold text-sm">{current.payload}</span>
                </div>
                <div className="h-6 w-[1px] bg-white/10" />
                <div>
                  <span className="text-[#93B2C8] uppercase block text-[10px]">EXTERNAL SCRIPTS</span>
                  <span className="text-white font-bold text-sm">{current.requests}</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[#93B2C8] uppercase block text-[10px]">ESTIMATED BOUNCE RISK</span>
                <span
                  className={`font-bold text-sm ${
                    activeMode === "vyoma" ? "text-[#D3A56C]" : "text-red-400"
                  }`}
                >
                  {current.bounceRisk}
                </span>
              </div>
            </div>

            {/* Direct CTA Link */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-[#7899B0]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-base text-white">
                  Ready to upgrade your enterprise to sub-second architecture?
                </h3>
                <p className="text-xs font-sans text-[#DCE6EB] mt-0.5">
                  We audit your current website speed and Core Web Vitals before writing a single line of code.
                </p>
              </div>

              <TransitionLink
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7899B0] text-[#172B3A] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-md shrink-0"
              >
                <span>REQUEST FREE SPEED AUDIT</span>
                <Zap size={13} />
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
