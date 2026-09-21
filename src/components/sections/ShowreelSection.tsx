"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ShowreelSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect on the video wrapper
      gsap.fromTo(videoRef.current, 
        { scale: 1.1, yPercent: -10 },
        {
          scale: 1,
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden bg-charcoal"
    >
      <div 
        ref={videoRef}
        className="absolute inset-0 z-0 bg-graphite"
      >
        <video 
          src="/showreel.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      {/* Dark gradient overlay for smooth transition into next section */}
      <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent z-10 pointer-events-none" />
    </section>
  );
}
