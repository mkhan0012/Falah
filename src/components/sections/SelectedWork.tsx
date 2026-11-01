"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork({ limit }: { limit?: number }) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;
    if (!container || !header) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(header, 
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
          }
        }
      );
      
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.fromTo(card,
          { y: 100, opacity: 0 },
          { 
            y: 0, opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-cloud-white relative z-20 border-t border-mist-blue overflow-hidden">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        <div ref={headerRef} className="mb-20 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-4 block">
              PORTFOLIO // SELECTED WORK
            </span>
            <h2 className="text-5xl md:text-[5rem] font-display font-bold tracking-tight text-deep-atmosphere mb-6 uppercase">
              SELECTED WORK
            </h2>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-lg md:text-xl text-graphite/70 font-sans leading-relaxed">
              Different industries. One methodology — building digital assets and organic presence that compound over time.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {displayProjects.map((project, index) => (
            <CaseStudyDisplay key={project.slug} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-32 md:mt-48 flex justify-center border-t border-mist-blue pt-16">
          <MagneticButton>
            <Link 
              href="/work"
              className="inline-flex items-center gap-2 border border-deep-atmosphere px-8 py-4 text-xs font-mono font-bold text-deep-atmosphere hover:bg-deep-atmosphere hover:text-white transition-all uppercase tracking-wider group"
            >
              <span>VIEW ALL WORK</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

function CaseStudyDisplay({ project, index }: { project: Project; index: number }) {
  const formattedIndex = (index + 1).toString().padStart(2, "0");
  
  return (
    <div className="project-card flex flex-col lg:flex-row gap-16 items-start border-t border-mist-blue pt-16">
      
      {/* Visual Side */}
      <div className="lg:w-7/12 w-full order-2 lg:order-1">
        <Link href={`/work/${project.slug}`} data-cursor="project" className="block relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist-blue/30 border border-mist-blue group">
          <Image 
            src={project.heroImage}
            alt={`${project.client} case study deployed by VYOMA Media`}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-deep-atmosphere/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
        </Link>
      </div>

      {/* Info Side */}
      <div className="lg:w-5/12 flex flex-col gap-8 w-full order-1 lg:order-2">
        <div className="flex items-center gap-4 text-xs font-mono text-graphite/60">
          <span className="text-sky-slate font-bold">{formattedIndex}</span>
          <span>/</span>
          <span className="uppercase tracking-widest">{project.category}</span>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-deep-atmosphere leading-[0.95] uppercase">
          {project.client}
        </h3>

        <div className="flex flex-col gap-6 mt-4">
          
          <div className="border-b border-mist-blue pb-6">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-sky-slate mb-2">THE THESIS</h4>
            <p className="text-lg text-deep-atmosphere font-display font-medium leading-relaxed">
              {project.thesis}
            </p>
          </div>

          <div className="border-b border-mist-blue pb-6">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-graphite/60 mb-3">VYOMA DELIVERED</h4>
            <ul className="flex flex-wrap gap-2 text-xs font-mono text-graphite">
              {project.services.map((service: string) => (
                <li key={service} className="px-3 py-1 bg-white border border-mist-blue rounded-full uppercase">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="pb-6">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-graphite/60 mb-2">SYSTEM ARCHITECTURE</h4>
            <p className="text-base text-graphite/80 font-sans leading-relaxed">
              {project.description}
            </p>
          </div>

        </div>

        <Link 
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-sky-slate hover:text-deep-atmosphere transition-colors mt-2 uppercase tracking-wider"
        >
          EXPLORE FULL CASE STUDY <ArrowUpRight size={16} />
        </Link>
      </div>

    </div>
  );
}
