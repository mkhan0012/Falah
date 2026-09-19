"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import BuildSystemOverlay from "../interactive/BuildSystemOverlay";

gsap.registerPlugin(ScrollTrigger);

const systemNodes = [
  { id: "01", label: "BRAND", desc: "The foundation of how you are perceived.", subSystem: ["STRATEGY", "IDENTITY", "MESSAGING", "GUIDELINES"] },
  { id: "02", label: "POSITIONING", desc: "Defining exactly where you sit in the market." },
  { id: "03", label: "WEBSITE", desc: "The digital experience your customers interact with.", subSystem: ["EXPERIENCE", "TRUST", "ACTION", "CONVERSION"] },
  { id: "04", label: "SEO", desc: "Capturing high-intent organic traffic.", subSystem: ["SEARCH", "INTENT", "CONTENT", "AUTHORITY", "LEADS"] },
  { id: "05", label: "CONTENT", desc: "Educational and persuasive digital assets." },
  { id: "06", label: "SOCIAL", desc: "Distribution and community engagement.", subSystem: ["CONTENT", "DISTRIBUTION", "COMMUNITY", "AUTHORITY"] },
  { id: "07", label: "LEADS", desc: "Conversion optimization and funnel architecture." },
  { id: "08", label: "GROWTH", desc: "Measurable business outcomes and scaling." },
  { id: "09", label: "PERSONAL BRANDING", desc: "Building founder authority.", subSystem: ["POSITION", "PROFILE", "CONTENT", "AUTHORITY"] }
];

export default function DigitalPresence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const subSystemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [expandedNode, setExpandedNode] = useState<number | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom bottom",
            scrub: true,
          }
        }
      );

      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        gsap.fromTo(
          node.querySelector(".node-indicator"),
          { scale: 0.5, opacity: 0.2 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: node,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );
        gsap.fromTo(
          node.querySelector(".node-text"),
          { x: i % 2 === 0 ? 50 : -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: node,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleNodeClick = (index: number) => {
    if (expandedNode === index) {
      setExpandedNode(null);
    } else {
      setExpandedNode(index);
      const ctx = gsap.context(() => {
        const target = subSystemRefs.current[index];
        if (target) {
          gsap.fromTo(
            target.querySelectorAll(".sub-item"),
            { x: index % 2 === 0 ? 20 : -20, opacity: 0 },
            { x: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "back.out(1.5)" }
          );
          gsap.fromTo(
            target.querySelectorAll(".svg-line path"),
            { strokeDashoffset: 32, strokeDasharray: 32 },
            { strokeDashoffset: 0, duration: 0.3, stagger: 0.1, delay: 0.1, ease: "power1.inOut" }
          );
        }
      });
      return () => ctx.revert();
    }
  };

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-charcoal text-ivory relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-32">
          <p className="text-sm md:text-base font-mono tracking-widest uppercase text-vermilion mb-4">
            THE FALAH SYSTEM
          </p>
          <h2 className="text-4xl md:text-[5vw] font-primary font-bold leading-[0.9] tracking-tight mb-12">
            ONE PARTNER.<br />YOUR ENTIRE DIGITAL PRESENCE.
          </h2>
          
          {/* CRUCIAL DISCLAIMER */}
          <div className="inline-block border border-vermilion bg-vermilion/5 px-6 py-4 md:px-8 md:py-6 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-sm md:text-base font-mono font-bold tracking-wide leading-relaxed text-ivory/90 uppercase text-center">
              YOU DON'T ALWAYS NEED EVERYTHING.
              <br className="hidden md:block" />
              WE IDENTIFY WHICH PARTS OF THE SYSTEM YOUR BUSINESS ACTUALLY NEEDS.
            </p>
          </div>
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

                    {/* Subsystem Expansion */}
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
                        
                        {node.subSystem?.map((sub, idx) => (
                          <div key={sub} className={clsx(
                            "sub-item flex items-center gap-4 relative",
                            isLeft ? "md:flex-row-reverse" : "md:flex-row"
                          )}>
                            
                            <div className="relative flex items-center justify-center w-6 h-12 shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-vermilion z-10" />
                              {idx !== (node.subSystem?.length || 0) - 1 && (
                                <svg className="svg-line absolute top-6 left-1/2 -translate-x-1/2 w-[2px] h-8 text-vermilion opacity-50" viewBox="0 0 2 32" preserveAspectRatio="none">
                                  <path d="M1,0 L1,32" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                              )}
                            </div>
                            
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
