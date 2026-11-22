"use client";

import { useState } from "react";
import Image from "next/image";
import TransitionLink from "@/components/ui/TransitionLink";
import {
  Search,
  AlertTriangle,
  Star,
  EyeOff,
  Check,
  Zap,
  ArrowRight,
  TrendingUp,
  Globe,
  Maximize2,
  X,
} from "lucide-react";

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function VyomaGoogleDiscovery() {
  const [activeTab, setActiveTab] = useState<"before" | "after">("before");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section
      id="discovery-audit"
      className="relative py-24 sm:py-32 bg-[#F8FAFC] text-[#0B1736] overflow-hidden border-b border-[#7899B0]/25"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 horizon-grid"
        aria-hidden="true"
      />

      {/* Decorative Yellow Wave Accents inspired by the poster */}
      <div
        className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#FEB005]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-16 -right-16 w-96 h-96 bg-[#1A73E8]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        {/* Campaign Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#0B1736]/10 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#0B1736]/10 text-xs font-mono font-bold tracking-widest uppercase text-[#0B1736] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FEB005] animate-pulse" />
            <span>THE VYOMA DISCOVERY REALITY CHECK</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#0B1736]/70 hover:text-[#0B1736] transition-colors cursor-pointer bg-white px-3 py-1.5 rounded-full border border-[#0B1736]/10 shadow-xs"
            >
              <Maximize2 size={13} className="text-[#FEB005]" />
              <span>View Campaign Poster</span>
            </button>
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#7899B0]">
              <span>HYDERABAD · STRATEGY · VISIBILITY</span>
            </div>
          </div>
        </div>

        {/* Main Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: The Big Question & The 3 Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4 relative">
              {/* Playful Yellow 3-Ray Sparkle Accent from Poster */}
              <div className="absolute -top-6 right-4 sm:right-16 flex items-center gap-1 text-[#FEB005] select-none pointer-events-none">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <line x1="8" y1="34" x2="2" y2="40" stroke="#FEB005" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="16" y1="26" x2="10" y2="16" stroke="#FEB005" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="28" y1="22" x2="38" y2="12" stroke="#FEB005" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Headline from Poster */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-[#0B1736] leading-[1.08]">
                Your customer <br />
                just Googled you.
              </h2>

              {/* Subheadline in Google Blue with Yellow Accent Underline */}
              <div className="relative inline-block pt-1">
                <span className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-[#1A73E8]">
                  What did they find?
                </span>
                {/* Yellow curved stroke highlight */}
                <svg
                  className="w-full h-3 sm:h-4 text-[#FEB005] mt-1 -ml-1"
                  viewBox="0 0 240 16"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 4 10 C 60 4, 160 3, 236 12"
                    stroke="#FEB005"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Explanatory Narrative */}
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed max-w-xl">
              Before anyone signs a commercial agreement, awards a high-ticket contract,
              or visits your office, they open Google. If your site looks abandoned, your reviews
              are nonexistent, and your search ranking is invisible, buyers don&apos;t call.
              They choose your competitor.
            </p>

            {/* The 3 Core Pillars: Be found. Be trusted. Be chosen. */}
            <div className="space-y-4 pt-2">
              {/* 01. Be found */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#0B1736]/10 shadow-xs hover:border-[#FEB005]/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#1A73E8]/10 text-[#1A73E8] flex items-center justify-center shrink-0 font-bold font-mono text-sm">
                  01
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0B1736]">
                    Be found.
                  </h3>
                  <p className="text-sm text-[#30383D]/80 mt-0.5">
                    Compounding organic search dominance, Google Maps 3-Pack authority, and Generative Engine Optimization (GEO).
                  </p>
                </div>
              </div>

              {/* 02. Be trusted */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#0B1736]/10 shadow-xs hover:border-[#FEB005]/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#FEB005]/15 text-[#0B1736] flex items-center justify-center shrink-0 font-bold font-mono text-sm">
                  02
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0B1736]">
                    Be trusted.
                  </h3>
                  <p className="text-sm text-[#30383D]/80 mt-0.5">
                    Sub-second Next.js engineering, bespoke editorial UI/UX, verified reviews, and cohesive visual identity.
                  </p>
                </div>
              </div>

              {/* 03. Be chosen (Interactive Pill from Poster) */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <TransitionLink
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 sm:px-9 py-4 rounded-full bg-[#0B1736] text-[#FEB005] hover:bg-[#02103D] hover:shadow-[0_8px_30px_rgba(11,23,54,0.3)] transition-all transform hover:-translate-y-0.5 group shadow-lg shadow-[#0B1736]/20 border border-[#FEB005]/30 cursor-pointer"
                >
                  <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#FEB005]">
                    Be chosen.
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#FEB005] text-[#0B1736] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={15} className="stroke-[2.5]" />
                  </div>
                </TransitionLink>

                <button
                  type="button"
                  onClick={() => setActiveTab(activeTab === "before" ? "after" : "before")}
                  className="text-xs font-mono font-bold text-[#1A73E8] hover:text-[#0B1736] underline underline-offset-4 cursor-pointer py-2"
                >
                  {activeTab === "before"
                    ? "→ Click to see how Vyoma fixes this"
                    : "← Click to see the current pain point"}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Smartphone Device Mockup with Google Search */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            {/* Interactive State Toggle */}
            <div className="mb-6 p-1 rounded-full bg-white border border-[#0B1736]/15 shadow-sm inline-flex items-center gap-1 z-20">
              <button
                type="button"
                onClick={() => setActiveTab("before")}
                className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === "before"
                    ? "bg-[#DC2626] text-white shadow-xs"
                    : "text-[#30383D] hover:text-[#0B1736]"
                }`}
              >
                <AlertTriangle size={13} />
                <span>WITHOUT VYOMA (LOST LEADS)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("after")}
                className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === "after"
                    ? "bg-[#0B1736] text-[#FEB005] shadow-xs"
                    : "text-[#30383D] hover:text-[#0B1736]"
                }`}
              >
                <Check size={13} className="text-[#FEB005]" />
                <span>WITH VYOMA (CHOSEN)</span>
              </button>
            </div>

            {/* Smartphone Mockup Container */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Outer Phone Hardware Chassis */}
              <div className="relative rounded-[48px] bg-[#1E293B] p-3 sm:p-3.5 shadow-[0_25px_60px_-15px_rgba(11,23,54,0.35)] border-4 border-[#334155] ring-1 ring-black/20">
                {/* Dynamic Island / Speaker Pill */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#0F172A] rounded-full z-30 flex items-center justify-end px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1E293B] border border-white/10" />
                </div>

                {/* Inner Phone Screen */}
                <div className="relative rounded-[38px] bg-gradient-to-b from-white via-[#F8FAFC] to-[#EFF6FF] pt-12 pb-10 px-5 sm:px-6 overflow-hidden min-h-[520px] flex flex-col justify-between">
                  {/* Google Search Header on Phone */}
                  <div className="space-y-4 pt-2 text-center">
                    {/* Google Logo */}
                    <div className="flex items-center justify-center font-display font-bold text-2xl tracking-tight select-none">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">o</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#34A853]">l</span>
                      <span className="text-[#EA4335]">e</span>
                    </div>

                    {/* Google Search Bar from Poster */}
                    <div className="relative rounded-full bg-white border border-gray-200 shadow-sm px-4 py-2.5 flex items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-sans font-medium text-gray-800 tracking-tight">
                        your business
                      </span>
                      <Search size={16} className="text-gray-500 shrink-0" />
                    </div>
                  </div>

                  {/* Floating Diagnostic Cards from Poster */}
                  <div className="space-y-3.5 my-6">
                    {/* Card 1: Website */}
                    <div
                      className={`p-3.5 rounded-2xl bg-white border transition-all duration-300 shadow-sm flex items-center justify-between gap-3 ${
                        activeTab === "before"
                          ? "border-red-200/80 bg-red-50/20"
                          : "border-emerald-200/80 bg-emerald-50/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            activeTab === "before"
                              ? "bg-blue-50 text-[#1A73E8]"
                              : "bg-emerald-50 text-emerald-600"
                          }`}
                        >
                          <Globe size={18} />
                        </div>
                        <div className="text-left">
                          <span className="text-xs font-sans text-gray-500 block leading-tight">
                            Website:
                          </span>
                          <span
                            className={`font-display font-extrabold text-sm sm:text-base leading-tight ${
                              activeTab === "before"
                                ? "text-gray-900"
                                : "text-emerald-700"
                            }`}
                          >
                            {activeTab === "before" ? "outdated" : "100/100 Next.js"}
                          </span>
                        </div>
                      </div>

                      {activeTab === "before" ? (
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                          <AlertTriangle size={18} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <Zap size={16} />
                        </div>
                      )}
                    </div>

                    {/* Card 2: Reviews */}
                    <div
                      className={`p-3.5 rounded-2xl bg-white border transition-all duration-300 shadow-sm flex items-center justify-between gap-3 ${
                        activeTab === "before"
                          ? "border-gray-200"
                          : "border-amber-200 bg-amber-50/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            activeTab === "before"
                              ? "bg-gray-100 text-gray-500"
                              : "bg-amber-100 text-[#FEB005]"
                          }`}
                        >
                          <Star size={18} />
                        </div>
                        <div className="text-left">
                          <span className="text-xs font-sans text-gray-500 block leading-tight">
                            Reviews:
                          </span>
                          <span
                            className={`font-display font-extrabold text-sm sm:text-base leading-tight ${
                              activeTab === "before"
                                ? "text-gray-900"
                                : "text-amber-800"
                            }`}
                          >
                            {activeTab === "before" ? "0" : "4.9 Rating"}
                          </span>
                        </div>
                      </div>

                      {activeTab === "before" ? (
                        <div className="flex items-center gap-0.5 text-gray-300">
                          <Star size={14} />
                          <Star size={14} />
                          <Star size={14} />
                          <Star size={14} />
                          <Star size={14} />
                        </div>
                      ) : (
                        <div className="flex items-center gap-0.5 text-[#FEB005]">
                          <Star size={14} fill="#FEB005" />
                          <Star size={14} fill="#FEB005" />
                          <Star size={14} fill="#FEB005" />
                          <Star size={14} fill="#FEB005" />
                          <Star size={14} fill="#FEB005" />
                        </div>
                      )}
                    </div>

                    {/* Card 3: Social */}
                    <div
                      className={`p-3.5 rounded-2xl bg-white border transition-all duration-300 shadow-sm flex items-center justify-between gap-3 ${
                        activeTab === "before"
                          ? "border-gray-200"
                          : "border-blue-200 bg-blue-50/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            activeTab === "before"
                              ? "bg-gray-100 text-gray-500"
                              : "bg-blue-100 text-[#1A73E8]"
                          }`}
                        >
                          <InstagramIcon size={18} />
                        </div>
                        <div className="text-left">
                          <span className="text-xs font-sans text-gray-500 block leading-tight">
                            Social:
                          </span>
                          <span
                            className={`font-display font-extrabold text-sm sm:text-base leading-tight ${
                              activeTab === "before"
                                ? "text-gray-900"
                                : "text-blue-800"
                            }`}
                          >
                            {activeTab === "before" ? "inactive" : "active & trusted"}
                          </span>
                        </div>
                      </div>

                      {activeTab === "before" ? (
                        <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shrink-0">
                          <EyeOff size={16} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1A73E8] flex items-center justify-center shrink-0">
                          <TrendingUp size={16} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone Bottom Footer Note */}
                  <div className="pt-2 text-center border-t border-gray-200/60">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-gray-400">
                      {activeTab === "before"
                        ? "Result: Potential clients click away"
                        : "Result: High-intent inbound enquiries"}
                    </span>
                  </div>
                </div>

                {/* Floating Yellow Checkmark Badge from Poster */}
                <div className="absolute -bottom-5 -right-5 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#FEB005] border-4 border-white shadow-xl flex items-center justify-center z-30 transition-transform duration-300 hover:scale-110">
                  <Check size={28} className="text-[#0B1736] stroke-[3.5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Campaign Poster */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
            <div className="relative w-full aspect-[819/1024] rounded-2xl overflow-hidden">
              <Image
                src="/vyoma-poster.jpg"
                alt="Vyoma Media Campaign Poster: Your customer just Googled you. What did they find?"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-xs font-mono font-bold text-[#0B1736] uppercase tracking-wider">
                Official Vyoma Media Campaign Poster
              </p>
              <p className="text-[11px] font-sans text-gray-500 mt-0.5">
                Be found · Be trusted · Be chosen · Hyderabad, India
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
