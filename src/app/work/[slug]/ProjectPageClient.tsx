"use client";

import { projects } from "@/data/projects";
import BharatCaseStudy from "./BharatCaseStudy";
import NovazenCaseStudy from "./NovazenCaseStudy";
import VeloraCaseStudy from "./VeloraCaseStudy";

export default function ProjectPageClient({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) return <div className="min-h-screen flex items-center justify-center font-mono uppercase">Project Not Found</div>;

  switch (project.slug) {
    case "bharat-hydraulics":
      return <BharatCaseStudy project={project} />;
    case "novazen":
      return <NovazenCaseStudy project={project} />;
    case "velora":
      return <VeloraCaseStudy project={project} />;
    default:
      return <div className="min-h-screen flex items-center justify-center font-mono uppercase">Case Study Under Construction</div>;
  }
}

