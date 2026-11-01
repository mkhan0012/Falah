"use client";
import { useEffect, useRef } from "react";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Section01BusinessProblem() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#F4F1EA] text-[#171717] overflow-hidden">
      <div className="container mx-auto px-6 md:px-[5vw]">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-tight font-bold mb-8 leading-none">
            <span className="block reveal-text">Your business doesn&apos;t need</span>
            <span className="block reveal-text">more noise.</span>
            <span className="block reveal-text text-vermilion mt-2">It needs a better system.</span>
          </h2>
          <p className="text-lg md:text-2xl text-[#171717]/70 font-primary reveal-text max-w-2xl mx-auto">
            A great product means little if customers can&apos;t find you, understand you, trust you or easily contact you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between reveal-text">
          <div className="flex-1 w-full space-y-4 text-center">
            <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl transition-all hover:shadow-md">
              <h3 className="font-mono font-bold text-lg tracking-wide">GOOD PRODUCT</h3>
            </div>
            <div className="flex justify-center"><ArrowDown className="text-gray-400" /></div>
            <div className="p-6 bg-white/80 border border-gray-200 shadow-sm rounded-xl text-gray-500">
              <h3 className="font-mono font-bold text-lg tracking-wide">NO VISIBILITY</h3>
            </div>
            <div className="flex justify-center"><ArrowDown className="text-gray-400/80" /></div>
            <div className="p-6 bg-white/60 border border-gray-200 shadow-sm rounded-xl text-gray-400">
              <h3 className="font-mono font-bold text-lg tracking-wide">NO DISCOVERY</h3>
            </div>
            <div className="flex justify-center"><ArrowDown className="text-gray-400/60" /></div>
            <div className="p-6 bg-white/40 border border-gray-200 shadow-sm rounded-xl text-gray-400">
              <h3 className="font-mono font-bold text-lg tracking-wide">FEWER ENQUIRIES</h3>
            </div>
          </div>

          <div className="text-2xl font-bold text-gray-300 hidden md:block">VS</div>

          <div className="flex-1 w-full flex flex-col h-full justify-between">
            <div className="grid grid-cols-2 gap-4 mb-4">
               {["BRAND", "WEBSITE", "SEARCH", "CONTENT", "LEADS", "FOLLOW-UP"].map((item) => (
                 <div key={item} className="p-5 bg-charcoal text-[#F4F1EA] rounded-xl text-center font-mono font-bold text-sm flex items-center justify-center gap-2 hover:bg-graphite transition-colors">
                   <CheckCircle2 size={16} className="text-vermilion" /> {item}
                 </div>
               ))}
            </div>
            <div className="flex justify-center mb-4"><ArrowDown className="text-vermilion" /></div>
            <div className="p-8 bg-vermilion text-white rounded-xl text-center shadow-xl transform transition-transform hover:-translate-y-1 cursor-pointer">
              <h3 className="font-mono font-bold text-xl tracking-widest">CONNECTED DIGITAL PRESENCE</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
