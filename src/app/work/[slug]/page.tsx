import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import FinalCta from "@/components/sections/FinalCta";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Not Found" };
  
  return {
    title: `${project.client} | FALAH BRANDHOUSE`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-ivory pt-40 pb-24 text-graphite">
        <div className="container mx-auto px-6 md:px-[5vw]">
          
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate hover:text-vermilion transition-colors mb-16 uppercase"
          >
            <ArrowLeft size={16} /> Back to Work
          </Link>

          {/* Header */}
          <div className="mb-24 md:mb-32">
            <h1 className="text-6xl md:text-[8vw] leading-[0.9] font-primary font-bold tracking-tight text-graphite mb-12 uppercase">
              {project.client}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-warm-grey pt-12">
              <div className="md:col-span-8 lg:col-span-6">
                <p className="text-2xl md:text-3xl text-slate font-primary leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>
              <div className="md:col-span-4 lg:col-span-4 lg:col-start-9 flex flex-col gap-8">
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest text-slate mb-2 uppercase">INDUSTRY</h4>
                  <p className="text-lg font-primary text-graphite">{project.category}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest text-slate mb-3 uppercase">FALAH'S ROLE</h4>
                  <ul className="flex flex-col gap-1">
                    {project.services.map(s => (
                      <li key={s} className="text-lg font-primary text-graphite">{s}</li>
                    ))}
                  </ul>
                </div>
                {project.website && (
                  <div className="mt-4">
                    <a 
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-ivory bg-vermilion px-6 py-3 hover:bg-graphite transition-colors uppercase group"
                    >
                      VISIT LIVE SITE
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Main Visual */}
          <div className="aspect-video w-full relative mb-32 bg-warm-grey overflow-hidden group">
            <img 
              src={project.heroImage} 
              alt={project.client}
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-32">
            
            {project.challenge && (
              <div className="md:col-span-12 lg:col-span-10 lg:col-start-2 border-t border-warm-grey pt-12">
                <h2 className="text-xs font-mono font-bold tracking-widest text-slate mb-6 uppercase">THE CHALLENGE</h2>
                <p className="text-2xl md:text-3xl text-graphite font-primary leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.strategy && (
              <div className="md:col-span-12 lg:col-span-10 lg:col-start-2 border-t border-warm-grey pt-12">
                <h2 className="text-xs font-mono font-bold tracking-widest text-slate mb-6 uppercase">THE STRATEGY</h2>
                <p className="text-2xl md:text-3xl text-graphite font-primary leading-relaxed">
                  {project.strategy}
                </p>
              </div>
            )}

            {project.design && (
              <div className="md:col-span-12 lg:col-span-10 lg:col-start-2 border-t border-warm-grey pt-12">
                <h2 className="text-xs font-mono font-bold tracking-widest text-slate mb-6 uppercase">WHAT WE BUILT</h2>
                <p className="text-2xl md:text-3xl text-graphite font-primary leading-relaxed">
                  {project.design}
                </p>
              </div>
            )}

          </div>

          {/* Secondary Visuals */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
              {project.gallery.slice(1).map((img, i) => (
                <div key={i} className="aspect-[4/3] relative bg-warm-grey overflow-hidden">
                  <img 
                    src={img} 
                    alt={`${project.client} gallery ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Outcome */}
          {project.outcome && (
            <div className="bg-charcoal text-ivory p-12 md:p-24 flex flex-col items-center text-center">
              <h2 className="text-xs font-mono font-bold tracking-widest text-vermilion mb-8 uppercase">THE OUTCOME</h2>
              <p className="text-2xl md:text-4xl font-primary leading-tight max-w-4xl">
                "{project.outcome}"
              </p>
            </div>
          )}

        </div>
      </main>
      <FinalCta />
    </>
  );
}
