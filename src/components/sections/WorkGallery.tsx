"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { projects } from "@/data/projects";
import EmptyState from "@/components/ui/EmptyState";

const categories = ["All", "Industrial / Manufacturing", "Pharmaceutical / Healthcare", "Real Estate / Luxury", "Startups", "Founders"];

export default function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px]">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-16 md:mb-20">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={clsx(
              "px-4 sm:px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all border",
              activeCategory === category
                ? "bg-deep-atmosphere text-white border-deep-atmosphere font-bold shadow-md shadow-deep-atmosphere/20"
                : "bg-white border-mist-blue text-graphite/80 hover:border-sky-slate/50 hover:text-deep-atmosphere"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid or Empty State */}
      {filteredProjects.length === 0 ? (
        <div className="py-12">
          <EmptyState
            title={`No Case Studies in "${activeCategory}" Yet`}
            description="We are currently packaging recent client deployments in this category. Explore our flagship case studies below or reset your filter."
            actionLabel="View All Case Studies"
            onReset={() => setActiveCategory("All")}
            suggestions={["Industrial / Manufacturing", "Pharmaceutical / Healthcare", "Real Estate / Luxury"]}
            onSelectSuggestion={(cat) => setActiveCategory(cat)}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-12 md:gap-16">
          {filteredProjects.map((project, idx) => {
            const formattedIndex = (idx + 1).toString().padStart(2, "0");

            return (
              <div 
                key={project.slug} 
                className="rounded-3xl bg-white border border-mist-blue p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row gap-10 lg:gap-14 items-center hover:border-sky-slate/50 shadow-xs hover:shadow-[0_12px_36px_rgba(23,43,58,0.08)] transition-all group"
              >
                {/* Visual Side */}
                <div className="lg:w-7/12 w-full order-2 lg:order-1">
                  <Link 
                    href={`/work/${project.slug}`} 
                    className="block relative aspect-[16/10] overflow-hidden rounded-2xl border border-mist-blue bg-cloud-white group-hover:border-sky-slate/50 transition-colors"
                  >
                    <Image 
                      src={project.heroImage}
                      alt={project.client}
                      fill
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-deep-atmosphere/10 opacity-30 group-hover:opacity-0 transition-opacity" />
                  </Link>
                </div>

                {/* Info Side */}
                <div className="lg:w-5/12 flex flex-col gap-6 w-full order-1 lg:order-2">
                  <div className="flex items-center gap-3 text-xs font-mono text-graphite/60">
                    <span className="text-sky-slate font-bold">{formattedIndex}</span>
                    <span>/</span>
                    <span className="uppercase tracking-widest">{project.category}</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-deep-atmosphere leading-none uppercase">
                    {project.client}
                  </h3>

                  <div className="space-y-4">
                    <p className="text-xl sm:text-2xl text-deep-atmosphere font-display font-semibold">
                      {project.thesis}
                    </p>
                    <p className="text-sm font-sans text-graphite/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-graphite/60 mb-3">
                      CAPABILITIES DELIVERED
                    </h4>
                    <ul className="flex flex-wrap gap-2 text-xs font-mono">
                      {project.services.map((service: string) => (
                        <li 
                          key={service} 
                          className="px-3 py-1 bg-cloud-white border border-mist-blue text-deep-atmosphere rounded-full uppercase"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-mist-blue">
                    <Link 
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold text-sky-slate hover:text-deep-atmosphere transition-colors uppercase tracking-wider group/link"
                    >
                      <span>EXPLORE FULL CASE STUDY</span>
                      <ArrowUpRight size={15} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
