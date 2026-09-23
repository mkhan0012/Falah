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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-ivory w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-6 md:p-8 border-b border-warm-grey bg-white">
          <div>
            <p className="text-[10px] font-mono tracking-widest text-slate uppercase mb-1">Applying for</p>
            <h2 className="text-2xl font-primary font-bold text-graphite">{roleTitle}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-warm-grey rounded-full transition-colors">
            <X size={24} className="text-slate" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 size={64} className="text-green-500 mb-6" />
              <h3 className="text-3xl font-primary font-bold text-graphite mb-4">Application Received</h3>
              <p className="text-slate text-lg max-w-md">
                Thank you for applying. We have received your details and resume. Our team will review your application and get back to you shortly.
              </p>
              <button 
                onClick={onClose}
                className="mt-8 border border-graphite px-8 py-4 text-sm font-mono font-bold uppercase tracking-widest hover:bg-graphite hover:text-ivory transition-colors"
              >
                CLOSE WINDOW
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold tracking-widest uppercase text-slate">Full Name *</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-warm-grey p-4 font-primary text-graphite focus:outline-none focus:border-vermilion transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold tracking-widest uppercase text-slate">Email Address *</label>
                  <input 
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-warm-grey p-4 font-primary text-graphite focus:outline-none focus:border-vermilion transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold tracking-widest uppercase text-slate">Upload Resume (PDF, DOCX) *</label>
                <div className="border border-warm-grey border-dashed p-4 flex items-center justify-center bg-white hover:border-vermilion transition-colors relative cursor-pointer group">
                  <input 
                    type="file" 
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex items-center gap-3 text-slate group-hover:text-vermilion transition-colors">
                    <UploadCloud size={20} />
                    <span className="font-mono text-sm tracking-widest uppercase">
                      {resumeFile ? resumeFile.name : "CHOOSE FILE OR DRAG & DROP"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold tracking-widest uppercase text-slate">Portfolio URL</label>
                  <input 
                    name="portfolioUrl"
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                    className="border border-warm-grey p-4 font-primary text-graphite focus:outline-none focus:border-vermilion transition-colors"
                    placeholder="https://"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold tracking-widest uppercase text-slate">LinkedIn URL *</label>
                  <input 
                    required
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleChange}
                    className="border border-warm-grey p-4 font-primary text-graphite focus:outline-none focus:border-vermilion transition-colors"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold tracking-widest uppercase text-slate">Cover Letter / Why Falah? *</label>
                <textarea 
                  required
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={4}
                  className="border border-warm-grey p-4 font-primary text-graphite focus:outline-none focus:border-vermilion transition-colors resize-none"
                  placeholder="Tell us about yourself and why you're a perfect fit..."
                />
              </div>

              <div className="pt-4 mt-2 border-t border-warm-grey">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-graphite hover:bg-vermilion text-ivory px-8 py-5 font-mono text-sm font-bold uppercase tracking-widest transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : "SUBMIT APPLICATION"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
