"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeMetrics?: string;
  afterMetrics?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "LEGACY SYSTEM (BEFORE)",
  afterLabel = "VYOMA ARCHITECTURE (AFTER)",
  beforeMetrics = "6.4s Load · Unstructured · 0 Inbound RFPs",
  afterMetrics = "0.38s Load (100/100) · Direct WhatsApp RFQs · #1 SERP",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-3xl border border-[#7899B0]/30 shadow-2xl bg-[#172B3A] group cursor-ew-resize ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background layer - 100% width) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
          priority
        />
        {/* Subtle dark gradient overlay to keep labels readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/80 via-transparent to-black/30 pointer-events-none" />

        {/* After Badge (Top Right) */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-[#172B3A]/90 border border-[#7899B0]/40 backdrop-blur-md text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#D3A56C] uppercase shadow-lg flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D3A56C] animate-pulse" />
            <span>{afterLabel}</span>
          </div>
        </div>

        {/* After Metrics (Bottom Right) */}
        <div className="absolute bottom-4 right-4 z-10 pointer-events-none hidden sm:block">
          <div className="px-3 py-1 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md text-[10px] font-mono text-white tracking-wide">
            {afterMetrics}
          </div>
        </div>
      </div>

      {/* Before Image (Foreground layer - clipped by sliderPosition) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="relative aspect-[16/10] w-full h-full">
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top filter grayscale contrast-125 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Before Badge (Top Left) */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <div className="px-3.5 py-1.5 rounded-full bg-black/85 border border-white/20 backdrop-blur-md text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#DCE6EB] uppercase shadow-lg">
              {beforeLabel}
            </div>
          </div>

          {/* Before Metrics (Bottom Left) */}
          <div className="absolute bottom-4 left-4 z-10 pointer-events-none hidden sm:block">
            <div className="px-3 py-1 rounded-xl bg-black/60 border border-white/15 backdrop-blur-md text-[10px] font-mono text-[#7899B0] tracking-wide">
              {beforeMetrics}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Divider Line with Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#172B3A] border-2 border-white shadow-2xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing text-white transition-transform group-hover:scale-110">
          <svg
            className="w-4 h-4 text-[#D3A56C]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M8 9l-3 3 3 3m8-6l3 3-3 3"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Hint on Mobile */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-[9px] font-mono text-white/70 uppercase tracking-widest sm:hidden bg-black/60 px-2 py-0.5 rounded-full">
        ◄ DRAG TO COMPARE ►
      </div>
    </div>
  );
}
