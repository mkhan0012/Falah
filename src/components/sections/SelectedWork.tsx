"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import clsx from "clsx";

export default function SelectedWork() {
  return (
    <section className="py-24 md:py-40 bg-ivory relative z-20 border-t border-warm-grey">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        <div className="mb-20 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h2 className="text-5xl md:text-[5rem] font-primary font-bold tracking-tight text-graphite mb-6">
              SELECTED WORK
            </h2>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-lg md:text-xl text-slate font-primary">
              Different industries. One approach â€” building digital presence that works.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <CaseStudyExplorer key={project.slug} project={project} index={index} />
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

const tabs = ["OVERVIEW", "WEBSITE", "SEO", "SOCIAL", "STRATEGY"];

function CaseStudyExplorer({ project, index }: { project: ProjectType; index: number }) {
  const formattedIndex = (index + 1).toString().padStart(2, "0");
  const [activeTab, setActiveTab] = useState("OVERVIEW");

  const renderTabContent = () => {
    switch (activeTab) {
      case "OVERVIEW":
        return (
          <div className="animate-in fade-in duration-500">
            <ul className="flex flex-col gap-2 text-sm font-mono text-slate mb-8">
              {project.services.map((service: string) => (
                <li key={service} className="flex items-center gap-2 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-warm-grey rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
            <p className="text-xl text-graphite font-primary max-w-lg mb-8 leading-relaxed">
              {project.description}
            </p>
          </div>
        );
      case "WEBSITE":
        return (
          <div className="animate-in fade-in duration-500">
            <p className="text-xl text-graphite font-primary max-w-lg mb-8 leading-relaxed">
              {project.design || "Engineered a high-performance digital experience focused on conversion and modern aesthetics."}
            </p>
          </div>
        );
      case "SEO":
        return (
          <div className="animate-in fade-in duration-500">
            <p className="text-xl text-graphite font-primary max-w-lg mb-8 leading-relaxed">
              Implemented technical SEO architecture, localized keyword strategy, and on-page optimization to capture organic intent.
            </p>
          </div>
        );
      case "SOCIAL":
        return (
          <div className="animate-in fade-in duration-500">
            <p className="text-xl text-graphite font-primary max-w-lg mb-8 leading-relaxed">
              Developed consistent social templates and visual direction to ensure brand authority translates across all distribution channels.
            </p>
          </div>
        );
      case "STRATEGY":
        return (
          <div className="animate-in fade-in duration-500">
            <p className="text-xl text-graphite font-primary max-w-lg mb-8 leading-relaxed">
              {project.strategy || "Positioning the brand around reliability and excellence, structured to speak directly to core audiences."}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-start border-t border-warm-grey pt-16">
      <div className="lg:w-5/12 flex flex-col gap-8 w-full">
        <div className="flex items-center gap-4 text-xs font-mono text-slate">
          <span className="text-graphite font-bold">{formattedIndex}</span>
          <span>/</span>
          <span className="uppercase tracking-widest">{project.category}</span>
        </div>
        
        <h3 className="text-5xl md:text-6xl lg:text-7xl font-primary font-bold tracking-tight text-graphite leading-[0.9] uppercase">
          {project.client}
        </h3>
        
        {/* Interactive Tabs */}
        <div className="flex flex-wrap gap-4 my-8 border-b border-warm-grey pb-8">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "text-xs font-mono tracking-widest uppercase transition-colors px-3 py-1.5 border",
                activeTab === tab 
                  ? "bg-graphite text-ivory border-graphite" 
                  : "text-slate border-transparent hover:border-warm-grey hover:text-graphite"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="min-h-[200px]">
          {renderTabContent()}
        </div>

        <Link 
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 font-mono text-sm font-bold text-graphite group border border-warm-grey px-6 py-4 hover:border-graphite transition-colors w-fit uppercase"
        >
          EXPLORE FULL CASE STUDY <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      <div className="lg:w-7/12 w-full">
        <Link href={`/work/${project.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-warm-grey group">
          <Image 
            src={activeTab === "WEBSITE" && project.gallery && project.gallery[1] ? project.gallery[1] : project.heroImage}
            alt={project.name}
            fill
            className="object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
          />
        </Link>
      </div>
    </div>
  );
}

