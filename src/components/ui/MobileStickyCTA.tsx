"use client";

import { usePathname } from "next/navigation";
import { PhoneCall } from "lucide-react";
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
        href="/request-proposal"
        className="flex items-center justify-center gap-3 w-full bg-accent text-background py-4 px-6 rounded-full font-mono text-sm font-bold uppercase tracking-widest shadow-2xl shadow-accent/20 border border-accent/50"
      >
        <PhoneCall size={18} className="animate-pulse" />
        Get a Proposal
      </TransitionLink>
    </div>
  );
}
