"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BrandVisualizer({ activeIndex }: { activeIndex: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Reset all elements first
      gsap.set(".shape", { x: 0, y: 0, scale: 1, rotation: 0, opacity: 0.2, borderColor: "rgba(255,255,255,0.2)", backgroundColor: "transparent" });
      gsap.set(".core", { scale: 0.5, opacity: 0.5, backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.5)" });
      gsap.set(".grid-line", { opacity: 0 });
      gsap.set(".crowd-dot", { opacity: 0, scale: 0 });
      gsap.set(".positioning-ring", { scale: 0, opacity: 0 });

      const tl = gsap.timeline();

      if (activeIndex === 0) {
        // State 0: Brand Positioning (Standing out in a crowded market)
        tl.to(".shape, .core", { opacity: 0, duration: 0.3 })
          .to(".crowd-dot", { scale: 1, opacity: 0.1, stagger: 0.05, duration: 0.5, ease: "back.out(1.5)" })
          .to(".crowd-dot.target", { scale: 1.5, opacity: 1, backgroundColor: "#ff5722", duration: 0.5, ease: "elastic.out(1, 0.3)" })
          .to(".positioning-ring", { scale: 2.5, opacity: 0, duration: 1.5, repeat: -1, ease: "power2.out" }, "-=0.2");
      } 
      else if (activeIndex === 1) {
        // State 1: Visual Identity (Shapes aligning into a logo mark)
        tl.to(".crowd-dot", { opacity: 0, scale: 0, duration: 0.3 })
          .to(".shape-1", { x: -40, y: -40, scale: 1, rotation: 45, opacity: 1, borderColor: "#ff5722", duration: 0.8, ease: "elastic.out(1, 0.5)" })
          .to(".shape-2", { x: 40, y: -40, scale: 1, rotation: -45, opacity: 1, borderColor: "#ff5722", duration: 0.8, ease: "elastic.out(1, 0.5)" }, "<")
          .to(".shape-3", { x: 0, y: 40, scale: 1.2, rotation: 0, opacity: 1, borderColor: "#ffffff", duration: 0.8, ease: "elastic.out(1, 0.5)" }, "<")
          .to(".core", { scale: 1, backgroundColor: "#ff5722", borderColor: "transparent", opacity: 1, duration: 0.5 }, "-=0.4");
      } 
      else if (activeIndex === 2) {
        // State 2: Tone of Voice (Shapes pulsing like soundwaves/speech)
        tl.to(".crowd-dot", { opacity: 0, duration: 0.2 })
          .to(".core", { scale: 1.2, backgroundColor: "#ff5722", opacity: 1, duration: 0.3 })
          .to(".shape", { x: 0, y: 0, scale: 1, rotation: 0, borderColor: "#ff5722", opacity: 1, duration: 0.3 })
          .to(".shape-1", { scale: 1.5, opacity: 0, duration: 1, repeat: -1 }, "+=0")
          .to(".shape-2", { scale: 2.0, opacity: 0, duration: 1, repeat: -1, delay: 0.2 }, "<")
          .to(".shape-3", { scale: 2.5, opacity: 0, duration: 1, repeat: -1, delay: 0.4 }, "<");
      } 
      else if (activeIndex === 3) {
        // State 3: Brand Guidelines (Rigid Grid System)
        tl.to(".crowd-dot", { opacity: 0, duration: 0.2 })
          .to(".shape", { x: 0, y: 0, scale: 1, rotation: 0, opacity: 0.3, duration: 0.5 })
          .to(".core", { scale: 1, opacity: 0.8, duration: 0.5 }, "<")
          .to(".grid-line", { opacity: 0.3, stagger: 0.1, duration: 0.5, ease: "power2.out" });
      }
    }, containerRef);
    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="w-full h-full bg-charcoal flex items-center justify-center relative overflow-hidden">
      
      {/* Grid Lines for State 3 */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-evenly">
        {[...Array(5)].map((_, i) => <div key={`h-${i}`} className="grid-line w-full h-[1px] bg-ivory" />)}
      </div>
      <div className="absolute inset-0 pointer-events-none flex justify-evenly">
        {[...Array(5)].map((_, i) => <div key={`v-${i}`} className="grid-line w-[1px] h-full bg-ivory" />)}
      </div>

      {/* Positioning Crowd for State 0 */}
      <div className="absolute inset-0 pointer-events-none flex flex-wrap items-center justify-center gap-6 p-8">
        {[...Array(35)].map((_, i) => (
          <div key={`dot-${i}`} className={`crowd-dot w-4 h-4 rounded-full bg-ivory ${i === 17 ? 'target relative' : ''}`}>
            {i === 17 && <div className="positioning-ring absolute inset-0 rounded-full border-2 border-vermilion" />}
          </div>
        ))}
      </div>

      <div className="relative w-48 h-48 flex items-center justify-center pointer-events-none">
        {/* Core Identity */}
        <div className="core absolute w-16 h-16 border-2 border-ivory rounded-full z-10" />
        
        {/* Supporting Elements */}
        <div className="shape shape-1 absolute w-24 h-24 border-2 border-ivory rounded-tl-full rounded-br-full" />
        <div className="shape shape-2 absolute w-24 h-24 border-2 border-ivory rounded-tr-full rounded-bl-full" />
        <div className="shape shape-3 absolute w-32 h-32 border border-ivory rounded-full" />
      </div>
    </div>
  );
}
