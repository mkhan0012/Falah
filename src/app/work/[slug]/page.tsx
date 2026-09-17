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
    <main className="bg-ivory text-graphite selection:bg-vermilion selection:text-ivory">
      {/* Hero Section */}
      <section className="pt-40 pb-24 border-b border-warm-grey">
        <div className="container mx-auto px-6 md:px-[5vw]">
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate hover:text-vermilion transition-colors mb-16 uppercase"
          >
            <ArrowLeft size={16} /> Back to Work
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end mb-24">
            <div className="lg:col-span-8">
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-primary font-bold leading-[0.85] tracking-tighter uppercase">
                {project.client}
              </h1>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="text-xl md:text-2xl font-primary text-graphite/80 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Info */}
      <section className="border-b border-warm-grey bg-white">
        <div className="container mx-auto px-6 md:px-[5vw]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
            <div>
              <h4 className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase mb-6">Client</h4>
              <p className="text-sm font-mono uppercase tracking-wider">{project.client}</p>
            </div>
            <div>
              <h4 className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase mb-6">Industry</h4>
              <p className="text-sm font-mono uppercase tracking-wider">{project.category}</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase mb-6">Services Delivered</h4>
              <div className="flex flex-wrap gap-2">
                {project.services.map(s => (
                  <span key={s} className="text-xs font-mono border border-warm-grey px-3 py-1 bg-ivory/50">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="border-b border-warm-grey bg-charcoal p-6 md:p-[5vw]">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-charcoal border border-ivory/10">
          <Image 
            src={project.heroImage}
            alt={`${project.client} Hero`}
            fill
            className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
            priority
          />
        </div>
        <div className="mt-8 flex justify-between items-center text-ivory/50 text-xs font-mono uppercase tracking-widest">
          <span>Live Digital Experience</span>
          <a 
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-vermilion transition-colors"
          >
            Visit Website <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-32 border-b border-warm-grey bg-ivory">
        <div className="container mx-auto px-6 md:px-[5vw]">
          <div className="max-w-5xl mx-auto space-y-32">
            
            {project.challenge && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4 border-t border-graphite pt-4">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-slate uppercase">01 / THE CHALLENGE</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-2xl md:text-4xl font-primary leading-tight text-graphite font-medium">
                    {project.challenge}
                  </p>
                </div>
              </div>
            )}

            {project.approach && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4 border-t border-graphite pt-4">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-slate uppercase">02 / OUR APPROACH</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-2xl md:text-4xl font-primary leading-tight text-graphite font-medium">
                    {project.approach}
                  </p>
                </div>
              </div>
            )}

            {project.outcome && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4 border-t border-vermilion pt-4">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-vermilion uppercase">03 / THE OUTCOME</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-2xl md:text-4xl font-primary leading-tight text-graphite font-bold">
                    {project.outcome}
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* WHAT WE BUILT (The Experience) */}
      <section className="bg-charcoal text-ivory py-32 border-b border-warm-grey">
        <div className="container mx-auto px-6 md:px-[5vw]">
          <div className="mb-24">
            <p className="text-[10px] font-mono tracking-widest text-ivory/50 uppercase mb-8">THE SYSTEM</p>
            <h2 className="text-5xl md:text-7xl font-primary font-bold tracking-tighter">WHAT WE BUILT</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Website Mockup */}
            <div className="col-span-1 md:col-span-2 border border-ivory/10 p-6 md:p-12 bg-ivory/5">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-ivory/10">
                <h3 className="text-xl font-primary font-bold tracking-wide">Website Experience</h3>
                <span className="text-xs font-mono text-ivory/40">DESKTOP</span>
              </div>
              <div className="relative aspect-video w-full overflow-hidden bg-charcoal">
                <Image src={project.gallery[0] || project.heroImage} alt="Website Experience" fill className="object-cover opacity-80" />
              </div>
            </div>

            {/* Mobile Experience */}
            <div className="border border-ivory/10 p-6 md:p-12 bg-ivory/5">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-ivory/10">
                <h3 className="text-xl font-primary font-bold tracking-wide">Mobile Version</h3>
                <span className="text-xs font-mono text-ivory/40">RESPONSIVE</span>
              </div>
              <div className="relative aspect-[9/16] w-full max-w-[300px] mx-auto overflow-hidden bg-charcoal border-[8px] border-black rounded-[2rem]">
                <Image src={project.gallery[1] || project.heroImage} alt="Mobile Experience" fill className="object-cover opacity-80" />
              </div>
            </div>

            {/* Secondary Assets (SEO, Social, etc) */}
            <div className="flex flex-col gap-6 md:gap-12">
              <div className="flex-1 border border-ivory/10 p-6 md:p-12 bg-ivory/5 flex flex-col justify-center text-center">
                <h3 className="text-3xl font-primary font-bold tracking-wide mb-4">SEO & Visibility</h3>
                <p className="font-mono text-xs text-ivory/60 leading-relaxed uppercase tracking-widest">
                  Technical Architecture • Search Intent • Content Strategy
                </p>
              </div>
              <div className="flex-1 border border-ivory/10 p-6 md:p-12 bg-ivory/5 flex flex-col justify-center text-center">
                <h3 className="text-3xl font-primary font-bold tracking-wide mb-4 text-vermilion">Brand Assets</h3>
                <p className="font-mono text-xs text-ivory/60 leading-relaxed uppercase tracking-widest">
                  Typography • Color System • Visual Direction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <Link href={`/work/${nextProject.slug}`} className="block group">
        <section className="py-32 bg-graphite text-ivory flex flex-col items-center justify-center text-center transition-colors hover:bg-vermilion">
          <p className="text-xs font-mono font-bold tracking-widest uppercase mb-8 text-ivory/50 group-hover:text-ivory/90 transition-colors">Next Project</p>
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-primary font-bold leading-none tracking-tighter uppercase">
            {nextProject.client}
          </h2>
        </section>
      </Link>
      
      <FinalCta />
    </main>
  );
}