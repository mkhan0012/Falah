"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);
  const [cursorMode, setCursorMode] = useState<"default" | "link" | "project" | "watch">("default");
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    
    if (prefersReducedMotion || isTouchDevice) {
      if (cursorRef.current) cursorRef.current.style.display = "none";
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12,
        ease: "power2.out",
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const watchTarget = target.closest("[data-cursor='watch'], video");
      const projectTarget = target.closest("[data-cursor='project']");
      const linkTarget = target.closest("a, button, input, textarea, [data-cursor='pointer']");
      
      if (watchTarget) {
        setCursorMode("watch");
        gsap.to(cursor, {
          width: 80,
          height: 80,
          backgroundColor: "rgba(23, 43, 58, 0.92)",
          borderColor: "#7899B0",
          borderWidth: 1.5,
          backdropFilter: "blur(12px)",
          mixBlendMode: "normal",
          duration: 0.25,
        });
      } else if (projectTarget) {
        setCursorMode("project");
        gsap.to(cursor, {
          width: 80,
          height: 80,
          backgroundColor: "rgba(23, 43, 58, 0.92)",
          borderColor: "#D3A56C",
          borderWidth: 1.5,
          backdropFilter: "blur(12px)",
          mixBlendMode: "normal",
          duration: 0.25,
        });
      } else if (linkTarget) {
        setCursorMode("link");
        gsap.to(cursor, {
          width: 38,
          height: 38,
          backgroundColor: "rgba(120, 153, 176, 0.15)",
          borderColor: "#7899B0",
          borderWidth: 1.5,
          mixBlendMode: "normal",
          duration: 0.2,
        });
      } else {
        setCursorMode("default");
        gsap.to(cursor, {
          width: 12,
          height: 12,
          backgroundColor: "#7899B0",
          borderColor: "#FFFFFF",
          borderWidth: 1.5,
          mixBlendMode: "normal",
          duration: 0.2,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    
    document.body.style.cursor = "none";
    
    const style = document.createElement('style');
    style.innerHTML = `
      a, button, input, textarea, select, [data-cursor="pointer"], [data-cursor="project"], [data-cursor="watch"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.body.style.cursor = "auto";
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [pathname]);

  const showText = cursorMode === "project" || cursorMode === "watch";
  const label = cursorMode === "watch" ? "WATCH" : "VIEW";

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-sky-slate rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden border border-white shadow-[0_2px_10px_rgba(23,43,58,0.3)]"
    >
      <div 
        ref={cursorTextRef}
        className={`text-white font-mono font-bold text-[11px] tracking-widest transition-opacity duration-200 select-none ${showText ? 'opacity-100' : 'opacity-0'}`}
      >
        {label}
      </div>
    </div>
  );
}
