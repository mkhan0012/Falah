"use client";

import React, { useRef } from "react";

export interface GrowthBentoCardProps {
  index: string;
  pillarLabel?: string;
  title: string;
  subtitle: string;
  tags: string[];
  children: React.ReactNode;
  colSpan?: string;
  actionHref?: string;
}

export function GrowthBentoCard({
  index,
  pillarLabel = "SYSTEM PILLAR",
  title,
  subtitle,
  tags,
  children,
  colSpan = "col-span-12 lg:col-span-6",
}: GrowthBentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`${colSpan} group relative overflow-hidden rounded-3xl bg-[#0E0F14] border border-white/[0.07] p-7 md:p-10 transition-all duration-500 hover:border-[#D4FF00]/40 hover:bg-[#13151C] flex flex-col justify-between`}
    >
      {/* Spotlight Hover Glow Layer */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(212, 255, 0, 0.14), transparent 45%)"
        }}
      />

      {/* Ambient Radial Electric Violet Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#6E3AFF]/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

      {/* Top Meta Bar */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-[11px] sm:text-xs tracking-widest text-[#D4FF00] bg-[#D4FF00]/10 border border-[#D4FF00]/20 px-3 py-1 rounded-full uppercase">
            {`${index} // ${pillarLabel}`}
          </span>
          <span className="text-white/40 group-hover:text-[#D4FF00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform font-mono text-sm">
            ↗
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-[#F5F5F0] mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed max-w-xl">
          {subtitle}
        </p>
      </div>

      {/* Embedded QAID-Style Interactive Micro-UI Stage */}
      <div className="relative z-10 my-6 sm:my-8 rounded-2xl bg-[#070709]/95 border border-white/[0.08] p-4 sm:p-5 font-mono text-xs shadow-inner">
        {children}
      </div>

      {/* Bottom Capability Pills */}
      <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-[#9CA3AF] bg-white/[0.03] hover:bg-white/[0.08] hover:text-[#F5F5F0] px-3 py-1.5 rounded-lg border border-white/[0.04] transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
export default GrowthBentoCard;
