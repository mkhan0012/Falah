"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPageClient({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !project) return;

    const ctx = gsap.context(() => {
      // Clean, subtle Parallax Hero
      gsap.to(".hero-parallax", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Simple fade ups for typography
      gsap.utils.toArray(".fade-up").forEach((el: any) => {
        gsap.fromTo(el, 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.2, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, [project]);

  if (!project) return null;

  const desktopImg = project.gallery[0] || project.heroImage;
  const mobileImg = project.gallery[1];

  return (
    <main ref={containerRef} className="min-h-screen bg-ivory text-graphite selection:bg-vermilion selection:text-ivory">
      
      {/* Intro Section - Clean & Typographic */}
      <div className="pt-40 pb-20 container mx-auto px-6 md:px-[5vw]">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate hover:text-vermilion transition-colors mb-20 uppercase"
        >
          <ArrowLeft size={16} /> All Projects
        </Link>

        <div className="fade-up max-w-7xl">
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-primary font-bold tracking-tight text-graphite mb-12 uppercase">
            {project.client}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-warm-grey pt-12">
            <div className="md:col-span-8">
              <p className="text-2xl md:text-4xl text-slate font-primary leading-tight font-medium max-w-4xl">
                {project.description}
              </p>
            </div>
            
            <div className="md:col-span-4 flex flex-col gap-10">
              <div>
                <h4 className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate mb-3 uppercase border-b border-warm-grey pb-2 inline-block">INDUSTRY</h4>
                <p className="text-xl font-primary text-graphite mt-2">{project.category}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate mb-3 uppercase border-b border-warm-grey pb-2 inline-block">SCOPE</h4>
                <ul className="flex flex-col gap-2 mt-2">
                  {project.services.map((s: string) => (
                    <li key={s} className="text-xl font-primary text-graphite">{s}</li>
                  ))}
                </ul>
              </div>
              {project.website && (
                <div className="mt-4">
                  <a 
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-ivory bg-graphite px-8 py-4 hover:bg-vermilion transition-colors uppercase group"
                  >
                    VISIT PLATFORM
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* High-Fidelity Hero Visual */}
      <div className="hero-container h-[60vh] md:h-[90vh] w-full relative overflow-hidden bg-charcoal">
        <div className="hero-parallax absolute inset-[-15%] w-[130%] h-[130%]">
          <Image 
            src={project.heroImage} 
            alt={project.client}
            fill
            sizes="100vw"
            quality={100}
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Narrative Section - Minimalist */}
      <div className="container mx-auto px-6 md:px-[5vw] py-32 md:py-48">
        <div className="flex flex-col gap-32 max-w-5xl mx-auto">
          
          {project.challenge && (
            <div className="fade-up">
              <h2 className="text-sm font-mono font-bold tracking-widest text-slate mb-8 uppercase text-center md:text-left">THE CHALLENGE</h2>
              <p className="text-3xl md:text-5xl text-graphite font-primary leading-tight font-bold tracking-tight text-center md:text-left">
                {project.challenge}
              </p>
            </div>
          )}

          {project.strategy && (
            <div className="fade-up border-t border-warm-grey pt-16">
              <h2 className="text-sm font-mono font-bold tracking-widest text-slate mb-8 uppercase">THE STRATEGY</h2>
              <p className="text-xl md:text-3xl text-slate font-primary leading-relaxed">
                {project.strategy}
              </p>
            </div>
          )}

        </div>
      </div>

      {/* Premium Studio Showcase */}
      <div className="bg-[#111] py-32 md:py-48 relative overflow-hidden text-ivory border-y border-graphite">
        <div className="container mx-auto px-6 md:px-[5vw]">
          <div className="mb-24 fade-up max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-primary font-bold tracking-tight mb-6">
              THE DIGITAL PLATFORM
            </h2>
            <p className="text-lg md:text-xl font-primary text-ivory/60">
              Engineered for absolute clarity and high conversion across every device ecosystem.
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto flex flex-col gap-24 lg:gap-32">
            
            {/* Desktop Layout - Edge to Edge elegant shadow */}
            <div className="w-full relative z-10 fade-up">
              <div className="relative aspect-[16/9] bg-black overflow-hidden drop-shadow-2xl shadow-black">
                <Image 
                  src={desktopImg}
                  alt={`${project.client} Desktop`}
                  fill
                  sizes="100vw"
                  quality={100}
                  className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-700"
                />
              </div>
              <p className="text-center text-xs font-mono tracking-widest text-ivory/40 uppercase mt-8">Desktop View</p>
            </div>

            {/* Mobile Layout */}
            {mobileImg && (
              <div className="w-full relative z-20 fade-up flex flex-col items-center">
                <div className="relative aspect-[9/19] w-full max-w-[400px] bg-black overflow-hidden drop-shadow-2xl shadow-black">
                  <Image 
                    src={mobileImg}
                    alt={`${project.client} Mobile`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    quality={100}
                    className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
                <p className="text-center text-xs font-mono tracking-widest text-ivory/40 uppercase mt-8">Mobile Experience</p>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Outcome */}
      {project.outcome && (
        <div className="bg-ivory text-graphite py-32 md:py-48 flex flex-col items-center text-center px-6">
          <div className="container mx-auto fade-up flex flex-col items-center">
            <h2 className="text-sm font-mono font-bold tracking-[0.2em] text-vermilion mb-12 uppercase">THE OUTCOME</h2>
            <p className="text-3xl md:text-5xl lg:text-[4.5rem] font-primary font-bold leading-[1.1] tracking-tight max-w-6xl text-graphite">
              "{project.outcome}"
            </p>
          </div>
        </div>
      )}

    </main>
  );
}
