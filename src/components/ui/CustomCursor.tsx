"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);
  const [isHoveringProject, setIsHoveringProject] = useState(false);
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
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const link = target.closest("a, button, input, textarea, [data-cursor='pointer']");
      const project = target.closest("[data-cursor='project']");
      
      if (project) {
        setIsHoveringProject(true);
        gsap.to(cursor, {
          width: 80,
          height: 80,
          backgroundColor: "var(--color-vermilion)",
          mixBlendMode: "normal",
          duration: 0.3,
        });
      } else if (link) {
        setIsHoveringProject(false);
        gsap.to(cursor, {
          width: 40,
          height: 40,
          backgroundColor: "transparent",
          border: "1px solid var(--color-graphite)",
          mixBlendMode: "difference",
          duration: 0.3,
        });
      } else {
        setIsHoveringProject(false);
        gsap.to(cursor, {
          width: 10,
          height: 10,
          backgroundColor: "var(--color-graphite)",
          border: "none",
          mixBlendMode: "difference",
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    
    document.body.style.cursor = "none";
    
    const style = document.createElement('style');
    style.innerHTML = `
      a, button, [data-cursor="pointer"], [data-cursor="project"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.body.style.cursor = "auto";
      document.head.removeChild(style);
    };
  }, [pathname]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-2.5 h-2.5 bg-graphite rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center overflow-hidden"
    >
      <div 
        ref={cursorTextRef}
        className={`text-ivory font-mono font-bold text-[10px] tracking-widest transition-opacity duration-300 ${isHoveringProject ? 'opacity-100' : 'opacity-0'}`}
      >
        VIEW
      </div>
    </div>
  );
}
