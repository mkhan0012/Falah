"use client";

export default function VyomaTicker() {
  const tickerItems = [
    "STRATEGY → BRAND → DIGITAL → VISIBILITY → GROWTH",
    "GROWTH YOU OWN. NOT GROWTH YOU RENT.",
    "BRANDING · WEB DESIGN · TECHNOLOGY · ORGANIC GROWTH",
    "HYDERABAD · INDIA · EST. 2025",
    "ONE CONNECTED SYSTEM. BUILT FOR LONG-TERM GROWTH.",
    "100% OWNED ASSETS",
    "GENERATIVE ENGINE OPTIMIZATION (GEO)",
    "HIGH-CONVERTING NEXT.JS ARCHITECTURE",
    "MULTI-STAKEHOLDER B2B & HEALTHCARE",
  ];

  return (
    <div className="relative border-y border-[#7899B0]/25 bg-[#F1F3F1] py-3.5 sm:py-4 overflow-hidden select-none">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F1F3F1] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F1F3F1] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-[marquee_42s_linear_infinite] hover:[animation-play-state:paused]">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 whitespace-nowrap text-xs sm:text-sm font-mono font-medium tracking-widest text-[#30383D]"
          >
            <span className="hover:text-[#172B3A] transition-colors">{item}</span>
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                index % 2 === 0 ? "bg-[#7899B0]" : "bg-[#D3A56C]"
              }`}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
