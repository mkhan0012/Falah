import { Metadata } from "next";
import EmptyState from "@/components/ui/EmptyState";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "No Search Intelligence Found | Vyoma Media",
  description: "Search query returned zero matching keywords. Explore suggestions and return to the main growth layer overview.",
};

export default function EmptyStatePage() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-6 md:px-12 bg-cloud-white text-deep-atmosphere selection:bg-sky-slate selection:text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-slate/10 blur-[150px] rounded-full" />

      <div className="w-full max-w-3xl relative z-10 space-y-8">
        <Link
          href="/keyword-tool"
          className="inline-flex items-center gap-2 text-xs font-mono text-graphite/60 hover:text-deep-atmosphere transition-colors uppercase tracking-wider mb-4"
        >
          <ArrowLeft size={14} /> Back to SEO Tool
        </Link>

        <EmptyState
          title="Zero Query Matches Discovered"
          description="We couldn't uncover search intelligence matching your specified parameters. Try testing one of our high-intent category presets or run a new search."
          actionLabel="Try Keyword Tool"
          actionHref="/keyword-tool"
          suggestions={[
            "industrial hydraulics india",
            "b2b manufacturing web system",
            "generative engine optimization",
            "conversion-engineered branding"
          ]}
        />
      </div>
    </main>
  );
}
