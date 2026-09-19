import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { insights } from "@/data/insights";

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
    <main className="bg-ivory text-graphite min-h-screen">
      <article className="pt-40 pb-24 container mx-auto px-6 md:px-[5vw] max-w-5xl">
        <Link 
          href="/insights" 
          className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate hover:text-vermilion transition-colors mb-16 uppercase"
        >
          <ArrowLeft size={16} /> Back to Insights
        </Link>
        
        <div className="flex flex-wrap gap-4 items-center text-xs font-mono font-bold tracking-wider text-slate mb-8 uppercase">
          <span className="text-graphite">{insight.category}</span>
          <span className="w-1 h-1 bg-warm-grey rounded-full" />
          <span>{insight.readingTime}</span>
          <span className="w-1 h-1 bg-warm-grey rounded-full" />
          <span>{insight.date}</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-[5rem] leading-[0.9] font-primary font-bold tracking-tight mb-12 uppercase text-graphite">
          {insight.title}
        </h1>

        <div className="relative aspect-[21/9] w-full overflow-hidden bg-warm-grey mb-16">
          <Image 
            src={insight.heroImage || '/images/mockups/placeholder.jpg'}
            alt={insight.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Prose content */}
        <div 
          className="prose prose-lg max-w-3xl mx-auto prose-headings:font-primary prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-graphite prose-p:font-primary prose-p:text-slate prose-a:text-vermilion hover:prose-a:text-graphite prose-strong:text-graphite prose-li:text-slate"
          dangerouslySetInnerHTML={{ __html: insight.content }}
        />
        
        {/* Share Section placeholder */}
        <div className="mt-24 pt-8 border-t border-warm-grey flex items-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate">Share:</span>
          <button className="text-graphite hover:text-vermilion transition-colors text-xs font-mono uppercase tracking-widest border border-warm-grey px-4 py-2 hover:border-vermilion">LinkedIn</button>
          <button className="text-graphite hover:text-vermilion transition-colors text-xs font-mono uppercase tracking-widest border border-warm-grey px-4 py-2 hover:border-vermilion">Twitter/X</button>
        </div>
      </article>
      
          </main>
  );
}

