"use client";

import { useState } from "react";
import { Loader2, X, CheckCircle2, UploadCloud } from "lucide-react";

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  roleTitle: string;
}

export default function JobApplicationModal({ isOpen, onClose, roleTitle }: JobApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolioUrl: "",
    linkedinUrl: "",
    coverLetter: "",
  });
  
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("portfolioUrl", formData.portfolioUrl);
    data.append("linkedinUrl", formData.linkedinUrl);
    data.append("coverLetter", formData.coverLetter);
    data.append("role", roleTitle);
    
    if (resumeFile) {
      data.append("resume", resumeFile);
    }

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });
      
      if (res.ok) {
        setIsSuccess(true);
      } else if (res.status === 413) {
        alert("Your resume file is too large. Please upload a file smaller than 5MB.");
      } else if (res.status === 429) {
        alert("Too many applications submitted. Please try again later.");
      } else if (res.status === 400) {
        const errorData = await res.json();
        alert(`Validation error: ${errorData.error || "Please fill all required fields."}`);
      } else {
        alert("Server error: Unable to process application. Please try again later.");
      }
    } catch {
      alert("Failed to submit application. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="absolute inset-0 bg-deep-atmosphere/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white border border-mist-blue text-deep-atmosphere w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10 animate-in zoom-in-95 duration-200 font-sans">
        <div className="flex justify-between items-center p-6 md:p-8 border-b border-mist-blue bg-cloud-white">
          <div>
            <p className="text-[10px] font-mono tracking-widest text-sky-slate uppercase mb-1 font-semibold">Applying for Role</p>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-deep-atmosphere">{roleTitle}</h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-mist-blue/30 rounded-full text-graphite/60 hover:text-deep-atmosphere transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-2">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-deep-atmosphere">Application Received</h3>
              <p className="text-graphite/80 text-sm sm:text-base max-w-md leading-relaxed font-sans">
                Thank you for applying. We have received your portfolio details and resume. Our team reviews all applications manually and will respond within 48 hours.
              </p>
              <button 
                onClick={onClose}
                className="mt-6 bg-deep-atmosphere hover:bg-sky-slate text-white px-8 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md"
              >
                CLOSE WINDOW
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold tracking-wider uppercase text-graphite/60">Full Name *</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rohan Sharma"
                    className="bg-cloud-white border border-mist-blue rounded-xl p-3.5 font-sans text-sm text-deep-atmosphere placeholder-graphite/40 focus:outline-none focus:border-sky-slate transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold tracking-wider uppercase text-graphite/60">Email Address *</label>
                  <input 
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rohan@example.com"
                    className="bg-cloud-white border border-mist-blue rounded-xl p-3.5 font-sans text-sm text-deep-atmosphere placeholder-graphite/40 focus:outline-none focus:border-sky-slate transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold tracking-wider uppercase text-graphite/60">Upload Resume (PDF, DOCX) *</label>
                <div className="border border-mist-blue border-dashed rounded-xl p-6 flex items-center justify-center bg-cloud-white/50 hover:border-sky-slate transition-colors relative cursor-pointer group">
                  <input 
                    type="file" 
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex items-center gap-3 text-graphite/70 group-hover:text-deep-atmosphere transition-colors">
                    <UploadCloud size={20} className="text-sky-slate" />
                    <span className="font-mono text-xs tracking-wider uppercase">
                      {resumeFile ? resumeFile.name : "CHOOSE RESUME FILE OR DRAG & DROP"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold tracking-wider uppercase text-graphite/60">Portfolio / GitHub URL</label>
                  <input 
                    name="portfolioUrl"
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                    className="bg-cloud-white border border-mist-blue rounded-xl p-3.5 font-sans text-sm text-deep-atmosphere placeholder-graphite/40 focus:outline-none focus:border-sky-slate transition-colors"
                    placeholder="https://..."
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold tracking-wider uppercase text-graphite/60">LinkedIn URL *</label>
                  <input 
                    required
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleChange}
                    className="bg-cloud-white border border-mist-blue rounded-xl p-3.5 font-sans text-sm text-deep-atmosphere placeholder-graphite/40 focus:outline-none focus:border-sky-slate transition-colors"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold tracking-wider uppercase text-graphite/60">Cover Letter / Statement *</label>
                <textarea 
                  required
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={4}
                  className="bg-cloud-white border border-mist-blue rounded-xl p-3.5 font-sans text-sm text-deep-atmosphere placeholder-graphite/40 focus:outline-none focus:border-sky-slate transition-colors resize-none"
                  placeholder="Tell us about yourself and why you want to build systems at Vyoma Media..."
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-deep-atmosphere hover:bg-sky-slate text-white py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex justify-center items-center gap-2 shadow-md disabled:opacity-40"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : "SUBMIT APPLICATION"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
