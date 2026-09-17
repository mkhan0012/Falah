import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import FinalCta from "@/components/sections/FinalCta";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) {
    return { title: "Project Not Found | FALAH BRANDHOUSE" };
  }

  return {
    title: `${project.client} | Work | FALAH BRANDHOUSE`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const projectIndex = projects.findIndex((p) => p.slug === resolvedParams.slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 container mx-auto px-6 md:px-12">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-foreground/50 hover:text-accent transition-colors mb-16 uppercase"
        >
          <ArrowLeft size={16} /> Back to Work
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end mb-24">
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-serif leading-[0.9] tracking-tight">
              {project.client}
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xl md:text-2xl font-light text-foreground/70 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Meta Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/10 mb-24">
          <div>
            <h4 className="text-xs font-bold tracking-widest text-foreground/40 uppercase mb-4">Category</h4>
            <p className="text-lg font-medium">{project.category}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest text-foreground/40 uppercase mb-4">Services</h4>
            <ul className="text-lg font-medium space-y-1">
              {project.services.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest text-foreground/40 uppercase mb-4">Live Project</h4>
            <a 
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-medium hover:text-accent transition-colors"
            >
              Visit Website <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-charcoal rounded-sm mb-32">
          <Image 
            src={project.heroImage}
            alt={`${project.client} Hero`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Details Content */}
        <div className="max-w-4xl mx-auto space-y-32 mb-32">
          {project.challenge && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-serif text-accent">THE CHALLENGE</h3>
              </div>
              <div className="md:col-span-8 text-xl md:text-2xl leading-relaxed font-light text-foreground/80">
                {project.challenge}
              </div>
            </div>
          )}

          {project.approach && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-serif text-accent">OUR APPROACH</h3>
              </div>
              <div className="md:col-span-8 text-xl md:text-2xl leading-relaxed font-light text-foreground/80">
                {project.approach}
              </div>
            </div>
          )}

          {project.strategy && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-serif text-accent">STRATEGY</h3>
              </div>
              <div className="md:col-span-8 text-xl md:text-2xl leading-relaxed font-light text-foreground/80">
                {project.strategy}
              </div>
            </div>
          )}

          {project.design && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-serif text-accent">DESIGN</h3>
              </div>
              <div className="md:col-span-8 text-xl md:text-2xl leading-relaxed font-light text-foreground/80">
                {project.design}
              </div>
            </div>
          )}

          {project.outcome && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-serif text-accent">OUTCOME</h3>
              </div>
              <div className="md:col-span-8 text-xl md:text-2xl leading-relaxed font-bold text-foreground">
                {project.outcome}
              </div>
            </div>
          )}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-8 md:gap-16 mb-32">
          {project.gallery.map((img, i) => (
            <div key={i} className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal rounded-sm">
              <Image 
                src={img}
                alt={`${project.client} Gallery ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Next Project */}
      <Link href={`/work/${nextProject.slug}`} className="block group">
        <section className="py-24 md:py-32 bg-foreground text-background flex flex-col items-center justify-center text-center transition-colors hover:bg-accent hover:text-black">
          <p className="text-sm font-bold tracking-widest uppercase mb-8">Next Project</p>
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-none">
            {nextProject.client}
          </h2>
        </section>
      </Link>
      
      <FinalCta />
    </main>
  );
}