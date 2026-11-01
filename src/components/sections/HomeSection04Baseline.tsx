"use client";

import React, { useState, useEffect } from "react";
import { Info } from "lucide-react";

export default function HomeSection04Baseline() {
  const [period, setPeriod] = useState<"DAILY" | "MONTHLY">("DAILY");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const stats = {
    DAILY: {
      impressions: 400,
      visits: 200,
      impressionsText: "Approximate current daily search visibility based on available analytics.",
      visitsText: "Approximate current daily website traffic."
    },
    MONTHLY: {
      impressions: 12000,
      visits: 6000,
      impressionsText: "Approximate monthly equivalent of search visibility.",
      visitsText: "Approximate monthly equivalent of website traffic."
    }
  };

  const currentStats = stats[period];

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8">
            START WITH <br/> WHAT&apos;S REAL.
          </h2>
          
          <div className="inline-flex bg-neutral-200 dark:bg-neutral-800 rounded-full p-1">
            <button
              onClick={() => setPeriod("DAILY")}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                period === "DAILY" 
                  ? "bg-white dark:bg-black shadow-sm" 
                  : "text-neutral-500 hover:text-black dark:hover:text-white"
              }`}
            >
              DAILY
            </button>
            <button
              onClick={() => setPeriod("MONTHLY")}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                period === "MONTHLY" 
                  ? "bg-white dark:bg-black shadow-sm" 
                  : "text-neutral-500 hover:text-black dark:hover:text-white"
              }`}
            >
              MONTHLY
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-black rounded-3xl p-10 shadow-xl shadow-black/5 dark:shadow-white/5 relative group border border-neutral-200 dark:border-neutral-800">
            <div className="absolute top-6 right-6 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors cursor-help">
              <Info className="w-5 h-5" />
              <div className="absolute right-0 top-8 w-64 p-3 bg-black dark:bg-white text-white dark:text-black text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {currentStats.impressionsText}
              </div>
            </div>
            
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-4">
              Google Impressions
            </p>
            
            <div className="flex items-baseline gap-2">
              <AnimatedNumber 
                value={currentStats.impressions} 
                isVisible={isVisible} 
                className="text-6xl md:text-8xl font-bold tracking-tighter" 
                suffix={period === "MONTHLY" ? "K+" : "+"}
                formatValue={period === "MONTHLY" ? (v) => (v / 1000).toString() : undefined}
              />
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-green-600 dark:text-green-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              VERIFIED BASELINE
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-black rounded-3xl p-10 shadow-xl shadow-black/5 dark:shadow-white/5 relative group border border-neutral-200 dark:border-neutral-800">
            <div className="absolute top-6 right-6 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors cursor-help">
              <Info className="w-5 h-5" />
              <div className="absolute right-0 top-8 w-64 p-3 bg-black dark:bg-white text-white dark:text-black text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {currentStats.visitsText}
              </div>
            </div>
            
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-4">
              Website Visits
            </p>
            
            <div className="flex items-baseline gap-2">
              <AnimatedNumber 
                value={currentStats.visits} 
                isVisible={isVisible} 
                className="text-6xl md:text-8xl font-bold tracking-tighter"
                suffix={period === "MONTHLY" ? "K+" : "+"}
                formatValue={period === "MONTHLY" ? (v) => (v / 1000).toString() : undefined}
              />
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-green-600 dark:text-green-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              VERIFIED BASELINE
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function AnimatedNumber({ 
  value, 
  isVisible, 
  className,
  suffix = "",
  formatValue
}: { 
  value: number; 
  isVisible: boolean; 
  className?: string;
  suffix?: string;
  formatValue?: (v: number) => string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    
    const end = value;
    const duration = 1500;
    const startTime = performance.now();
    
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease out expo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setDisplayValue(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(end);
      }
    };
    
    requestAnimationFrame(step);
  }, [value, isVisible]);

  const finalString = formatValue ? formatValue(displayValue) : displayValue.toString();

  return (
    <span className={className}>
      {finalString}{suffix}
    </span>
  );
}
