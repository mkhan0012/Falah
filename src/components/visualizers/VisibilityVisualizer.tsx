"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VisibilityVisualizer({ activeIndex }: { activeIndex: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Reset
      gsap.set(".search-bar", { width: "50%", opacity: 0.2, y: 0 });
      gsap.set(".search-text", { opacity: 0 });
      gsap.set(".search-result", { y: 20, opacity: 0, scale: 1, borderColor: "rgba(255,255,255,0.1)", backgroundColor: "transparent" });
      gsap.set(".rank-badge", { scale: 0, opacity: 0, rotation: -45 });
      gsap.set(".map-bg", { opacity: 0, scale: 1.1 });
      gsap.set(".map-pin", { y: -40, opacity: 0, scale: 0 });
      gsap.set(".pulse-ring", { scale: 0, opacity: 0 });
      gsap.set(".network-node", { opacity: 0, scale: 0 });
      gsap.set(".network-line", { strokeDashoffset: 100, opacity: 0 });

      const tl = gsap.timeline();

      if (activeIndex === 0) {
        // State 0: Technical SEO (Scanner effect on code blocks)
        tl.to(".search-result", { y: 0, opacity: 0.3, stagger: 0.1, duration: 0.4 })
          .to(".search-result", { borderColor: "#ff5722", opacity: 1, stagger: 0.2, duration: 0.2, yoyo: true, repeat: 1 });
      } 
      else if (activeIndex === 1) {
        // State 1: Content Strategy (Search bar expands and ranks)
        tl.to(".search-bar", { width: "100%", opacity: 1, duration: 0.6, ease: "power3.out" })
          .to(".search-text", { opacity: 1, duration: 0.3 })
          .to(".search-result", { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back.out(1.2)" }, "+=0.2")
          .to(".rank-badge", { scale: 1, opacity: 1, rotation: 10, duration: 0.4, ease: "back.out(2)" })
          .to(".result-1", { borderColor: "rgba(255,87,34,0.5)", backgroundColor: "rgba(255,87,34,0.1)", duration: 0.4 }, "-=0.4");
      } 
      else if (activeIndex === 2) {
        // State 2: Local SEO (Map background + pin dropping and pulsing)
        tl.to(".search-bar, .search-result", { opacity: 0, duration: 0.2 })
          .to(".map-bg", { opacity: 0.3, scale: 1, duration: 0.8, ease: "power2.out" })
          .to(".map-pin", { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "bounce.out" }, "-=0.4")
          .to(".pulse-ring", { scale: 3, opacity: 0, duration: 1.5, repeat: -1, ease: "power2.out" }, "-=0.2");
      } 
      else if (activeIndex === 3) {
        // State 3: Authority Building (Network nodes connecting to center)
        tl.to(".search-bar, .search-result", { opacity: 0, duration: 0.2 })
          .to(".network-node.center", { opacity: 1, scale: 1.5, duration: 0.4, ease: "back.out(2)" })
          .to(".network-node.satellite", { opacity: 1, scale: 1, stagger: 0.1, duration: 0.4, ease: "back.out(1.5)" })
          .to(".network-line", { strokeDashoffset: 0, opacity: 0.5, stagger: 0.1, duration: 0.5, ease: "power2.out" });
      }
    }, containerRef);
    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="w-full h-full bg-charcoal flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      {/* Network UI (Active in State 3) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          <line className="network-line" x1="50" y1="50" x2="20" y2="20" stroke="#ff5722" strokeWidth="1" strokeDasharray="100" strokeDashoffset="100" />
          <line className="network-line" x1="50" y1="50" x2="80" y2="30" stroke="#ff5722" strokeWidth="1" strokeDasharray="100" strokeDashoffset="100" />
          <line className="network-line" x1="50" y1="50" x2="30" y2="80" stroke="#ff5722" strokeWidth="1" strokeDasharray="100" strokeDashoffset="100" />
          <line className="network-line" x1="50" y1="50" x2="70" y2="70" stroke="#ff5722" strokeWidth="1" strokeDasharray="100" strokeDashoffset="100" />
        </svg>
        <div className="network-node center absolute w-8 h-8 bg-vermilion rounded-full z-10" />
        <div className="network-node satellite absolute w-4 h-4 bg-ivory/80 rounded-full" style={{ top: '20%', left: '20%' }} />
        <div className="network-node satellite absolute w-5 h-5 bg-ivory/80 rounded-full" style={{ top: '30%', left: '80%' }} />
        <div className="network-node satellite absolute w-3 h-3 bg-ivory/80 rounded-full" style={{ top: '80%', left: '30%' }} />
        <div className="network-node satellite absolute w-4 h-4 bg-ivory/80 rounded-full" style={{ top: '70%', left: '70%' }} />
      </div>

      {/* Local SEO Map & Pin (Active in State 2) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20 overflow-hidden">
        {/* Abstract Map Background */}
        <div className="map-bg absolute inset-0 opacity-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" style={{ backgroundSize: '100px' }} />
        <svg className="map-bg absolute w-[150%] h-[150%] text-ivory/10" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M10,0 L10,100 M30,0 L30,100 M50,0 L50,100 M70,0 L70,100 M90,0 L90,100" stroke="currentColor" strokeWidth="0.5" />
           <path d="M0,20 L100,20 M0,40 L100,40 M0,60 L100,60 M0,80 L100,80" stroke="currentColor" strokeWidth="0.5" />
           <path d="M0,0 L100,100 M100,0 L0,100" stroke="currentColor" strokeWidth="0.2" />
        </svg>

        <div className="relative flex items-center justify-center z-30 mb-8">
          <div className="pulse-ring absolute w-24 h-24 border-2 border-vermilion rounded-full" />
          <svg className="map-pin w-16 h-16 text-vermilion drop-shadow-[0_15px_15px_rgba(255,87,34,0.4)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      </div>

      {/* Main Search UI (Active in State 0 and 1) */}
      <div className="w-full flex flex-col items-center gap-8 relative z-30">
        <div className="search-bar w-1/2 h-12 border border-ivory/20 rounded-full flex items-center px-6 gap-3 bg-charcoal/80 backdrop-blur shadow-2xl">
          <div className="w-4 h-4 rounded-full border-2 border-ivory/40" />
          <div className="search-text text-ivory/80 font-mono text-xs opacity-0 flex items-center">
            query...
          </div>
        </div>

        <div className="w-full max-w-sm flex flex-col gap-4 relative">
          <div className="search-result result-1 w-full border border-ivory/10 rounded-lg p-4 bg-charcoal/80 backdrop-blur relative shadow-xl">
            <div className="w-1/2 h-3 bg-ivory/30 rounded mb-3" />
            <div className="w-full h-2 bg-ivory/10 rounded mb-2" />
            <div className="w-4/5 h-2 bg-ivory/10 rounded" />
            <div className="rank-badge absolute -top-3 -right-3 bg-vermilion text-ivory font-mono text-[10px] font-bold px-2 py-1 rounded shadow-lg">
              RANK #1
            </div>
          </div>
          <div className="search-result w-full border border-ivory/10 rounded-lg p-4 bg-charcoal/80 backdrop-blur shadow-xl">
            <div className="w-1/3 h-3 bg-ivory/20 rounded mb-3" />
            <div className="w-5/6 h-2 bg-ivory/10 rounded mb-2" />
            <div className="w-3/4 h-2 bg-ivory/10 rounded" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
