"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DigitalVisualizer({ activeIndex }: { activeIndex: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Reset all elements first
      gsap.set(".ui-block", { opacity: 0.1, y: 0, scale: 1, rotation: 0, borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.05)" });
      gsap.set(".code-line", { opacity: 0, width: "0%" });
      gsap.set(".code-editor", { opacity: 0, scale: 0.95 });
      gsap.set(".cta-ring", { scale: 0.5, opacity: 0 });

      const tl = gsap.timeline();

      if (activeIndex === 0) {
        // State 0: UI/UX Wireframe Assembly
        tl.to(".ui-block", { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "back.out(1.5)" });
      } 
      else if (activeIndex === 1) {
        // State 1: Custom Development (Code Lines typing in an IDE box)
        tl.to(".ui-block", { opacity: 0.05, duration: 0.3 })
          .to(".code-editor", { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" })
          .to(".code-line", { opacity: 1, width: "100%", stagger: 0.1, duration: 0.8, ease: "power2.out" });
      } 
      else if (activeIndex === 2) {
        // State 2: Creative Animation (Blocks bouncing & spinning)
        tl.to(".ui-block", { opacity: 0.8, duration: 0.3 })
          .to(".ui-block.animate-target", { 
            y: -20, 
            scale: 1.1, 
            rotation: () => gsap.utils.random(-10, 10),
            stagger: 0.1, 
            duration: 0.6, 
            ease: "elastic.out(1, 0.3)" 
          });
      } 
      else if (activeIndex === 3) {
        // State 3: Conversion Optimization (CTA Pulsing)
        tl.to(".ui-block:not(.cta)", { opacity: 0.2, duration: 0.4 })
          .to(".cta", { borderColor: "#ff5722", backgroundColor: "rgba(255,87,34,0.2)", scale: 1.1, duration: 0.4, ease: "back.out(2)" })
          .to(".cta-ring", { scale: 2, opacity: 0, duration: 1.5, repeat: -1, ease: "power2.out" }, "-=0.4");
      }
    }, containerRef);
    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="w-full h-full bg-charcoal flex items-center justify-center relative p-8">
      
      {/* Code Editor (Active in State 1) */}
      <div className="code-editor absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="w-64 bg-[#1e1e1e] border border-ivory/20 rounded-lg shadow-2xl overflow-hidden flex flex-col">
          <div className="h-6 bg-ivory/10 flex items-center px-3 gap-1.5 border-b border-ivory/10">
            <div className="w-2 h-2 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
          </div>
          <div className="p-4 flex flex-col gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={`code-${i}`} className="w-full flex gap-2">
                <span className="text-[8px] font-mono text-ivory/30">{i + 1}</span>
                <div className="code-line h-1.5 bg-vermilion rounded mt-1" style={{ maxWidth: `${Math.random() * 60 + 30}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wireframe UI */}
      <div className="w-full max-w-sm aspect-[3/4] border border-ivory/20 rounded-xl p-4 flex flex-col gap-4 relative z-10 backdrop-blur-sm bg-charcoal/50">
        
        <div className="ui-block w-full h-12 bg-ivory/5 border border-ivory/10 rounded-lg flex items-center px-4 justify-between">
          <div className="w-16 h-3 bg-ivory/20 rounded" />
          <div className="w-8 h-3 bg-ivory/20 rounded" />
        </div>
        
        <div className="ui-block animate-target w-full h-32 bg-ivory/5 border border-ivory/10 rounded-lg flex items-center justify-center">
           <div className="w-12 h-12 rounded-full border border-ivory/20" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="ui-block animate-target w-full h-24 bg-ivory/5 border border-ivory/10 rounded-lg p-3">
             <div className="w-full h-2 bg-ivory/20 rounded mb-2" />
             <div className="w-2/3 h-2 bg-ivory/20 rounded" />
          </div>
          <div className="ui-block animate-target w-full h-24 bg-ivory/5 border border-ivory/10 rounded-lg p-3">
             <div className="w-full h-2 bg-ivory/20 rounded mb-2" />
             <div className="w-3/4 h-2 bg-ivory/20 rounded" />
          </div>
        </div>

        {/* CTA Area */}
        <div className="mt-auto flex justify-between items-center relative">
          <div className="ui-block w-1/2 h-4 bg-ivory/10 rounded" />
          
          <div className="relative">
            <div className="cta-ring absolute inset-0 border-2 border-vermilion rounded-lg pointer-events-none" />
            <div className="ui-block cta w-24 h-10 bg-ivory/10 border border-ivory/20 rounded-lg flex items-center justify-center">
              <div className="w-12 h-2 bg-ivory/40 rounded" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
