import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { insights } from "@/data/insights";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return {};

  return {
    title: `${insight.title} | Vyoma Media`,
    description: insight.excerpt || `${insight.title} — strategic intelligence, positioning insights, and growth architecture from Vyoma Media Hyderabad.`,
    alternates: {
      canonical: `https://vyomamedia.com/insights/${slug}`,
    },
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <main className="bg-cloud-white text-deep-atmosphere min-h-screen pt-36 md:pt-44 pb-32 selection:bg-sky-slate selection:text-white relative overflow-hidden font-sans">
      {/* Subtle atmospheric horizon glows */}
      <div className="pointer-events-none absolute left-1/4 top-24 w-[600px] h-[350px] bg-sky-slate/10 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute right-10 bottom-1/3 w-[450px] h-[450px] bg-mist-blue/40 blur-[140px] rounded-full" />

      <article className="container mx-auto px-5 sm:px-6 md:px-12 max-w-4xl relative z-10">
        <Link 
          href="/insights" 
          className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest text-graphite/60 hover:text-deep-atmosphere transition-colors mb-12 uppercase"
        >
          <ArrowLeft size={16} /> Back to Insights
        </Link>
        
        <div className="flex flex-wrap gap-4 items-center text-xs font-mono font-semibold tracking-wider text-graphite/60 mb-6 uppercase">
          <span className="text-sky-slate">{insight.category}</span>
          <span className="w-1 h-1 bg-mist-blue rounded-full" />
          <span>{insight.readingTime}</span>
          <span className="w-1 h-1 bg-mist-blue rounded-full" />
          <span>{insight.date}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-10 uppercase text-deep-atmosphere leading-[1.05]">
          {insight.title}
        </h1>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-mist-blue bg-white mb-14 shadow-md">
          <Image 
            src={insight.heroImage || '/images/mockups/bharat.jpg'}
            alt={insight.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-atmosphere/20 via-transparent to-transparent opacity-40" />
        </div>

        {/* Prose Content */}
        <div 
          className="prose max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-deep-atmosphere prose-p:font-sans prose-p:text-base sm:prose-p:text-lg prose-p:leading-relaxed prose-p:text-graphite/80 prose-a:text-sky-slate prose-a:font-semibold hover:prose-a:underline prose-strong:text-deep-atmosphere prose-li:text-graphite/80 prose-li:font-sans"
          dangerouslySetInnerHTML={{ __html: insight.content }}
        />
        
        {/* Author / CTA Box */}
        <div className="mt-20 pt-10 border-t border-mist-blue flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono font-bold text-sky-slate uppercase tracking-wider mb-1">
              VYOMA MEDIA PERSPECTIVE
            </div>
            <p className="text-sm font-sans text-graphite/80">
              Written by our brand strategy and organic growth engineering team in Hyderabad.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-deep-atmosphere text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-sky-slate transition-all shadow-md group"
          >
            <span>ENGINEER YOUR SYSTEM</span>
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </article>
    </main>
  );
}
