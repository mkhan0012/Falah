"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import BuildSystemOverlay from "@/components/interactive/BuildSystemOverlay";

gsap.registerPlugin(ScrollTrigger);

const systemNodes = [
  { id: "brand", label: "BRAND", desc: "The core identity, values, and visual language." },
  { id: "positioning", label: "POSITIONING", desc: "How you are perceived in the market." },
  { 
    id: "website", 
    label: "WEBSITE", 
    desc: "The central digital hub and conversion engine.",
    subSystem: ["EXPERIENCE", "TRUST", "ACTION", "CONVERSION"]
  },
  { 
    id: "seo", 
    label: "SEO", 
    desc: "Capturing organic intent and building authority.",
    subSystem: ["SEARCH", "INTENT", "CONTENT", "AUTHORITY", "LEADS"]
  },
  { id: "content", label: "CONTENT", desc: "Educational and persuasive communication." },
  { 
    id: "social", 
    label: "SOCIAL", 
    desc: "Distribution and community engagement.",
    subSystem: ["CONTENT", "DISTRIBUTION", "COMMUNITY", "AUTHORITY"]
  },
  { id: "personal", label: "PERSONAL BRAND", desc: "Founder authority and thought leadership." },
  { id: "growth", label: "GROWTH", desc: "Scaling systems and optimizing conversions." },
];

export default function DigitalPresence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const subSystemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [expandedNode, setExpandedNode] = useState<number | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // Initial Scroll Animation
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

  // Handle Expansion Animation with SVG Lines
  useEffect(() => {
    if (expandedNode === null) return;
    
    const container = subSystemRefs.current[expandedNode];
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.sub-item');
      const lines = gsap.utils.toArray('.svg-line path');

      // Reset
      gsap.set(items, { opacity: 0, x: -20 });
      gsap.set(lines, { strokeDasharray: 100, strokeDashoffset: 100 });

      const tl = gsap.timeline();
      
      items.forEach((item: any, i) => {
        tl.to(item, { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }, i * 0.2);
        if (lines[i]) {
          tl.to(lines[i] as any, { strokeDashoffset: 0, duration: 0.4, ease: "none" }, i * 0.2 + 0.1);
        }
      });
    }, container);

    return () => ctx.revert();
  }, [expandedNode]);

  const handleNodeClick = (index: number) => {
    if (expandedNode === index) {
      setExpandedNode(null);
    } else {
      setExpandedNode(index);
      setActiveNode(index);
    }
  };

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-charcoal text-ivory relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-[5vw]">
        <div className="text-center max-w-4xl mx-auto mb-24 md:mb-40">
          <h2 className="text-5xl md:text-[6vw] font-primary font-bold leading-[0.9] tracking-tight mb-8">
            ONE PARTNER.<br />YOUR ENTIRE DIGITAL PRESENCE.
          </h2>
          <p className="text-sm md:text-base font-mono tracking-widest uppercase text-vermilion">
            THE FALAH SYSTEM
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 left-[23px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-slate/30" />
          <div ref={lineRef} className="absolute top-0 bottom-0 left-[23px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-vermilion" />

          {/* Nodes */}
          <div className="flex flex-col gap-16 md:gap-24">
            {systemNodes.map((node, i) => {
              const isLeft = i % 2 === 0;
              const isExpanded = expandedNode === i;
              const isFocused = expandedNode !== null && expandedNode !== i;
              
              return (
                <div 
                  key={node.id} 
                  ref={el => { nodesRef.current[i] = el; }}
                  className={clsx(
                    "flex flex-col md:flex-row md:items-start gap-8 md:gap-0 relative z-10 transition-all duration-500",
                    isLeft ? "md:flex-row-reverse" : "",
                    isFocused ? "opacity-30 blur-[2px]" : "opacity-100"
                  )}
                  onMouseEnter={() => { if (expandedNode === null) setActiveNode(i); }}
                  onMouseLeave={() => { if (expandedNode === null) setActiveNode(null); }}
                >
                  {/* Desc (Desktop) */}
                  <div className={clsx(
                    "hidden md:block flex-1 mt-2",
                    isLeft ? "text-left pl-12" : "text-right pr-12"
                  )}>
                    <p className={clsx(
                      "text-sm font-mono transition-all duration-300",
                      activeNode === i || isExpanded ? "opacity-100 translate-y-0 text-ivory" : "opacity-0 translate-y-4 text-ivory/60"
                    )}>
                      {node.desc}
                    </p>
                    
                    {/* Interactive Click Prompt (Desktop) */}
                    {node.subSystem && !isExpanded && (
                      <p className={clsx(
                        "text-[10px] font-mono text-vermilion uppercase tracking-widest mt-4 transition-all duration-300 cursor-pointer hover:text-ivory",
                        activeNode === i ? "opacity-100" : "opacity-0"
                      )} onClick={() => handleNodeClick(i)}>
                        [ Click to explore system ]
                      </p>
                    )}
                  </div>

                  {/* Indicator */}
                  <div 
                    className={clsx(
                      "node-indicator w-12 h-12 rounded-full border bg-charcoal flex items-center justify-center shrink-0 transition-colors duration-500 group cursor-pointer z-10 relative",
                      isExpanded ? "border-vermilion shadow-[0_0_30px_rgba(230,83,47,0.3)]" : "border-ivory/20 hover:border-vermilion"
                    )}
                    onClick={() => handleNodeClick(i)}
                  >
                    <div className={clsx(
                      "w-3 h-3 rounded-full transition-all duration-500",
                      activeNode === i || isExpanded ? "bg-vermilion scale-125" : "bg-ivory/40 group-hover:bg-vermilion"
                    )} />
                  </div>

                  {/* Label (Desktop) / Label + Desc (Mobile) */}
                  <div className={clsx(
                    "node-text flex-1 mt-1",
                    isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  )}>
                    <h3 
                      className={clsx(
                        "text-3xl md:text-5xl font-primary font-bold tracking-tight transition-all duration-500 cursor-pointer inline-block",
                        activeNode === i || isExpanded ? "text-vermilion translate-x-2" : "text-ivory hover:text-vermilion/70"
                      )}
                      onClick={() => handleNodeClick(i)}
                    >
                      {node.label}
                    </h3>
                    
                    <p className="md:hidden text-xs font-mono text-ivory/60 mt-2">
                      {node.desc}
                    </p>

                    {/* Interactive Click Prompt (Mobile) */}
                    {node.subSystem && !isExpanded && (
                      <p className="md:hidden text-[10px] font-mono text-vermilion uppercase tracking-widest mt-4 cursor-pointer" onClick={() => handleNodeClick(i)}>
                        [ Click to explore system ]
                      </p>
                    )}

                    {/* Subsystem Expansion (GSAP Animated with SVGs) */}
                    <div 
                      ref={el => { subSystemRefs.current[i] = el; }}
                      className={clsx(
                        "grid transition-all duration-500 ease-in-out origin-top",
                        isExpanded ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0 mt-0"
                      )}
                    >
                      <div className={clsx(
                        "overflow-hidden flex flex-col gap-2",
                        isLeft ? "md:items-end" : "md:items-start"
                      )}>
                        
                        {/* We use a vertical interconnected path approach */}
                        {node.subSystem?.map((sub, idx) => (
                          <div key={sub} className={clsx(
                            "sub-item flex items-center gap-4 relative",
                            isLeft ? "md:flex-row-reverse" : "md:flex-row"
                          )}>
                            
                            {/* SVG Connection Node */}
                            <div className="relative flex items-center justify-center w-6 h-12 shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-vermilion z-10" />
                              {idx !== (node.subSystem?.length || 0) - 1 && (
                                <svg className="svg-line absolute top-6 left-1/2 -translate-x-1/2 w-[2px] h-8 text-vermilion opacity-50" viewBox="0 0 2 32" preserveAspectRatio="none">
                                  <path d="M1,0 L1,32" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                              )}
                            </div>
                            
                            {/* System Text */}
                            <span className="text-sm md:text-base font-mono font-bold text-ivory tracking-widest uppercase py-2">
                              {sub}
                            </span>
                            
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-32 flex justify-center relative z-20">
            <button 
              onClick={() => setIsOverlayOpen(true)}
              className="inline-flex items-center gap-2 border border-ivory px-8 py-5 text-sm font-mono font-bold uppercase text-ivory hover:bg-ivory hover:text-charcoal transition-colors group tracking-wide"
            >
              BUILD YOUR DIGITAL PRESENCE <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      <BuildSystemOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
    </section>
  );
}