"use client";

import { useState, Suspense } from "react";
import { submitContact } from "../actions/submitContact";
import { ArrowRight, ArrowDown } from "lucide-react";
import clsx from "clsx";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    needs: [] as string[],
    budget: "",
    timeline: "",
    message: ""
  });

  const needsOptions = ["Branding", "Website", "SEO", "Social Media", "Digital Marketing", "Personal Branding", "Complete Digital Presence", "Other"];
  const budgetOptions = ["Under ₹1L", "₹1L - ₹3L", "₹3L - ₹5L", "₹5L+"];

  const toggleNeed = (need: string) => {
    setFormData(prev => ({
      ...prev,
      needs: prev.needs.includes(need) 
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const result = await submitContact(formData as any);

    if (result.error) {
      setError(result.error);
      setIsSubmitting(false);
    } else {
      setIsSuccess(true);
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-vermilion text-ivory rounded-full flex items-center justify-center mb-6">
          <ArrowRight size={32} />
        </div>
        <h3 className="text-3xl font-primary font-bold mb-4 uppercase">THANK YOU.</h3>
        <p className="text-slate font-primary text-lg">WE'LL BE IN TOUCH.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 animate-in fade-in duration-500">
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 font-mono text-sm border border-red-200">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="name" className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Name *</label>
          <input 
            type="text" 
            id="name" 
            required
            className="w-full bg-transparent border-b border-warm-grey py-3 font-primary text-xl focus:outline-none focus:border-graphite transition-colors rounded-none"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Email *</label>
          <input 
            type="email" 
            id="email" 
            required
            className="w-full bg-transparent border-b border-warm-grey py-3 font-primary text-xl focus:outline-none focus:border-graphite transition-colors rounded-none"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Phone / WhatsApp</label>
          <input 
            type="tel" 
            id="phone" 
            className="w-full bg-transparent border-b border-warm-grey py-3 font-primary text-xl focus:outline-none focus:border-graphite transition-colors rounded-none"
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Company</label>
          <input 
            type="text" 
            id="company" 
            className="w-full bg-transparent border-b border-warm-grey py-3 font-primary text-xl focus:outline-none focus:border-graphite transition-colors rounded-none"
            value={formData.company}
            onChange={e => setFormData({...formData, company: e.target.value})}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="website" className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Current Website (if any)</label>
          <input 
            type="url" 
            id="website" 
            className="w-full bg-transparent border-b border-warm-grey py-3 font-primary text-xl focus:outline-none focus:border-graphite transition-colors rounded-none"
            value={formData.website}
            onChange={e => setFormData({...formData, website: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-4 pt-8">
        <label className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Service Required *</label>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {needsOptions.map(need => (
            <button
              key={need}
              type="button"
              onClick={() => toggleNeed(need)}
              className={clsx(
                "px-4 py-2 font-mono text-xs uppercase tracking-wider border transition-colors",
                formData.needs.includes(need)
                  ? "border-graphite bg-graphite text-ivory"
                  : "border-warm-grey text-graphite hover:border-graphite"
              )}
            >
              {need}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-8">
        <label className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Budget Range</label>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {budgetOptions.map(budget => (
            <button
              key={budget}
              type="button"
              onClick={() => setFormData({...formData, budget})}
              className={clsx(
                "px-4 py-2 font-mono text-xs uppercase tracking-wider border transition-colors",
                formData.budget === budget
                  ? "border-graphite bg-graphite text-ivory"
                  : "border-warm-grey text-graphite hover:border-graphite"
              )}
            >
              {budget}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2 pt-8">
        <label htmlFor="timeline" className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Timeline</label>
        <input 
          type="text" 
          id="timeline" 
          placeholder="e.g. Next month, Q3, ASAP"
          className="w-full bg-transparent border-b border-warm-grey py-3 font-primary text-xl focus:outline-none focus:border-graphite transition-colors placeholder:text-slate/40 rounded-none"
          value={formData.timeline}
          onChange={e => setFormData({...formData, timeline: e.target.value})}
        />
      </div>

      <div className="space-y-2 pt-8">
        <label htmlFor="message" className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Message / Project Details *</label>
        <textarea 
          id="message" 
          required
          rows={6}
          className="w-full bg-transparent border-b border-warm-grey py-3 font-primary text-xl focus:outline-none focus:border-graphite transition-colors resize-none rounded-none"
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
        />
      </div>

      <div className="pt-8">
        <button 
          type="submit" 
          disabled={isSubmitting || formData.needs.length === 0}
          className="w-full inline-flex items-center justify-center gap-2 border border-graphite bg-transparent text-graphite px-8 py-5 text-sm font-mono font-bold uppercase tracking-wider hover:bg-graphite hover:text-ivory transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? "SENDING..." : "SUBMIT BRIEF"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
    </form>
  );
}

export default function ContactPage() {
  const steps = [
    { num: "01", title: "YOU TELL US WHAT YOU'RE BUILDING", desc: "Short project enquiry." },
    { num: "02", title: "WE REVIEW", desc: "We understand your business, goals and current digital presence." },
    { num: "03", title: "WE TALK", desc: "A short discovery conversation." },
    { num: "04", title: "WE PROPOSE", desc: "You receive a recommended scope and approach." },
    { num: "05", title: "WE BUILD", desc: "Strategy → Design → Development → Growth." },
  ];

  return (
    <main className="bg-ivory text-graphite min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Context & Steps */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl md:text-7xl font-primary font-bold tracking-tighter leading-[0.9] mb-8">
                LET'S BUILD<br />SOMETHING<br />DISTINCTIVE.
              </h1>
              <p className="text-xl font-primary text-slate mb-12 max-w-sm">
                Based in Hyderabad, working with businesses and founders across India.
              </p>
              
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Location</span>
                <span className="text-sm font-mono tracking-widest text-graphite uppercase">HYDERABAD · INDIA</span>
              </div>
            </div>

            <div className="mt-auto hidden lg:block">
              <h3 className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase mb-8 flex items-center gap-2">
                WHAT HAPPENS NEXT? <ArrowDown size={14} />
              </h3>
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.num} className="border-l border-warm-grey pl-6 hover:border-vermilion transition-colors">
                    <h4 className="font-mono text-xs font-bold tracking-widest uppercase mb-1">
                      <span className="text-slate mr-2">{step.num}</span> {step.title}
                    </h4>
                    <p className="text-sm font-primary text-slate">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7">
            <div className="border border-warm-grey p-6 md:p-12 bg-white">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Mobile Steps (Shows below form on small screens) */}
            <div className="mt-24 lg:hidden">
              <h3 className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase mb-8">WHAT HAPPENS NEXT?</h3>
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.num} className="border-l border-warm-grey pl-6">
                    <h4 className="font-mono text-xs font-bold tracking-widest uppercase mb-1">
                      <span className="text-slate mr-2">{step.num}</span> {step.title}
                    </h4>
                    <p className="text-sm font-primary text-slate">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}

