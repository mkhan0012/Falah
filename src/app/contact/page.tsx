"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { submitContact } from "@/app/actions/submitContact";

const needsOptions = [
  "Branding",
  "Website",
  "SEO",
  "Social Media",
  "Digital Marketing",
  "Personal Branding",
  "Complete Digital Presence",
  "Other"
];

const budgetOptions = [
  "Under â‚¹50K",
  "â‚¹50Kâ€“â‚¹1L",
  "â‚¹1Lâ€“â‚¹3L",
  "â‚¹3L+",
  "Not Sure"
];

function ContactForm() {
  const searchParams = useSearchParams();
  const prefillNeed = searchParams.get("need");
  const prefillContext = searchParams.get("context");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    needs: (prefillNeed && needsOptions.includes(prefillNeed)) ? [prefillNeed] : [] as string[],
    budget: "",
    timeline: "",
    message: prefillContext ? `System Context: ${prefillContext}\n\n` : ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    
    try {
      const response = await submitContact(formData);
      
      if (response.success) {
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert("Failed to submit: " + response.error);
      }
    } catch (error) {
      alert("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="border border-warm-grey p-12 bg-white text-center animate-in fade-in zoom-in duration-500">
        <h3 className="text-4xl font-primary font-bold tracking-tight mb-4 text-graphite">THANK YOU.</h3>
        <p className="font-mono text-sm uppercase tracking-widest text-slate mb-8">
          Your project brief has been received.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-xs font-mono font-bold tracking-widest uppercase border-b border-graphite pb-1 hover:text-vermilion hover:border-vermilion transition-colors"
        >
          SEND ANOTHER MESSAGE
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
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
          <label htmlFor="phone" className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Phone</label>
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
        <label className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">What do you need? *</label>
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
        <label htmlFor="timeline" className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Timeline expectations</label>
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
        <label htmlFor="message" className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Tell us about your project *</label>
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
    { num: "01", title: "YOU TALK", desc: "Initial discovery conversation." },
    { num: "02", title: "WE DIAGNOSE", desc: "We understand the business and digital presence." },
    { num: "03", title: "WE PROPOSE", desc: "Clear scope, direction and timeline." },
    { num: "04", title: "WE BUILD", desc: "Brand / Website / SEO / Content / Social." },
    { num: "05", title: "WE GROW", desc: "Optimisation and ongoing support." },
  ];

  return (
    <main className="bg-ivory text-graphite min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Context & Steps */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl md:text-7xl font-primary font-bold tracking-tighter leading-[0.9] mb-8">
                LET&apos;S BUILD<br />SOMETHING<br />DISTINCTIVE.
              </h1>
              <p className="text-xl font-primary text-slate mb-12 max-w-sm">
                Based in Hyderabad, working with businesses and founders across India.
              </p>
              
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">Location</span>
                <span className="text-sm font-mono tracking-widest text-graphite uppercase">HYDERABAD Â· INDIA</span>
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
              <Suspense fallback={<div className="h-96 flex items-center justify-center font-mono text-xs tracking-widest text-slate">LOADING FORM...</div>}>
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
