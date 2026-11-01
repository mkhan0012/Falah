"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import TransitionLink from "./TransitionLink";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (triggered) return;
      const hasClosed = typeof window !== "undefined" && localStorage.getItem("vyoma_exit_intent_closed");
      if (hasClosed) return;

      // Trigger if mouse leaves through the top of the window
      if (e.clientY <= 0) {
        triggered = true;
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("vyoma_exit_intent_closed", "true");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={closePopup}
      />
      
      <div className="relative w-full max-w-lg bg-foreground text-background p-8 md:p-12 rounded-3xl shadow-2xl border border-warm-grey/20 z-10 animate-in zoom-in-95 duration-300">
        <button 
          onClick={closePopup}
          className="absolute top-6 right-6 text-background/50 hover:text-background transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-accent uppercase">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            BEFORE YOU GO
          </div>

          <h3 className="text-3xl md:text-4xl font-primary font-bold tracking-tight leading-tight">
            Want to see how your competitors are ranking?
          </h3>

          <p className="text-background/70 font-primary text-base leading-relaxed">
            Use our free SEO intelligence tool to uncover high-intent search gaps in your industry within 30 seconds.
          </p>

          <div className="pt-2">
            <TransitionLink
              href="/keyword-tool"
              onClick={closePopup}
              className="w-full flex items-center justify-center gap-2 bg-accent text-foreground font-mono font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full hover:bg-background hover:text-foreground transition-all group"
            >
              RUN FREE KEYWORD SCAN
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </TransitionLink>
          </div>
          
          <div className="text-center pt-2">
            <button 
              onClick={closePopup}
              className="text-xs font-mono tracking-widest text-background/40 hover:text-background/80 uppercase transition-colors"
            >
              No thanks, I don&apos;t want more traffic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
