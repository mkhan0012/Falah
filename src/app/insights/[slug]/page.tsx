import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { insights } from "@/data/insights";
import FinalCta from "@/components/sections/FinalCta";

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const insight = insights.find((i) => i.slug === resolvedParams.slug);
  
  if (!insight) {
    return { title: "Article Not Found | FALAH BRANDHOUSE" };
  }

  return {
    title: `${insight.title} | Insights | FALAH BRANDHOUSE`,
    description: "Read our latest thinking on brand, design, and growth.",
  };
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const insight = insights.find((i) => i.slug === resolvedParams.slug);

  if (!insight) {
    notFound();
  }

  return (
    <main>
      <article className="pt-40 pb-24 container mx-auto px-6 md:px-12 max-w-4xl">
        <Link 
          href="/insights" 
          className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-foreground/50 hover:text-accent transition-colors mb-16 uppercase"
        >
          <ArrowLeft size={16} /> Back to Insights
        </Link>
        
        <div className="flex gap-4 items-center text-sm font-bold tracking-wider text-accent mb-6 uppercase">
          <span>{insight.category}</span>
          <span className="w-1 h-1 bg-accent rounded-full" />
          <span>{insight.readingTime}</span>
          <span className="w-1 h-1 bg-accent rounded-full" />
          <span className="text-foreground/50">{insight.date}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">
          {insight.title}
        </h1>

        <div className="relative aspect-[21/9] w-full overflow-hidden bg-charcoal rounded-sm mb-16">
          <Image 
            src={insight.heroImage}
            alt={insight.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Prose content */}
        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:text-accent hover:prose-a:text-white"
          dangerouslySetInnerHTML={{ __html: insight.content }}
        />
        
        {/* Share Section placeholder */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-4">
          <span className="text-sm font-bold tracking-widest uppercase text-foreground/50">Share:</span>
          <button className="text-foreground hover:text-accent transition-colors text-sm font-bold">LinkedIn</button>
          <button className="text-foreground hover:text-accent transition-colors text-sm font-bold">Twitter/X</button>
        </div>
      </article>
      
      <FinalCta />
    </main>
  );
}