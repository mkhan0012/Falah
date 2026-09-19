"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const methodSteps = [
  { id: "01", title: "DISCOVER", desc: "Understanding your business, market position, and core audience." },
  { id: "02", title: "DEFINE", desc: "Crafting the strategy, tone of voice, and visual direction." },
  { id: "03", title: "DESIGN", desc: "Building the premium visual identity and digital interfaces." },
  { id: "04", title: "DEPLOY", desc: "Engineering the platform with scalable, performant technology." },
  { id: "05", title: "GROW", desc: "Executing SEO, content, and conversion optimization systems." },
];

export default function FalahMethod() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current || !pinRef.current) return;

    // We only pin and horizontal scroll on desktop
    const isDesktop = window.innerWidth >= 768;
    
    if (isDesktop) {
      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray(".method-step");
        
        ScrollTrigger.create({
          trigger: pinRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (sections.length - 1));
            setActiveStep(index);
          },
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={containerRef}>
      <div ref={pinRef} className="min-h-screen md:h-screen bg-charcoal text-ivory flex flex-col justify-center overflow-hidden py-24 md:py-0">
        <div className="container mx-auto px-6 md:px-[5vw]">
        
          <div className="mb-16 md:mb-20">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-ivory/60 mb-4">THE METHOD</p>
            <h2 className="text-4xl md:text-[6vw] font-primary font-bold tracking-tight">HOW WE BUILD.</h2>
          </div>

          {/* Desktop Version: Horizontal scrub */}
          <div className="hidden md:block relative">
            <div className="absolute top-8 left-0 right-0 h-[1px] bg-ivory/20" />
            <div 
              className="absolute top-8 left-0 h-[1px] bg-vermilion transition-all duration-300"
              style={{ width: `${(activeStep / (methodSteps.length - 1)) * 100}%` }}
            />

            <div className="flex justify-between" ref={scrollRef}>
              {methodSteps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={clsx(
                    "method-step flex flex-col items-start w-1/5 pt-6 relative transition-opacity duration-500",
                    activeStep === index ? "opacity-100" : "opacity-30"
                  )}
                >
                  <div className={clsx(
                    "absolute top-[-4px] left-0 w-2 h-2 rounded-full transition-colors duration-300",
                    activeStep >= index ? "bg-vermilion" : "bg-ivory/40"
                  )} />
                  <span className="text-xs font-mono text-ivory/60 mb-4">{step.id}</span>
                  <h3 className="text-2xl md:text-3xl font-primary font-bold mb-4">{step.title}</h3>
                  <p className="text-sm font-primary text-ivory/60 max-w-[80%] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Version: Vertical Stack */}
          <div className="md:hidden flex flex-col gap-12 border-l border-ivory/20 ml-2">
            {methodSteps.map((step) => (
              <div key={step.id} className="relative pl-8">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-charcoal border-2 border-vermilion" />
                <span className="text-[10px] font-mono text-vermilion mb-2 block">{step.id}</span>
                <h3 className="text-2xl font-primary font-bold mb-3">{step.title}</h3>
                <p className="text-sm font-primary text-ivory/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
