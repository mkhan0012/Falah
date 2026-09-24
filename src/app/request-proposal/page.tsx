"use client";

import { useState, Suspense } from "react";
import { submitContact } from "../actions/submitContact";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import clsx from "clsx";

function RfpForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    businessType: "",
    needs: [] as string[],
    goals: "",
    budget: "",
    timeline: "",
    message: "",
    honeypot: ""
  });

  const needsOptions = ["Branding", "Website", "SEO", "Social Media", "Digital Marketing", "Personal Branding", "Complete Digital Presence", "Other"];
  const budgetOptions = ["Under ₹1L", "₹1L - ₹3L", "₹3L - ₹5L", "₹5L+"];
  const typeOptions = ["New Business", "Existing Business", "Rebrand", "Website Redesign", "Marketing / Growth", "Other"];

  const toggleNeed = (need: string) => {
    setFormData(prev => ({
      ...prev,
      needs: prev.needs.includes(need) 
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need]
    }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      nextStep();
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    const result = await submitContact(formData);

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
        <div className="w-16 h-16 bg-accent text-background rounded-full flex items-center justify-center mb-6">
          <Check size={32} />
        </div>
        <h3 className="text-3xl font-primary font-bold mb-4 uppercase">PROPOSAL REQUESTED.</h3>
        <p className="text-muted-foreground font-primary text-lg">WE&apos;LL REVIEW AND BE IN TOUCH SHORTLY.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col animate-in fade-in duration-500 relative min-h-[500px]">
      
      {/* Progress Bar */}
      <div className="w-full bg-foreground/10 h-1 mb-12">
        <div 
          className="bg-accent h-full transition-all duration-500 ease-out"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 font-mono text-sm border border-red-200 mb-8">
          {error}
        </div>
      )}

      {/* Honeypot field */}
      <div aria-hidden="true" className="hidden opacity-0 absolute pointer-events-none -left-[9999px]">
        <label htmlFor="bot-check">Do not fill this out</label>
        <input
          type="text"
          id="bot-check"
          name="honeypot"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={e => setFormData({...formData, honeypot: e.target.value})}
        />
      </div>

      {/* STEP 1: Needs */}
      {step === 1 && (
        <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-500">
          <h2 className="text-3xl md:text-5xl font-primary font-bold tracking-tight">What can we help you achieve?</h2>
          <p className="text-muted-foreground font-primary text-lg">Select all that apply.</p>
          <div className="flex flex-wrap gap-3">
            {needsOptions.map(need => (
              <button
                key={need}
                type="button"
                onClick={() => toggleNeed(need)}
                className={clsx(
                  "px-6 py-4 font-mono text-xs md:text-sm font-bold uppercase tracking-widest transition-all border",
                  formData.needs.includes(need) 
                    ? "bg-foreground text-background border-foreground" 
                    : "border-foreground/20 text-foreground/70 hover:border-foreground hover:text-foreground"
                )}
              >
                {need}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 2: Budget & Type */}
      {step === 2 && (
        <div className="space-y-12 animate-in slide-in-from-right-8 fade-in duration-500">
          <h2 className="text-3xl md:text-5xl font-primary font-bold tracking-tight">Tell us about your company.</h2>
          
          <div className="space-y-4">
            <label className="text-xs font-mono font-bold tracking-[0.2em] text-muted-foreground uppercase">Project Stage</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {typeOptions.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setFormData({...formData, businessType: opt})}
                  className={clsx(
                    "px-4 py-4 text-center font-mono text-xs font-bold uppercase tracking-widest transition-all border",
                    formData.businessType === opt 
                      ? "bg-foreground text-background border-foreground" 
                      : "border-foreground/20 text-foreground/70 hover:border-foreground hover:text-foreground"
                  )}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-mono font-bold tracking-[0.2em] text-muted-foreground uppercase">Expected Budget</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {budgetOptions.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setFormData({...formData, budget: opt})}
                  className={clsx(
                    "px-4 py-4 text-center font-mono text-xs font-bold uppercase tracking-widest transition-all border",
                    formData.budget === opt 
                      ? "bg-foreground text-background border-foreground" 
                      : "border-foreground/20 text-foreground/70 hover:border-foreground hover:text-foreground"
                  )}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Goals */}
      {step === 3 && (
        <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-500">
          <h2 className="text-3xl md:text-5xl font-primary font-bold tracking-tight">What are your main goals?</h2>
          <div className="space-y-2">
            <textarea 
              id="goals" 
              className="w-full bg-transparent border border-foreground/20 p-6 font-primary text-xl focus:outline-none focus:border-foreground transition-colors resize-none h-48"
              value={formData.goals}
              onChange={e => setFormData({...formData, goals: e.target.value})}
              placeholder="E.g., We want to double our organic traffic, redesign our outdated website, and position ourselves as a premium brand..."
            />
          </div>
        </div>
      )}

      {/* STEP 4: Contact Details */}
      {step === 4 && (
        <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-500">
          <h2 className="text-3xl md:text-5xl font-primary font-bold tracking-tight">Where should we send it?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] font-mono font-bold tracking-[0.2em] text-muted-foreground uppercase">Name *</label>
              <input type="text" id="name" required className="w-full bg-transparent border-b border-foreground/20 py-3 font-primary text-xl focus:outline-none focus:border-foreground transition-colors" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-mono font-bold tracking-[0.2em] text-muted-foreground uppercase">Email *</label>
              <input type="email" id="email" required className="w-full bg-transparent border-b border-foreground/20 py-3 font-primary text-xl focus:outline-none focus:border-foreground transition-colors" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-[10px] font-mono font-bold tracking-[0.2em] text-muted-foreground uppercase">Company Name</label>
              <input type="text" id="company" className="w-full bg-transparent border-b border-foreground/20 py-3 font-primary text-xl focus:outline-none focus:border-foreground transition-colors" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label htmlFor="website" className="text-[10px] font-mono font-bold tracking-[0.2em] text-muted-foreground uppercase">Website URL</label>
              <input type="url" id="website" className="w-full bg-transparent border-b border-foreground/20 py-3 font-primary text-xl focus:outline-none focus:border-foreground transition-colors" value={formData.website} onChange={e => setFormData({...formData, website: e.target.value})} />
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="mt-12 pt-8 border-t border-foreground/10 flex items-center justify-between">
        {step > 1 ? (
          <button type="button" onClick={prevStep} className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider hover:text-accent transition-colors">
            <ArrowLeft size={16} /> Back
          </button>
        ) : <div />}

        <button 
          type="submit"
          disabled={isSubmitting || (step === 1 && formData.needs.length === 0)}
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-5 text-sm font-mono font-bold uppercase tracking-wider hover:bg-accent hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? "PROCESSING..." : step === 4 ? "SUBMIT REQUEST" : "CONTINUE"}
          {!isSubmitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
        </button>
      </div>

    </form>
  );
}

export default function RequestProposalPage() {
  return (
    <main className="min-h-[100svh] pt-32 pb-24 md:pt-48 md:pb-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-accent mb-6 uppercase">
            Let's work together
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-primary font-bold leading-[0.9] tracking-tight uppercase">
            Request a <br />
            Proposal.
          </h1>
        </div>

        <Suspense fallback={<div className="h-96 animate-pulse bg-foreground/5" />}>
          <RfpForm />
        </Suspense>
      </div>
    </main>
  );
}
