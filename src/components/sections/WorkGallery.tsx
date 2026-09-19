"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      <div className="flex flex-wrap gap-4 mb-20 md:mb-32">
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

      {/* Grid */}
      <div className="grid grid-cols-1 gap-24 md:gap-32">
        {filteredProjects.map((project, idx) => {
          const formattedIndex = (idx + 1).toString().padStart(2, "0");
          return (
            <Link 
              href={`/work/${project.slug}`} 
              key={project.slug}
              className="group block"
              data-cursor="project"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                
                {/* Meta */}
                <div className="w-full md:w-1/4 flex flex-col pt-4 border-t border-warm-grey">
                  <div className="flex items-center gap-4 text-xs font-mono text-slate mb-8">
                    <span className="text-graphite font-bold group-hover:text-vermilion transition-colors">{formattedIndex}</span>
                    <span>/</span>
                    <span className="uppercase">{project.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-primary font-bold text-graphite mb-4">
                    {project.client}
                  </h3>
                  <p className="text-slate font-primary text-sm max-w-sm mb-8">
                    {project.description}
                  </p>
                  <ul className="flex flex-col gap-2 text-xs font-mono text-slate mb-8">
                    {project.services.slice(0, 3).map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-warm-grey rounded-full group-hover:bg-vermilion transition-colors" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="w-full md:w-3/4">
                  <div className="relative aspect-[16/10] overflow-hidden bg-warm-grey">
                    <Image
                      src={project.heroImage}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 grayscale hover:grayscale-0"
                    />
                  </div>
                </div>

              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
