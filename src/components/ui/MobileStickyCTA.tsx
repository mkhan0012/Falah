"use client";

import { usePathname } from "next/navigation";
import { ArrowUpRight, Sparkles } from "lucide-react";
import TransitionLink from "./TransitionLink";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function MobileStickyCTA() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // Don't show on contact or RFP pages where they are already in the funnel
  const isExcludedPage = pathname === "/contact" || pathname === "/request-proposal";

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isExcludedPage) return null;

  return (
    <div 
      className={clsx(
        "fixed bottom-4 left-4 right-4 z-[90] md:hidden transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <TransitionLink 
        href="/contact"
        className="flex items-center justify-center gap-2.5 w-full bg-deep-atmosphere hover:bg-sky-slate text-white py-3.5 px-6 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-[0_4px_25px_rgba(23,43,58,0.35)] border border-sky-slate/40 active:scale-[0.98] transition-all"
      >
        <Sparkles size={14} className="text-sky-slate" />
        <span>START A PROJECT</span>
        <ArrowUpRight size={15} />
      </TransitionLink>
    </div>
  );
}
