"use client";

import { useEffect, useRef, useState } from "react";
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
    let ctx: any;
    
    // Dynamically import GSAP to prevent it from blocking the main thread on initial load
    import("gsap").then(({ default: gsap }) => {
      ctx = gsap.context(() => {
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
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, [isMobile]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-end pt-32 pb-8 md:pb-16 overflow-hidden bg-charcoal"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          key={isMobile ? "mobile-video" : "desktop-video"}
          src={isMobile ? "/showreel-mobile.mp4" : "/showreel.mp4"} 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay just at the bottom for text readability, leaving the center 100% clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-[5vw] relative z-10 flex flex-col justify-end h-full" ref={textRef}>
        <div className="w-full mt-auto">
          {/* SEO H1 (Visually Hidden so it doesn't block the video) */}
          <h1 className="sr-only">
            Falah Brandhouse. We build brands that move. Brand strategy, websites, SEO, and digital marketing to generate high-quality organic leads.
          </h1>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 mb-8 md:mb-12">
            <p className="text-lg md:text-xl lg:text-2xl text-[#F4F1EA] max-w-md lg:max-w-lg leading-relaxed font-primary drop-shadow-md">
              Brand strategy, websites, SEO, and digital marketing — built to generate high-quality organic leads and grow your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto shrink-0">
              <MagneticButton>
                <TransitionLink 
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 border border-[#F4F1EA]/30 bg-charcoal/40 backdrop-blur-md text-[#F4F1EA] px-5 sm:px-6 md:px-8 py-3 sm:py-4 font-mono text-xs sm:text-sm font-bold hover:bg-[#F4F1EA] hover:text-[#171717] transition-colors group"
                >
                  START A PROJECT 
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </TransitionLink>
              </MagneticButton>
              <TransitionLink 
                href="/work"
                className="w-full flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-[#F4F1EA]/90 hover:text-vermilion font-mono text-xs sm:text-sm font-bold transition-colors group bg-charcoal/30 backdrop-blur-sm rounded-full border border-transparent hover:border-vermilion/30"
              >
                EXPLORE OUR WORK
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </TransitionLink>
            </div>
          </div>
          
          {/* Client-Oriented Selector */}
          <div className="pt-6 md:pt-8 border-t border-[#F4F1EA]/20 pb-2 md:pb-4">
            <h2 className="text-xs font-mono tracking-widest text-[#F4F1EA]/60 mb-4 uppercase font-bold">I NEED A...</h2>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <TransitionLink href="/services/branding" className="text-base md:text-lg font-primary text-[#F4F1EA] hover:text-vermilion border-b border-[#F4F1EA]/40 hover:border-vermilion transition-colors pb-1">NEW BRAND</TransitionLink>
              <TransitionLink href="/services/web-development" className="text-base md:text-lg font-primary text-[#F4F1EA] hover:text-vermilion border-b border-[#F4F1EA]/40 hover:border-vermilion transition-colors pb-1">WEBSITE</TransitionLink>
              <TransitionLink href="/services/seo" className="text-base md:text-lg font-primary text-[#F4F1EA] hover:text-vermilion border-b border-[#F4F1EA]/40 hover:border-vermilion transition-colors pb-1">MORE VISIBILITY</TransitionLink>
              <TransitionLink href="/services/digital-marketing" className="text-base md:text-lg font-primary text-[#F4F1EA] hover:text-vermilion border-b border-[#F4F1EA]/40 hover:border-vermilion transition-colors pb-1">MORE LEADS</TransitionLink>
              <TransitionLink href="/services" className="text-base md:text-lg font-primary text-vermilion hover:text-[#F4F1EA] border-b border-vermilion hover:border-[#F4F1EA] transition-colors pb-1">COMPLETE DIGITAL PRESENCE</TransitionLink>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
