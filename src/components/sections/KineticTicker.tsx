"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const tickerItems = [
  "BRAND STRATEGY",
  "UI/UX ARCHITECTURE",
  "GENERATIVE ENGINE OPTIMIZATION (GEO)",
  "TECHNICAL SEO",
  "PERFORMANCE CREATIVE",
  "NEXT.JS WEB SYSTEMS",
];

export default function KineticTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tickerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(tickerRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 22,
        repeat: -1,
      });
    }, tickerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-[#070709] border-y border-white/[0.08] py-4 sm:py-5 overflow-hidden relative flex flex-col justify-center">
      {/* Ticker Stage */}
      <div className="flex whitespace-nowrap overflow-hidden w-full relative">
        <div
          ref={tickerRef}
          className="flex items-center gap-6 sm:gap-10 px-4"
          style={{ width: "fit-content" }}
        >
          {/* Loop 1 */}
          {tickerItems.map((item, idx) => (
            <div key={`tick-1-${idx}`} className="flex items-center gap-6 sm:gap-10">
              <span className="text-xs sm:text-sm font-mono font-medium tracking-[0.2em] text-[#9CA3AF] hover:text-[#D4FF00] transition-colors cursor-default">
                {item}
              </span>
              <span className="text-[#D4FF00] text-xs select-none">✦</span>
            </div>
          ))}

          {/* Loop 2 (seamless duplication) */}
          {tickerItems.map((item, idx) => (
            <div key={`tick-2-${idx}`} className="flex items-center gap-6 sm:gap-10">
              <span className="text-xs sm:text-sm font-mono font-medium tracking-[0.2em] text-[#9CA3AF] hover:text-[#D4FF00] transition-colors cursor-default">
                {item}
              </span>
              <span className="text-[#D4FF00] text-xs select-none">✦</span>
            </div>
          ))}
        </div>

        {/* Left & Right subtle edge masks */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#070709] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#070709] to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
}
