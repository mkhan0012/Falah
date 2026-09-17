"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import FaqSection from "@/components/sections/FaqSection";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    needs: [] as string[],
    budget: "",
    timeline: "",
    message: ""
  });

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
    "Not sure yet"
  ];

  const toggleNeed = (need: string) => {
    setFormData(prev => ({
      ...prev,
      needs: prev.needs.includes(need) 
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <>
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-5">
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-12">
                LET&apos;S BUILD <br />
                <span className="text-foreground/40 italic">SOMETHING DISTINCTIVE.</span>
              </h1>
              
              <div className="space-y-8 text-lg">
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-foreground/40 uppercase mb-2">Location</h4>
                  <p>HYDERABAD Â· INDIA</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-foreground/40 uppercase mb-2">Email</h4>
                  <a href="mailto:hello@falahbrandhouse.com" className="hover:text-accent transition-colors">hello@falahbrandhouse.com</a>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-foreground/40 uppercase mb-2">Phone</h4>
                  <a href="tel:+919876543210" className="hover:text-accent transition-colors">+91 98765 43210</a>
                </div>
                
                <div className="pt-8 border-t border-white/10 flex gap-6">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors font-bold text-sm">
                    LinkedIn <ArrowUpRight size={16} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors font-bold text-sm">
                    Instagram <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="lg:col-span-7">
              {isSuccess ? (
                <div className="h-full flex flex-col justify-center items-center text-center p-12 bg-white/5 rounded-3xl border border-white/10">
                  <div className="w-20 h-20 bg-accent text-background rounded-full flex items-center justify-center mb-8">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-serif mb-4">Thanks. We&apos;ve received your project brief.</h3>
                  <p className="text-foreground/60 text-lg mb-8">
                    We&apos;ll review the details and get back to you within 24 hours to schedule an introductory call.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-sm font-bold tracking-widest uppercase border-b border-foreground/20 pb-1 hover:border-foreground transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold tracking-widest text-foreground/40 uppercase">Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-transparent border-b border-foreground/20 py-3 text-lg focus:outline-none focus:border-accent transition-colors"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold tracking-widest text-foreground/40 uppercase">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-transparent border-b border-foreground/20 py-3 text-lg focus:outline-none focus:border-accent transition-colors"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold tracking-widest text-foreground/40 uppercase">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full bg-transparent border-b border-foreground/20 py-3 text-lg focus:outline-none focus:border-accent transition-colors"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-bold tracking-widest text-foreground/40 uppercase">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        className="w-full bg-transparent border-b border-foreground/20 py-3 text-lg focus:outline-none focus:border-accent transition-colors"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="website" className="text-xs font-bold tracking-widest text-foreground/40 uppercase">Current Website (if any)</label>
                      <input 
                        type="url" 
                        id="website" 
                        className="w-full bg-transparent border-b border-foreground/20 py-3 text-lg focus:outline-none focus:border-accent transition-colors"
                        value={formData.website}
                        onChange={e => setFormData({...formData, website: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold tracking-widest text-foreground/40 uppercase">What do you need? *</label>
                    <div className="flex flex-wrap gap-3">
                      {needsOptions.map(need => (
                        <button
                          key={need}
                          type="button"
                          onClick={() => toggleNeed(need)}
                          className={clsx(
                            "px-4 py-2 text-sm rounded-full border transition-all duration-300",
                            formData.needs.includes(need)
                              ? "border-accent bg-accent text-background"
                              : "border-foreground/20 text-foreground hover:border-foreground/50"
                          )}
                        >
                          {need}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold tracking-widest text-foreground/40 uppercase">Budget Range</label>
                    <div className="flex flex-wrap gap-3">
                      {budgetOptions.map(budget => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData({...formData, budget})}
                          className={clsx(
                            "px-4 py-2 text-sm rounded-full border transition-all duration-300",
                            formData.budget === budget
                              ? "border-accent bg-accent text-background"
                              : "border-foreground/20 text-foreground hover:border-foreground/50"
                          )}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-xs font-bold tracking-widest text-foreground/40 uppercase">Timeline expectations</label>
                    <input 
                      type="text" 
                      id="timeline" 
                      placeholder="e.g. Next month, Q3, ASAP"
                      className="w-full bg-transparent border-b border-foreground/20 py-3 text-lg focus:outline-none focus:border-accent transition-colors"
                      value={formData.timeline}
                      onChange={e => setFormData({...formData, timeline: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold tracking-widest text-foreground/40 uppercase">Tell us about your project *</label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-foreground/20 py-3 text-lg focus:outline-none focus:border-accent transition-colors resize-none"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting || formData.needs.length === 0}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background px-10 py-5 rounded-full font-bold text-lg hover:bg-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "SENDING..." : "SEND ENQUIRY"} <ArrowUpRight size={20} />
                  </button>
                  
                  <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <FaqSection />
    </>
  );
}