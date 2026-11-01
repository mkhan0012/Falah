"use client";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Section11FinalCTA() {
  return (
    <section className="py-32 bg-vermilion text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[140%] rounded-full border border-white/20 opacity-50"></div>
        <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[120%] rounded-full border border-white/20 opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 md:px-[5vw] relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-primary uppercase tracking-tight font-bold mb-8">
            What could your business look like online?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-primary max-w-2xl mx-auto">
            Tell us where your business is today. We&apos;ll help identify what needs to be built, improved or connected.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-charcoal p-8 md:p-12 rounded-3xl shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs tracking-widest text-[#F4F1EA]/60 uppercase">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-[#F4F1EA] focus:outline-none focus:border-vermilion transition-colors" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs tracking-widest text-[#F4F1EA]/60 uppercase">Business</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-[#F4F1EA] focus:outline-none focus:border-vermilion transition-colors" placeholder="Company name" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs tracking-widest text-[#F4F1EA]/60 uppercase">Email / WhatsApp</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-[#F4F1EA] focus:outline-none focus:border-vermilion transition-colors" placeholder="How should we reach you?" />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs tracking-widest text-[#F4F1EA]/60 uppercase">What do you need help with?</label>
              <textarea rows={3} className="w-full bg-transparent border-b border-white/20 pb-3 text-[#F4F1EA] focus:outline-none focus:border-vermilion transition-colors resize-none" placeholder="Briefly describe your current situation..."></textarea>
            </div>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <MagneticButton>
                <button type="button" className="px-8 py-4 bg-vermilion text-white font-mono text-sm font-bold tracking-widest w-full sm:w-auto hover:bg-white hover:text-vermilion transition-colors rounded-none">
                  START A CONVERSATION
                </button>
              </MagneticButton>
              
              <a href="#" className="font-mono text-xs tracking-widest text-[#F4F1EA]/60 uppercase hover:text-white transition-colors pb-1 border-b border-transparent hover:border-white">
                EXPLORE OUR WORK
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
