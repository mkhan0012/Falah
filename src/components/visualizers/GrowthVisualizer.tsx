"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GrowthVisualizer({ activeIndex }: { activeIndex: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const obj = { val: 0 };
    
    const ctx = gsap.context(() => {
      // Reset
      gsap.set(".chart-bar", { scaleY: 0.1, opacity: 0.2 });
      gsap.set(".chart-line", { strokeDashoffset: 200, opacity: 0 });
      gsap.set(".chart-dot", { scale: 0, opacity: 0 });
      gsap.set(".growth-number", { opacity: 0, y: 10 });
      gsap.set(".funnel-group", { opacity: 0, scale: 0.8 });
      gsap.set(".funnel-dot", { y: -50, opacity: 0, scale: 1 });
      gsap.set(".funnel-coin", { y: 0, opacity: 0, scale: 0.5 });
      gsap.set(".loop-arrow", { rotation: 0, opacity: 0, scale: 0.5 });

      const tl = gsap.timeline();

      if (activeIndex === 0 || activeIndex === 2) {
        // State 0/2: Analytics & Performance
        tl.to(".chart-bar", { scaleY: (i) => 0.3 + (i * 0.15), opacity: 1, stagger: 0.1, duration: 0.6, ease: "back.out(1.5)" })
          .to(".chart-line", { strokeDashoffset: 0, opacity: 1, duration: 1, ease: "power2.inOut" }, "-=0.4")
          .to(".chart-dot", { scale: 1, opacity: 1, stagger: 0.1, duration: 0.4, ease: "back.out(2)" }, "-=0.6")
          .to(".growth-number", { opacity: 1, y: 0, duration: 0.5 }, "-=0.5");
          
        gsap.to(obj, {
          val: activeIndex === 0 ? 320 : 84500,
          duration: 1.5,
          ease: "power3.out",
          onUpdate: () => {
            if (numberRef.current) {
              numberRef.current.innerText = (activeIndex === 0 ? "$" : "+") + Math.round(obj.val).toLocaleString();
            }
          }
        });
      } 
      else if (activeIndex === 1) {
        // State 1: Lead Gen (Funnel dropping dots turning to coins exactly out of the bottom)
        tl.to(".funnel-group", { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" })
          .to(".funnel-dot", { y: 60, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.in" })
          .to(".funnel-dot", { opacity: 0, duration: 0.1, stagger: 0.2 }, "-=0.1")
          .to(".funnel-coin", { y: 120, opacity: 1, scale: 1, stagger: 0.2, duration: 0.6, ease: "bounce.out" }, "-=1");
      } 
      else if (activeIndex === 3) {
        // State 3: Lifecycle / Retention (Looping arrows)
        tl.to(".loop-arrow", { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" })
          .to(".loop-arrow", { rotation: 360, duration: 4, repeat: -1, ease: "linear" });
      }
    }, containerRef);
    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="w-full h-full bg-charcoal flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      {/* Funnel UI (State 1) - Positioned Absolutely Center */}
      <div className="funnel-group absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-20">
        
        {/* Falling Dots (Leads) */}
        <div className="absolute top-[20%] flex gap-6 z-10">
          <div className="funnel-dot w-4 h-4 bg-ivory rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          <div className="funnel-dot w-4 h-4 bg-ivory rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          <div className="funnel-dot w-4 h-4 bg-ivory rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        </div>

        {/* Funnel SVG */}
        <div className="relative z-20 -mt-12">
          <svg className="w-40 h-32 text-ivory/20" viewBox="0 0 100 100" fill="currentColor">
            <polygon points="10,10 90,10 60,70 60,100 40,100 40,70" />
            <path d="M10,10 L90,10 L60,70 L60,100 L40,100 L40,70 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          </svg>
        </div>

        {/* Dropping Coins (Conversions) */}
        <div className="absolute top-[50%] flex gap-4 z-10 mt-8">
          <div className="funnel-coin w-6 h-6 bg-vermilion rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-lg">$</div>
          <div className="funnel-coin w-6 h-6 bg-vermilion rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-lg">$</div>
          <div className="funnel-coin w-6 h-6 bg-vermilion rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-lg">$</div>
        </div>

      </div>

      {/* Loop UI (State 3) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
        <svg className="loop-arrow w-40 h-40 text-vermilion" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
          <path d="M4 12v-3a8 8 0 0 1 16 0v3" />
          <path d="M16 12l4 4 4-4" />
          <path d="M20 12v3a8 8 0 0 1-16 0v-3" />
          <path d="M8 12l-4-4-4 4" />
        </svg>
      </div>

      {/* Chart UI (State 0, 2) */}
      <div className="text-center z-10">
        <div ref={numberRef} className="growth-number opacity-0 translate-y-3 text-4xl md:text-5xl font-mono font-bold text-vermilion tracking-tighter">
          0
        </div>
      </div>
      <div className="w-full max-w-sm h-48 relative border-b border-l border-ivory/20 flex items-end justify-between px-4 pb-0 z-10">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path className="chart-line" d="M 5 80 Q 20 70, 30 50 T 60 30 T 95 10" fill="none" stroke="#ff5722" strokeWidth="3" strokeDasharray="200" strokeDashoffset="200" opacity="0" />
          <circle className="chart-dot" cx="5" cy="80" r="3" fill="#ff5722" opacity="0" transform-origin="center" />
          <circle className="chart-dot" cx="30" cy="50" r="3" fill="#ff5722" opacity="0" transform-origin="center" />
          <circle className="chart-dot" cx="60" cy="30" r="3" fill="#ff5722" opacity="0" transform-origin="center" />
          <circle className="chart-dot" cx="95" cy="10" r="3" fill="#ff5722" opacity="0" transform-origin="center" />
        </svg>
        {[1,2,3,4,5].map((i) => (
          <div key={i} className="chart-bar w-10 bg-ivory/10 origin-bottom opacity-20" style={{ height: '100%', transform: 'scaleY(0.1)' }} />
        ))}
      </div>
      
    </div>
  );
}
