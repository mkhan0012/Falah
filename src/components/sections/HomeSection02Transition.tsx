"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeSection02Transition() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const growthRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
        },
      });

      // Headline fade in and out
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      ).to(headlineRef.current, { opacity: 0, y: -50, duration: 1 }, "+=1");

      // Words appear one by one
      const wordElements = gsap.utils.toArray<HTMLElement>(".transition-word");
      const lineElements = gsap.utils.toArray<HTMLElement>(".transition-line");

      wordElements.forEach((word: HTMLElement, i: number) => {
        tl.fromTo(word, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
        if (lineElements[i]) {
          tl.fromTo(
            lineElements[i],
            { scaleY: 0, opacity: 0 },
            { scaleY: 1, opacity: 1, duration: 0.5, transformOrigin: "top center" },
            "-=0.25"
          );
        }
      });

      // All words converge / fade out
      tl.to([wordElements, lineElements], { opacity: 0, y: -20, duration: 1 }, "+=1");

      // GROWTH appears
      tl.fromTo(
        growthRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = [
    "BRAND",
    "WEBSITE",
    "SEARCH",
    "CONTENT",
    "ENQUIRIES",
    "LEADS",
    "CUSTOMERS",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 relative h-full flex flex-col items-center justify-center">
        
        {/* Initial Headline */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2
            ref={headlineRef}
            className="text-4xl md:text-6xl font-bold uppercase text-center leading-tight tracking-tight opacity-0"
          >
            A BUSINESS DOESN&apos;T <br />
            GROW FROM ONE THING.
          </h2>
        </div>

        {/* Words and Lines */}
        <div
          ref={wordsRef}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-2 md:gap-4 w-full px-4"
        >
          {words.map((word, idx) => (
            <React.Fragment key={word}>
              <span className="transition-word text-xl md:text-3xl font-medium uppercase tracking-[0.2em] opacity-0">
                {word}
              </span>
              {idx < words.length - 1 && (
                <div
                  className="transition-line w-[1px] h-8 md:h-12 bg-neutral-400 dark:bg-neutral-600 opacity-0"
                  style={{ transformOrigin: "top center", transform: "scaleY(0)" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Final Growth */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1
            ref={growthRef}
            className="text-7xl md:text-[9rem] font-bold uppercase tracking-tighter opacity-0 text-neutral-900 dark:text-white"
          >
            GROWTH
          </h1>
        </div>
      </div>
    </section>
  );
}
