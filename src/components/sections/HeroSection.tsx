"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TransitionLink from "@/components/ui/TransitionLink";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const cycleWords = ["BRAND", "DIGITAL", "VISIBILITY", "GROWTH"];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handle screen size for video
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        if (!textRef.current || isMobile) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPos = (clientX / innerWidth - 0.5) * 15; 
        const yPos = (clientY / innerHeight - 0.5) * 15;

        gsap.to(textRef.current, { x: xPos, y: yPos, duration: 1, ease: "power2.out" });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-end pt-32 pb-8 md:pb-16 overflow-hidden bg-charcoal"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/showreel-mobile.mp4"
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover scale-[1.05] block md:hidden"
        />
        <video 
          src="/showreel.mp4"
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover scale-[1.05] hidden md:block"
        />
        {/* Subtle gradient overlay just at the bottom for text readability, leaving the center 100% clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-[5vw] relative z-10 flex flex-col justify-end h-full pt-[40vh] md:pt-[50vh]" ref={textRef}>
        <div className="w-full">
          {/* SEO H1 (Visually Hidden so it doesn't block the video) */}
          <h1 className="sr-only">
            Falah Brandhouse. We build brands that move. Brand strategy, websites, SEO, and digital marketing in Hyderabad, India.
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <p className="text-lg md:text-xl text-ivory max-w-md leading-relaxed font-primary">
              Brand strategy, websites, SEO, content and digital marketing — built around what your business actually needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto shrink-0">
              <MagneticButton>
                <TransitionLink 
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 border border-ivory/30 bg-charcoal/40 backdrop-blur-md text-ivory px-5 sm:px-6 py-3 sm:py-4 font-mono text-xs sm:text-sm font-bold hover:bg-ivory hover:text-graphite transition-colors group"
                >
                  START A PROJECT 
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </TransitionLink>
              </MagneticButton>
              <TransitionLink 
                href="/work"
                className="w-full flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 text-ivory/90 hover:text-vermilion font-mono text-xs sm:text-sm font-bold transition-colors group bg-charcoal/30 backdrop-blur-sm rounded-full border border-transparent hover:border-vermilion/30"
              >
                EXPLORE OUR WORK
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </TransitionLink>
            </div>
          </div>
          
          {/* Client-Oriented Selector */}
          <div className="pt-8 border-t border-ivory/20 pb-4">
            <h2 className="text-xs font-mono tracking-widest text-ivory/60 mb-4 uppercase font-bold">I NEED A...</h2>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <TransitionLink href="/services/branding" className="text-base md:text-lg font-primary text-ivory hover:text-vermilion border-b border-ivory/40 hover:border-vermilion transition-colors pb-1">NEW BRAND</TransitionLink>
              <TransitionLink href="/services/web-development" className="text-base md:text-lg font-primary text-ivory hover:text-vermilion border-b border-ivory/40 hover:border-vermilion transition-colors pb-1">WEBSITE</TransitionLink>
              <TransitionLink href="/services/seo" className="text-base md:text-lg font-primary text-ivory hover:text-vermilion border-b border-ivory/40 hover:border-vermilion transition-colors pb-1">MORE VISIBILITY</TransitionLink>
              <TransitionLink href="/services/digital-marketing" className="text-base md:text-lg font-primary text-ivory hover:text-vermilion border-b border-ivory/40 hover:border-vermilion transition-colors pb-1">MORE LEADS</TransitionLink>
              <TransitionLink href="/services" className="text-base md:text-lg font-primary text-vermilion hover:text-ivory border-b border-vermilion hover:border-ivory transition-colors pb-1">COMPLETE DIGITAL PRESENCE</TransitionLink>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
