import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate | FALAH BRANDHOUSE",
  description: "Premium digital experiences for luxury developments and agencies.",
};

export default function IndustryPage() {
  return (
    <>
      <main className="min-h-screen bg-ivory pt-40 pb-24 text-graphite">
        <div className="container mx-auto px-6 md:px-[5vw]">
          
          <div className="mb-24">
            <p className="text-[10px] md:text-xs font-mono tracking-widest text-slate mb-8 uppercase">
              INDUSTRIES / Real Estate
            </p>
            
            <h1 className="text-6xl md:text-[8vw] leading-[0.9] font-primary font-bold tracking-tight text-graphite mb-12 uppercase">
              Real Estate
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-warm-grey pt-12">
              <div className="md:col-span-8 lg:col-span-6">
                <p className="text-2xl md:text-3xl text-slate font-primary leading-relaxed font-medium">
                  Premium digital experiences for luxury developments and agencies.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 border-t border-warm-grey pt-24 mb-32">
            <div>
              <h2 className="text-3xl md:text-5xl font-primary font-bold mb-8 tracking-tight">HOW WE HELP.</h2>
              <p className="text-lg text-slate leading-relaxed font-primary">
                In the Real Estate sector, digital presence is how you establish trust before a conversation even begins. We build strategic websites, localized SEO, and brand systems that position you as the premium choice in your market.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-primary font-bold mb-8 tracking-tight">CORE FOCUS.</h2>
              <ul className="flex flex-col gap-4 text-lg font-primary text-graphite font-bold">
                <li className="flex items-center gap-4 border-b border-warm-grey pb-4"><div className="w-2 h-2 bg-vermilion rounded-full" /> Authority Building</li>
                <li className="flex items-center gap-4 border-b border-warm-grey pb-4"><div className="w-2 h-2 bg-vermilion rounded-full" /> Lead Generation</li>
                <li className="flex items-center gap-4 border-b border-warm-grey pb-4"><div className="w-2 h-2 bg-vermilion rounded-full" /> Premium Positioning</li>
                <li className="flex items-center gap-4 border-b border-warm-grey pb-4"><div className="w-2 h-2 bg-vermilion rounded-full" /> Technical SEO</li>
              </ul>
            </div>
          </div>

        </div>
      </main>
          </>
  );
}

