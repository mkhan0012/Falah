"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { id: "01", title: "BRAND" },
  { id: "02", title: "DIGITAL" },
  { id: "03", title: "VISIBILITY" },
  { id: "04", title: "GROWTH" }
];

export default function FalahGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>('.grid-block');
      
      gsap.fromTo(blocks,
        { scale: 0.95, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-ivory text-graphite border-t border-warm-grey relative">
      <div className="container mx-auto px-6 md:px-[5vw]">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-warm-grey relative">
          
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="grid-block aspect-square flex flex-col justify-between p-8 border-b border-r border-warm-grey hover:bg-white transition-colors duration-500 cursor-default group"
            >
              <div className="font-mono text-xs text-slate group-hover:text-vermilion transition-colors">
                {pillar.id}
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-primary font-bold tracking-tighter">
                {pillar.title}
              </h3>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}

