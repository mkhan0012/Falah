export default function AboutSection() {
  return (
    <section className="py-24 md:py-40 bg-background relative border-t border-foreground/5">
      {/* Subtle map/grid background could go here */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <p className="text-sm font-bold tracking-[0.2em] text-foreground/40 mb-12">
          HYDERABAD Ã‚Â· INDIA
        </p>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif max-w-4xl mx-auto mb-12 leading-tight">
          A SMALL STUDIO.<br />
          <span className="italic text-foreground/60">BIG BRAND THINKING.</span>
        </h2>
        
        <p className="text-xl md:text-3xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-light mb-24">
          FALAH BRANDHOUSE is a brand and digital growth studio based in Hyderabad, India. 
          We work with businesses, founders and ambitious teams to create brands 
          that look distinctive, communicate clearly and perform online.
        </p>
        
        <div className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-lg font-bold tracking-widest text-accent border border-accent/20 px-8 py-4 rounded-full bg-accent/5 backdrop-blur-sm">
          <span>STRATEGY</span>
          <span className="text-foreground/30 font-serif">Ãƒâ€”</span>
          <span>DESIGN</span>
          <span className="text-foreground/30 font-serif">Ãƒâ€”</span>
          <span>TECHNOLOGY</span>
          <span className="text-foreground/30 font-serif">Ãƒâ€”</span>
          <span>GROWTH</span>
        </div>
      </div>
    </section>
  );
}