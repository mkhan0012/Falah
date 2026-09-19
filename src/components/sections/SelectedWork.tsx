"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  return (
    <section className="py-24 md:py-40 bg-ivory relative z-20 border-t border-warm-grey">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        <div className="mb-20 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h2 className="text-5xl md:text-[5rem] font-primary font-bold tracking-tight text-graphite mb-6 uppercase">
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
            <CaseStudyDisplay key={project.slug} project={project} index={index} />
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

type ProjectType = any;

function CaseStudyDisplay({ project, index }: { project: ProjectType; index: number }) {
  const formattedIndex = (index + 1).toString().padStart(2, "0");
  
  // Differentiate visual overlay based on industry
  let overlayColor = "bg-charcoal/10";
  if (project.category.includes("HEALTHCARE")) overlayColor = "bg-blue-900/10";
  if (project.category.includes("REAL ESTATE")) overlayColor = "bg-emerald-900/10";

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-start border-t border-warm-grey pt-16">
      
      {/* Visual Side */}
      <div className="lg:w-7/12 w-full order-2 lg:order-1">
        <Link href={`/work/${project.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-warm-grey group">
          <Image 
            src={project.heroImage}
            alt={`${project.client} case study designed by FALAH Brandhouse`}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]"
          />
          <div className={`absolute inset-0 ${overlayColor} mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0`} />
        </Link>
      </div>

      {/* Info Side */}
      <div className="lg:w-5/12 flex flex-col gap-8 w-full order-1 lg:order-2">
        <div className="flex items-center gap-4 text-xs font-mono text-slate">
          <span className="text-graphite font-bold">{formattedIndex}</span>
          <span>/</span>
          <span className="uppercase tracking-widest">{project.category}</span>
        </div>
        
        <h3 className="text-5xl md:text-6xl font-primary font-bold tracking-tight text-graphite leading-[0.9] uppercase">
          {project.client}
        </h3>

        <div className="flex flex-col gap-6 mt-4">
          
          <div className="border-b border-warm-grey pb-6">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-slate mb-2">THE CHALLENGE</h4>
            <p className="text-lg text-graphite font-primary leading-relaxed">
              {project.description || "The client needed a digital presence that accurately reflected their market leadership."}
            </p>
          </div>

          <div className="border-b border-warm-grey pb-6">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-slate mb-3">FALAH HANDLED</h4>
            <ul className="flex flex-wrap gap-2 text-xs font-mono text-graphite">
              {project.services.map((service: string) => (
                <li key={service} className="px-3 py-1 border border-warm-grey rounded-full uppercase">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="pb-6">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-slate mb-2">OUTCOME</h4>
            <p className="text-lg text-graphite font-primary leading-relaxed">
              {project.strategy || "Delivered a scalable digital system that correctly positioned the business to attract high-intent leads and clearly communicate their value."}
            </p>
          </div>

        </div>

        <Link 
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-vermilion hover:text-graphite transition-colors mt-4 uppercase"
        >
          EXPLORE FULL CASE STUDY <ArrowUpRight size={16} />
        </Link>
      </div>

    </div>
  );
}
