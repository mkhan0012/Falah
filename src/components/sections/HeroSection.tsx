"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import TransitionLink from "@/components/ui/TransitionLink";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const cycleWords = ["BRAND", "DIGITAL", "VISIBILITY", "GROWTH"];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cycleInterval: NodeJS.Timeout;

    const ctx = gsap.context(() => {
      // Parallax on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        if (!textRef.current || !gridRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPos = (clientX / innerWidth - 0.5) * 20; 
        const yPos = (clientY / innerHeight - 0.5) * 20;

        gsap.to(textRef.current, { x: xPos, y: yPos, duration: 1, ease: "power2.out" });
        gsap.to(gridRef.current, { x: -xPos * 0.5, y: -yPos * 0.5, duration: 1, ease: "power2.out" });
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Word cycling
      if (wordsRef.current) {
        const children = wordsRef.current.children;
        let currentIndex = 0;
        gsap.set(children, { yPercent: 100, opacity: 0 });
        gsap.set(children[0], { yPercent: 0, opacity: 1 });

        cycleInterval = setInterval(() => {
          const currentWord = children[currentIndex];
          const nextIndex = (currentIndex + 1) % children.length;
          const nextWord = children[nextIndex];

          const tl = gsap.timeline();
          tl.to(currentWord, { yPercent: -100, opacity: 0, duration: 0.6, ease: "power3.inOut" }, 0)
            .fromTo(nextWord, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, ease: "power3.inOut" }, 0.1);
          currentIndex = nextIndex;
        }, 2500);
      }

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        clearInterval(cycleInterval);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-48 md:pt-64 pb-12 overflow-hidden bg-ivory"
    >
      {/* Editorial Grid Background */}
      <div ref={gridRef} className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute left-[5vw] right-[5vw] top-0 bottom-0 border-x border-warm-grey/50 grid grid-cols-4 md:grid-cols-12 divide-x divide-warm-grey/30">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="hidden md:block h-full" />
          ))}
        </div>
        <div className="absolute top-[30vh] left-[5vw] right-[5vw] h-[1px] bg-warm-grey/50" />
        <div className="absolute bottom-[20vh] left-[5vw] right-[5vw] h-[1px] bg-warm-grey/50" />
        
        {/* Animated Grid Numbers */}
        <div className="absolute top-[30vh] right-[6vw] -mt-6 text-[10px] font-mono text-slate flex flex-col items-end">
          <div className="flex gap-2 mb-1">
            <span className="text-vermilion">SYSTEM_01</span>
            <span>ACTIVE</span>
          </div>
          <div ref={wordsRef} className="relative h-4 overflow-hidden w-24 text-right">
            {cycleWords.map((word, i) => (
              <div key={i} className="absolute inset-0 right-0">{word}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-[5vw] relative z-10 mt-12 md:mt-24" ref={textRef}>
        <div className="max-w-6xl">
          <p className="text-[10px] md:text-xs font-mono tracking-[0.2em] font-medium text-slate mb-8 uppercase">
            HYDERABAD / INDIA
          </p>
          
          <h1 className="text-[10vw] md:text-[8.5vw] leading-[0.9] font-primary font-bold tracking-[-0.03em] text-graphite mb-12">
            WE BUILD<br />
            BRANDS<br />
            THAT MOVE<span className="text-vermilion">.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mt-16 md:mt-24 border-t border-warm-grey pt-8 mb-16">
            <p className="text-lg md:text-2xl text-slate max-w-lg leading-relaxed font-primary">
              Brand strategy, websites, SEO, content and digital marketing — built around what your business actually needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shrink-0">
              <MagneticButton>
                <TransitionLink 
                  href="/contact"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-graphite bg-transparent text-graphite px-6 py-4 font-mono text-sm font-bold hover:bg-graphite hover:text-ivory transition-colors group"
                >
                  START A PROJECT 
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </TransitionLink>
              </MagneticButton>
              <TransitionLink 
                href="/work"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 text-slate hover:text-vermilion font-mono text-sm font-bold transition-colors group"
              >
                EXPLORE OUR WORK
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </TransitionLink>
            </div>
          </div>
          
          {/* Client-Oriented Selector */}
          <div className="pt-8 md:pt-16 border-t border-warm-grey">
            <h2 className="text-sm font-mono tracking-widest text-slate mb-6 uppercase font-bold">I NEED A...</h2>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <TransitionLink href="/services/branding" className="text-lg md:text-xl font-primary text-graphite hover:text-vermilion border-b border-graphite hover:border-vermilion transition-colors pb-1">NEW BRAND</TransitionLink>
              <TransitionLink href="/services/web-development" className="text-lg md:text-xl font-primary text-graphite hover:text-vermilion border-b border-graphite hover:border-vermilion transition-colors pb-1">WEBSITE</TransitionLink>
              <TransitionLink href="/services/seo" className="text-lg md:text-xl font-primary text-graphite hover:text-vermilion border-b border-graphite hover:border-vermilion transition-colors pb-1">MORE VISIBILITY</TransitionLink>
              <TransitionLink href="/services/digital-marketing" className="text-lg md:text-xl font-primary text-graphite hover:text-vermilion border-b border-graphite hover:border-vermilion transition-colors pb-1">MORE LEADS</TransitionLink>
              <TransitionLink href="/services" className="text-lg md:text-xl font-primary text-vermilion hover:text-graphite border-b border-vermilion hover:border-graphite transition-colors pb-1">COMPLETE DIGITAL PRESENCE</TransitionLink>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
