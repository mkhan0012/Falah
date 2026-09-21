"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const capabilities = [
  "BRAND STRATEGY", "UI/UX DESIGN", "TECHNICAL SEO", 
  "CONVERSION OPTIMIZATION", "CONTENT ARCHITECTURE", 
  "PERFORMANCE MARKETING", "WEB DEVELOPMENT"
];

export default function CapabilitiesTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tickerRef.current) return;
    const ctx = gsap.context(() => {
      // Create a seamless infinite scroll
      gsap.to(tickerRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });
    }, tickerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-graphite py-12 md:py-16 border-b border-ivory/10 overflow-hidden relative flex flex-col justify-center">
      
      {/* Ticker Container */}
      <div className="flex whitespace-nowrap overflow-hidden w-full relative">
        <div 
          ref={tickerRef} 
          className="flex items-center gap-8 md:gap-16 px-4"
          style={{ width: "fit-content" }}
        >
          {/* First set */}
          {capabilities.map((item, i) => (
            <div key={`cap-1-${i}`} className="flex items-center gap-8 md:gap-16">
              <span className="text-3xl md:text-5xl font-primary font-bold text-ivory/80 uppercase tracking-tight hover:text-vermilion transition-colors cursor-default">
                {item}
              </span>
              <span className="text-vermilion text-2xl md:text-4xl">✦</span>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {capabilities.map((item, i) => (
            <div key={`cap-2-${i}`} className="flex items-center gap-8 md:gap-16">
              <span className="text-3xl md:text-5xl font-primary font-bold text-ivory/80 uppercase tracking-tight hover:text-vermilion transition-colors cursor-default">
                {item}
              </span>
              <span className="text-vermilion text-2xl md:text-4xl">✦</span>
            </div>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-graphite to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-graphite to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
}
