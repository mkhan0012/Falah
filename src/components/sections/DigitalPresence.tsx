"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const systemNodes = [
  { id: "brand", label: "BRAND", desc: "The core identity, values, and visual language." },
  { id: "positioning", label: "POSITIONING", desc: "How you are perceived in the market." },
  { id: "website", label: "WEBSITE", desc: "The central digital hub and conversion engine." },
  { id: "seo", label: "SEO", desc: "Capturing organic intent and building authority." },
  { id: "content", label: "CONTENT", desc: "Educational and persuasive communication." },
  { id: "social", label: "SOCIAL", desc: "Distribution and community engagement." },
  { id: "personal", label: "PERSONAL BRAND", desc: "Founder authority and thought leadership." },
  { id: "growth", label: "GROWTH", desc: "Scaling systems and optimizing conversions." },
];

export default function DigitalPresence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeNode, setActiveNode] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        animation: gsap.fromTo(lineRef.current, 
          { scaleY: 0 },
          { scaleY: 1, ease: "none", transformOrigin: "top" }
        ),
        scrub: true,
      });

      nodesRef.current.forEach((node) => {
        if (!node) return;
        
        const indicator = node.querySelector('.node-indicator');
        const text = node.querySelector('.node-text');

        gsap.fromTo([indicator, text], 
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: node,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-charcoal text-ivory relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-[5vw]">
        <div className="text-center max-w-4xl mx-auto mb-24 md:mb-40">
          <h2 className="text-5xl md:text-[6vw] font-primary font-bold leading-[0.9] tracking-tight mb-8">
            WE DON&apos;T JUST<br />MAKE WEBSITES.
          </h2>
          <p className="text-sm md:text-base font-mono tracking-widest uppercase text-vermilion">
            WE BUILD DIGITAL PRESENCE.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 left-[23px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-slate/30" />
          <div ref={lineRef} className="absolute top-0 bottom-0 left-[23px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-vermilion" />

          {/* Nodes */}
          <div className="flex flex-col gap-12 md:gap-20">
            {systemNodes.map((node, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div 
                  key={node.id} 
                  ref={el => { nodesRef.current[i] = el; }}
                  className={clsx(
                    "flex flex-row items-center gap-8 md:gap-0 relative z-10",
                    isLeft ? "md:flex-row-reverse" : ""
                  )}
                  onMouseEnter={() => setActiveNode(i)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Desc (Desktop) */}
                  <div className={clsx(
                    "hidden md:block flex-1",
                    isLeft ? "text-left pl-12" : "text-right pr-12"
                  )}>
                    <p className={clsx(
                      "text-sm font-mono transition-all duration-300",
                      activeNode === i ? "opacity-100 translate-y-0 text-ivory" : "opacity-0 translate-y-4 text-ivory/60"
                    )}>
                      {node.desc}
                    </p>
                  </div>

                  {/* Indicator */}
                  <div className="node-indicator w-12 h-12 rounded-full border border-ivory/20 bg-charcoal flex items-center justify-center shrink-0 transition-colors group cursor-pointer hover:border-vermilion z-10 relative">
                    <div className={clsx(
                      "w-3 h-3 rounded-full transition-colors",
                      activeNode === i ? "bg-vermilion shadow-[0_0_15px_#E6532F]" : "bg-ivory/40 group-hover:bg-vermilion"
                    )} />
                  </div>

                  {/* Label (Desktop) / Label + Desc (Mobile) */}
                  <div className={clsx(
                    "node-text flex-1",
                    isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  )}>
                    <h3 className={clsx(
                      "text-2xl md:text-4xl font-primary font-bold tracking-tight transition-colors",
                      activeNode === i ? "text-vermilion" : "text-ivory"
                    )}>
                      {node.label}
                    </h3>
                    <p className="md:hidden text-xs font-mono text-ivory/60 mt-2">
                      {node.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}