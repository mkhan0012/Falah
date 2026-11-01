"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { submitContact } from "../actions/submitContact";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Phone,
  MessageSquare,
  Sparkles,
  RotateCcw,
  Home,
} from "lucide-react";
import clsx from "clsx";
import { siteConfig } from "@/config/site";

function RfpForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initialFormData = {
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
    honeypot: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const needsOptions = [
    "Brand Positioning & Identity",
    "High-Converting Web System",
    "Technical SEO & GEO",
    "Performance Marketing & Ads",
    "Full-Funnel Growth Architecture",
    "Creative Direction & Motion",
    "Other Custom Solution",
  ];

  const budgetOptions = [
    "Under ₹1.5L",
    "₹1.5L - ₹3.5L",
    "₹3.5L - ₹7.5L",
    "₹7.5L+",
  ];

  const typeOptions = [
    "Seed / Early-Stage Startup",
    "Established Business / SME",
    "Industrial / B2B Manufacturer",
    "Healthcare Clinic / Specialist",
    "Real Estate Developer",
    "Consumer Brand / D2C",
    "Film / Entertainment Entity",
    "Other Commercial Entity",
  ];

  const timelineOptions = [
    "Urgent (Within 3 weeks)",
    "Standard (4-8 weeks)",
    "Strategic (Q1/Q2 Roadmap)",
    "Flexible / Exploring",
  ];

  const toggleNeed = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter((n) => n !== need)
        : [...prev.needs, need],
    }));
  };

  const nextStep = () => {
    setError(null);
    setStep((prev) => Math.min(prev + 1, 4));
  };
  const prevStep = () => {
    setError(null);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setStep(1);
    setIsSuccess(false);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      nextStep();
      return;
    }

    if (formData.honeypot) {
      setIsSuccess(true);
      return;
    }

    if (!formData.name || !formData.email) {
      setError("Please provide your name and work email.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        website: formData.website,
        budget: formData.budget,
        timeline: formData.timeline,
        needs: formData.needs,
        message: `Business Type: ${formData.businessType || "N/A"}\n\nProject Goals & Requirements:\n${formData.goals}\n\nSelected Needs: ${formData.needs.join(", ")}`,
        honeypot: formData.honeypot,
      });

      if (res.success) {
        setIsSuccess(true);
      } else {
        setError(res.error || "Submission failed. Please try again or reach out directly.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="py-12 md:py-20 text-center animate-in zoom-in-95 duration-500 max-w-xl mx-auto">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#172B3A] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
          <Check className="w-8 h-8 md:w-10 md:h-10 text-[#7899B0]" />
        </div>

        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#7899B0]/30 bg-white text-[#172B3A] font-mono text-xs uppercase tracking-widest font-semibold mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#D3A56C]" /> Request Transmitted
        </span>

        <h3 className="text-2xl md:text-4xl font-display font-extrabold text-[#172B3A] mb-3 uppercase tracking-tight">
          Proposal Inquiry Received.
        </h3>
        <p className="text-[#30383D] font-sans text-sm md:text-base leading-relaxed mb-8">
          Thank you for providing your project parameters. A partner at VYOMA Media will review your requirements and formulate a bespoke strategic brief within 24 hours.
        </p>

        <div className="p-6 rounded-2xl bg-[#DCE6EB]/40 border border-[#7899B0]/25 text-left mb-8 space-y-3 font-mono text-xs">
          <div className="text-[#172B3A] font-bold uppercase tracking-wider border-b border-[#7899B0]/20 pb-2">
            Scope Summary
          </div>
          <div className="text-[#30383D]">
            <span className="text-[#7899B0]">Selected Capabilities:</span>{" "}
            {formData.needs.join(", ")}
          </div>
          {formData.budget && (
            <div className="text-[#30383D]">
              <span className="text-[#7899B0]">Target Allocation:</span> {formData.budget}
            </div>
          )}
          {formData.timeline && (
            <div className="text-[#30383D]">
              <span className="text-[#7899B0]">Deployment Window:</span> {formData.timeline}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#7899B0]/30 hover:border-[#172B3A] text-xs font-mono font-bold text-[#172B3A] uppercase tracking-wider transition-colors bg-white shadow-sm"
          >
            <RotateCcw size={14} /> Submit Another Scope
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#172B3A] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#20394c] transition-all shadow-md"
          >
            <Home size={14} /> Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Progress Indicator */}
      <div className="border-b border-[#7899B0]/20 pb-6 mb-8">
        <div className="flex items-center justify-between text-xs font-mono mb-3">
          <span className="text-[#172B3A] font-bold uppercase tracking-wider">
            STEP 0{step} OF 04
          </span>
          <span className="text-[#7899B0]">
            {step === 1 && "CORE OBJECTIVES"}
            {step === 2 && "BUSINESS CONTEXT"}
            {step === 3 && "TIMELINE & SCOPE"}
            {step === 4 && "CONTACT INFORMATION"}
          </span>
        </div>
        <div className="w-full bg-[#7899B0]/20 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-[#172B3A] h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
          {error}
        </div>
      )}

      {/* Honeypot hidden input */}
      <input
        type="text"
        name="honeypot"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
      />

      {/* STEP 1: Needs Selection */}
      {step === 1 && (
        <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#172B3A] mb-2">
              What capabilities are you commissioning?
            </h2>
            <p className="text-[#30383D] text-sm">
              Select all disciplines that apply to your current growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {needsOptions.map((opt) => {
              const selected = formData.needs.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleNeed(opt)}
                  className={clsx(
                    "p-4 rounded-2xl text-left border transition-all flex items-center justify-between",
                    selected
                      ? "bg-[#172B3A] text-white border-[#172B3A] shadow-sm"
                      : "bg-[#F1F3F1]/60 border-[#7899B0]/25 text-[#172B3A] hover:border-[#172B3A]"
                  )}
                >
                  <span className="font-display font-semibold text-sm">{opt}</span>
                  <div
                    className={clsx(
                      "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                      selected
                        ? "border-[#7899B0] bg-[#7899B0] text-[#172B3A]"
                        : "border-[#7899B0]/40"
                    )}
                  >
                    {selected && <Check size={12} strokeWidth={3} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 2: Business Context */}
      {step === 2 && (
        <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#172B3A] mb-2">
              What type of organization are you building?
            </h2>
            <p className="text-[#30383D] text-sm">
              Helps us configure the exact regulatory and industry framework.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {typeOptions.map((opt) => {
              const selected = formData.businessType === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setFormData({ ...formData, businessType: opt })}
                  className={clsx(
                    "p-4 rounded-2xl text-left border transition-all",
                    selected
                      ? "bg-[#172B3A] text-white border-[#172B3A] shadow-sm font-semibold"
                      : "bg-[#F1F3F1]/60 border-[#7899B0]/25 text-[#172B3A] hover:border-[#172B3A]"
                  )}
                >
                  <span className="font-display text-sm">{opt}</span>
                </button>
              );
            })}
          </div>

          <div className="space-y-2 pt-2">
            <label className="text-xs font-mono font-bold tracking-wider text-[#172B3A] uppercase">
              Core Commercial Goals & Challenges
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Outgrowing offline referral channels, seeking category-dominant brand positioning..."
              className="w-full bg-[#F1F3F1]/60 border border-[#7899B0]/25 rounded-2xl p-4 font-sans text-sm text-[#172B3A] focus:outline-none focus:border-[#172B3A] transition-colors resize-none"
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
            />
          </div>
        </div>
      )}

      {/* STEP 3: Timeline & Budget */}
      {step === 3 && (
        <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#172B3A] mb-2">
              Timeline & Target Allocation
            </h2>
            <p className="text-[#30383D] text-sm">
              We tailor the initial blueprint to respect your operational horizon.
            </p>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-mono font-bold tracking-wider text-[#172B3A] uppercase">
              Target Investment Bracket
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {budgetOptions.map((opt) => {
                const selected = formData.budget === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: opt })}
                    className={clsx(
                      "p-3 rounded-2xl text-center font-mono text-xs font-semibold border transition-all",
                      selected
                        ? "bg-[#172B3A] text-white border-[#172B3A] shadow-sm font-bold"
                        : "bg-[#F1F3F1]/60 border-[#7899B0]/25 text-[#172B3A] hover:border-[#172B3A]"
                    )}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <label className="text-xs font-mono font-bold tracking-wider text-[#172B3A] uppercase">
              Target Deployment Window
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {timelineOptions.map((opt) => {
                const selected = formData.timeline === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: opt })}
                    className={clsx(
                      "p-3 rounded-2xl text-center font-mono text-xs font-medium border transition-all",
                      selected
                        ? "bg-[#172B3A] text-white border-[#172B3A] shadow-sm font-bold"
                        : "bg-[#F1F3F1]/60 border-[#7899B0]/25 text-[#172B3A] hover:border-[#172B3A]"
                    )}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: Contact Details */}
      {step === 4 && (
        <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#172B3A] mb-2">
              Where should we send your strategic proposal?
            </h2>
            <p className="text-[#30383D] text-sm">
              We respect your privacy. No automated sales emails or third-party sharing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label
                htmlFor="rfp-name"
                className="text-xs font-mono font-bold tracking-wider text-[#30383D] uppercase"
              >
                Full Name <span className="text-[#172B3A]">*</span>
              </label>
              <input
                type="text"
                id="rfp-name"
                required
                placeholder="e.g. Priya Sharma"
                className="w-full bg-[#F1F3F1]/60 border border-[#7899B0]/25 rounded-xl px-4 py-3 font-sans text-sm text-[#172B3A] focus:outline-none focus:border-[#172B3A] transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="rfp-email"
                className="text-xs font-mono font-bold tracking-wider text-[#30383D] uppercase"
              >
                Work Email <span className="text-[#172B3A]">*</span>
              </label>
              <input
                type="email"
                id="rfp-email"
                required
                placeholder="priya@company.com"
                className="w-full bg-[#F1F3F1]/60 border border-[#7899B0]/25 rounded-xl px-4 py-3 font-sans text-sm text-[#172B3A] focus:outline-none focus:border-[#172B3A] transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="rfp-phone"
                className="text-xs font-mono font-bold tracking-wider text-[#30383D] uppercase"
              >
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                id="rfp-phone"
                placeholder="+91 98765 43210"
                className="w-full bg-[#F1F3F1]/60 border border-[#7899B0]/25 rounded-xl px-4 py-3 font-sans text-sm text-[#172B3A] focus:outline-none focus:border-[#172B3A] transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="rfp-company"
                className="text-xs font-mono font-bold tracking-wider text-[#30383D] uppercase"
              >
                Company Name
              </label>
              <input
                type="text"
                id="rfp-company"
                placeholder="Acme Industrial Ltd."
                className="w-full bg-[#F1F3F1]/60 border border-[#7899B0]/25 rounded-xl px-4 py-3 font-sans text-sm text-[#172B3A] focus:outline-none focus:border-[#172B3A] transition-colors"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label
                htmlFor="rfp-website"
                className="text-xs font-mono font-bold tracking-wider text-[#30383D] uppercase"
              >
                Current Website URL (if any)
              </label>
              <input
                type="url"
                id="rfp-website"
                placeholder="https://company.com"
                className="w-full bg-[#F1F3F1]/60 border border-[#7899B0]/25 rounded-xl px-4 py-3 font-sans text-sm text-[#172B3A] focus:outline-none focus:border-[#172B3A] transition-colors"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="pt-6 border-t border-[#7899B0]/20 flex items-center justify-between gap-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#7899B0]/30 hover:border-[#172B3A] text-xs font-mono font-semibold text-[#30383D] hover:text-[#172B3A] transition-colors bg-white shadow-sm"
          >
            <ArrowLeft size={15} /> Back
          </button>
        ) : (
          <div />
        )}

        <button
          type="submit"
          disabled={isSubmitting || (step === 1 && formData.needs.length === 0)}
          className="inline-flex items-center gap-2 bg-[#172B3A] text-white px-8 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#20394c] transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
        >
          {isSubmitting
            ? "TRANSMITTING..."
            : step === 4
            ? "SUBMIT PROPOSAL REQUEST"
            : "CONTINUE"}
          {!isSubmitting && <ArrowRight size={15} className="text-[#7899B0]" />}
        </button>
      </div>
    </form>
  );
}

export default function RequestProposalPage() {
  return (
    <main className="min-h-screen pt-36 md:pt-44 pb-32 px-6 bg-[#F1F3F1] text-[#30383D] selection:bg-[#7899B0] selection:text-white relative overflow-hidden font-sans">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#7899B0]/30 bg-white text-[#172B3A] font-mono text-xs uppercase tracking-widest mb-6 font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D3A56C]" />
            <span>STRUCTURED REQUEST FOR PROPOSAL</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[0.98] tracking-tight uppercase text-[#172B3A]">
            REQUEST A <br />
            <span className="text-[#7899B0]">PROPOSAL.</span>
          </h1>

          <p className="mt-4 text-[#30383D] font-sans text-base md:text-lg max-w-xl leading-relaxed">
            Tell us about your brand vision, target commercial outcomes, and timeline. Our leadership team will review your specifications and formulate a bespoke architecture proposal within 24 hours.
          </p>
        </div>

        <div className="rounded-3xl border border-[#7899B0]/25 bg-white p-6 sm:p-10 md:p-12 shadow-sm">
          <Suspense
            fallback={<div className="h-96 animate-pulse bg-[#F1F3F1] rounded-2xl" />}
          >
            <RfpForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
