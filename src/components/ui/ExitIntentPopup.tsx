"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import clsx from "clsx";
import TransitionLink from "./TransitionLink";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Check if they already closed it in a previous session
    const hasClosed = localStorage.getItem("falah_exit_intent_closed");
    if (hasClosed) {
      setHasTriggered(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse leaves through the top of the window (going for the close/back button)
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem("falah_exit_intent_closed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={closePopup}
      />
      
      <div className="relative bg-foreground text-background w-full max-w-lg p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-500 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 text-background/50 hover:text-background transition-colors z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="relative z-10 space-y-6">
          <div className="inline-block px-3 py-1 bg-accent/20 text-accent font-mono text-[10px] font-bold tracking-widest uppercase mb-2">
            Wait Before You Go
          </div>
          
          <h2 className="text-3xl md:text-4xl font-primary font-bold leading-tight">
            Want a Free 24-Hour Brand & SEO Audit?
          </h2>
          
          <p className="text-background/80 font-primary text-lg">
            We will manually review your website, identify critical growth bottlenecks, and send you a custom action plan. No strings attached.
          </p>

          <div className="pt-4">
            <TransitionLink 
              href="/contact"
              onClick={closePopup}
              className="inline-flex items-center gap-2 bg-accent text-background px-8 py-4 text-sm font-mono font-bold uppercase tracking-wider hover:bg-background hover:text-foreground transition-colors group w-full justify-center"
            >
              Get My Free Audit
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </TransitionLink>
          </div>
          
          <div className="text-center pt-2">
            <button 
              onClick={closePopup}
              className="text-xs font-mono tracking-widest text-background/40 hover:text-background/80 uppercase transition-colors"
            >
              No thanks, I don't want more traffic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
