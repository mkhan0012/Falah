"use client";

import { projects } from "@/data/projects";
import BharatCaseStudy from "./BharatCaseStudy";
import NovazenCaseStudy from "./NovazenCaseStudy";
import VeloraCaseStudy from "./VeloraCaseStudy";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectPageClient({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-cloud-white text-deep-atmosphere flex flex-col items-center justify-center px-6 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-4">
          404 // CASE STUDY
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-bold mb-6 uppercase">Case Study Not Found</h1>
        <p className="text-graphite/80 max-w-md mb-8 font-sans">
          The requested case study could not be located in our production archive.
        </p>
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-deep-atmosphere text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-sky-slate transition-all shadow-md"
        >
          <ArrowLeft size={14} /> Back to All Case Studies
        </Link>
      </div>
    );
  }

  switch (project.slug) {
    case "bharat-hydraulics":
      return <BharatCaseStudy project={project} />;
    case "novazen":
      return <NovazenCaseStudy project={project} />;
    case "velora":
      return <VeloraCaseStudy project={project} />;
    default:
      return (
        <div className="min-h-screen bg-cloud-white text-deep-atmosphere flex flex-col items-center justify-center px-6 text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-4">
            STATUS // PACKAGING ARCHIVE
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-bold mb-6 uppercase">Case Study Packaging</h1>
          <p className="text-graphite/80 max-w-md mb-8 font-sans">
            We are finalizing the verified architecture breakdown for {project.client}.
          </p>
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-mist-blue text-deep-atmosphere font-mono text-xs font-bold uppercase tracking-wider hover:border-sky-slate transition-all shadow-xs"
          >
            <ArrowLeft size={14} /> Return to Work Gallery
          </Link>
        </div>
      );
  }
}
