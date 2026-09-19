"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { projects } from "@/data/projects";

const categories = ["All", "Industrial / Manufacturing", "Pharmaceutical / Healthcare", "Real Estate / Luxury", "Startups", "Founders"];

export default function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="container mx-auto px-6 md:px-[5vw]">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-16 md:mb-24">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={clsx(
              "px-6 py-2 border font-mono text-xs uppercase tracking-wider transition-colors",
              activeCategory === category
                ? "border-graphite bg-graphite text-ivory"
                : "border-warm-grey text-slate hover:border-graphite hover:text-graphite"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid - Re-using the premium layout from SelectedWork */}
      <div className="flex flex-col gap-32 md:gap-48">
        {filteredProjects.map((project, idx) => {
          const formattedIndex = (idx + 1).toString().padStart(2, "0");
          
          let overlayColor = "bg-charcoal/10";
          if (project.category.includes("HEALTHCARE")) overlayColor = "bg-blue-900/10";
          if (project.category.includes("REAL ESTATE")) overlayColor = "bg-emerald-900/10";

          return (
            <div key={project.slug} className="flex flex-col lg:flex-row gap-16 items-start border-t border-warm-grey pt-16">
              
              {/* Visual Side */}
              <div className="lg:w-7/12 w-full order-2 lg:order-1">
                <Link href={`/work/${project.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-warm-grey group">
                  <Image 
                    src={project.heroImage}
                    alt={project.client}
                    fill
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

                <div className="flex flex-col gap-8 mt-4">
                  
                  <div className="border-b border-warm-grey pb-6">
                    <p className="text-2xl text-vermilion font-primary font-medium tracking-tight">
                      {project.thesis}
                    </p>
                  </div>

                  <div className="pb-6">
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-slate mb-3">FALAH HANDLED</h4>
                    <ul className="flex flex-wrap gap-2 text-xs font-mono text-graphite">
                      {project.services.map((service: string) => (
                        <li key={service} className="px-3 py-1 border border-warm-grey rounded-full uppercase">
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <Link 
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold text-graphite hover:text-vermilion transition-colors mt-2 uppercase group"
                >
                  EXPLORE FULL CASE STUDY 
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
