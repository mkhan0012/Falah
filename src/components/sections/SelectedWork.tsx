"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  return (
    <section className="py-24 md:py-40 bg-ivory relative z-20 border-t border-warm-grey">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        {/* Horizontal Industry Transition Statement */}
        <div className="overflow-hidden border-b border-warm-grey pb-12 mb-24 md:mb-32">
          <p className="text-[10px] md:text-xs font-mono text-slate mb-4 tracking-widest uppercase">
            WE DON&apos;T FOLLOW ONE INDUSTRY
          </p>
          <div className="flex gap-6 md:gap-12 overflow-x-auto whitespace-nowrap scrollbar-hide text-2xl md:text-5xl font-primary font-bold text-graphite/20">
            <span className="hover:text-graphite transition-colors cursor-default">INDUSTRIAL</span>
            <span className="text-vermilion">→</span>
            <span className="hover:text-graphite transition-colors cursor-default">PHARMACEUTICAL</span>
            <span className="text-vermilion">→</span>
            <span className="hover:text-graphite transition-colors cursor-default">REAL ESTATE</span>
            <span className="text-vermilion">→</span>
            <span className="hover:text-graphite transition-colors cursor-default">STARTUPS</span>
            <span className="text-vermilion">→</span>
            <span className="hover:text-graphite transition-colors cursor-default">FOUNDERS</span>
          </div>
        </div>

        <div className="mb-20 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h2 className="text-5xl md:text-[5rem] font-primary font-bold tracking-tight text-graphite mb-6">
              SELECTED WORK
            </h2>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-lg md:text-xl text-slate font-primary">
              Different industries. One approach — building digital presence that works.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-32 md:mt-48 flex justify-center border-t border-warm-grey pt-16">
          <Link 
            href="/work"
            className="inline-flex items-center gap-2 border border-graphite px-8 py-4 text-sm font-mono font-bold text-graphite hover:bg-graphite hover:text-ivory transition-all group"
          >
            VIEW ALL WORK <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

type ProjectType = {
  slug: string;
  name: string;
  client: string;
  category: string;
  services: string[];
  description: string;
  heroImage: string;
};

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const formattedIndex = (index + 1).toString().padStart(2, "0");

  return (
    <Link 
      href={`/work/${project.slug}`}
      ref={cardRef}
      className="group block relative"
      data-cursor="project"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Meta (Left) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="flex items-center gap-4 text-xs font-mono text-slate border-b border-warm-grey pb-4">
            <span className="text-graphite font-bold group-hover:text-vermilion transition-colors">{formattedIndex}</span>
            <span>/</span>
            <span className="uppercase">{project.category}</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-primary font-bold tracking-tight text-graphite mt-4 leading-[0.9]">
            {project.client}
          </h3>
          
          <div className="mt-8 lg:mt-auto space-y-8">
            <ul className="flex flex-col gap-2 text-sm font-mono text-slate">
              {project.services.slice(0, 4).map((service: string) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-warm-grey rounded-full group-hover:bg-vermilion transition-colors" />
                  {service}
                </li>
              ))}
            </ul>
            
            <p className="text-lg text-slate font-primary max-w-sm">
              {project.description}
            </p>
            
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-graphite pt-4 relative">
              <span className="relative z-10">VIEW CASE STUDY</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-vermilion group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>

        {/* Visual (Right) */}
        <div className="lg:col-span-8 w-full order-first lg:order-last">
          <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-warm-grey">
            <Image 
              src={project.heroImage}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}