"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isManaging, setIsManaging] = useState(false);
  
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("vyoma_cookie_consent");
    if (!consent) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
    } else {
      try {
        const parsed = JSON.parse(consent);
        setPreferences((prev) => ({ ...prev, ...parsed }));
      } catch {
        // ignore JSON parse error
      }
    }

    const handleOpenPreferences = () => {
      setIsVisible(true);
      setIsManaging(true);
    };

    window.addEventListener("vyoma_open_cookie_preferences", handleOpenPreferences);
    return () => {
      window.removeEventListener("vyoma_open_cookie_preferences", handleOpenPreferences);
    };
  }, []);

  const handleAcceptAll = () => {
    const prefs = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("vyoma_cookie_consent", JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const prefs = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("vyoma_cookie_consent", JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("vyoma_cookie_consent", JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none flex justify-center md:justify-end">
      <div 
        style={{ backgroundColor: "#172B3A" }}
        className="bg-[#172B3A] text-[#F1F3F1] p-6 md:p-8 max-w-lg w-full pointer-events-auto shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-[#7899B0]/30 rounded-2xl md:rounded-3xl animate-in slide-in-from-bottom-6 duration-500 font-sans"
      >
        {!isManaging ? (
          <>
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#7899B0]/20 flex items-center justify-center border border-[#7899B0]/30 text-[#D3A56C]">
                  <Cookie size={17} />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-[#F1F3F1]">
                  Cookie Preferences
                </h3>
              </div>
              <button
                type="button"
                onClick={handleRejectAll}
                className="p-1 rounded-lg text-[#7899B0] hover:text-[#F1F3F1] hover:bg-white/10 transition-colors"
                aria-label="Close cookies notice"
              >
                <X size={18} />
              </button>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#DCE6EB] mb-6 leading-relaxed">
              We use cookies and similar technologies to improve navigation, analyze site performance, and enhance your digital experience. Read our{" "}
              <a href="/privacy-policy" className="text-[#D3A56C] hover:underline underline-offset-2">
                Privacy Policy
              </a>{" "}
              for details.
            </p>
            
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <button 
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 min-w-[120px] bg-[#D3A56C] hover:bg-[#b88c55] text-[#172B3A] font-mono text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-xl transition-all shadow-sm cursor-pointer text-center"
              >
                Accept All
              </button>
              <button 
                type="button"
                onClick={handleRejectAll}
                className="flex-1 min-w-[120px] bg-white/10 hover:bg-white/15 text-[#F1F3F1] border border-[#7899B0]/30 font-mono text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-xl transition-all cursor-pointer text-center"
              >
                Reject All
              </button>
              <button 
                type="button"
                onClick={() => setIsManaging(true)}
                className="w-full text-center mt-1 text-[#7899B0] hover:text-[#F1F3F1] font-mono text-[11px] tracking-wider uppercase transition-colors underline underline-offset-4 cursor-pointer"
              >
                Manage Preferences
              </button>
            </div>
          </>
        ) : (
          <div className="animate-in fade-in duration-300">
            <div className="flex justify-between items-center mb-5 pb-3 border-b border-[#7899B0]/20">
              <h3 className="text-base sm:text-lg font-display font-bold uppercase tracking-tight text-[#F1F3F1]">
                Manage Preferences
              </h3>
              <button 
                type="button"
                onClick={() => setIsManaging(false)} 
                className="p-1 rounded-lg text-[#7899B0] hover:text-[#F1F3F1] hover:bg-white/10 transition-colors"
                aria-label="Back"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-3 border-b border-[#7899B0]/15">
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#F1F3F1] mb-0.5">Necessary</h4>
                  <p className="text-xs text-[#DCE6EB]/70 font-sans">Required for core website security and operation.</p>
                </div>
                <div className="text-[10px] font-mono text-[#D3A56C] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#D3A56C]/10 border border-[#D3A56C]/30 shrink-0">
                  Always Active
                </div>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-[#7899B0]/15">
                <div className="pr-4">
                  <h4 className="font-sans font-bold text-sm text-[#F1F3F1] mb-0.5">Analytics</h4>
                  <p className="text-xs text-[#DCE6EB]/70 font-sans">Helps us understand how visitors interact with the site.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  />
                  <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D3A56C]"></div>
                </label>
              </div>

              <div className="flex justify-between items-center pb-1">
                <div className="pr-4">
                  <h4 className="font-sans font-bold text-sm text-[#F1F3F1] mb-0.5">Marketing</h4>
                  <p className="text-xs text-[#DCE6EB]/70 font-sans">Used to deliver relevant messaging and track campaigns.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  />
                  <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D3A56C]"></div>
                </label>
              </div>
            </div>

            <div className="flex gap-2.5">
              <button 
                type="button"
                onClick={handleSavePreferences}
                className="flex-1 bg-[#D3A56C] hover:bg-[#b88c55] text-[#172B3A] font-mono text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-xl transition-all shadow-sm cursor-pointer text-center"
              >
                Save Preferences
              </button>
              <button 
                type="button"
                onClick={() => setIsManaging(false)}
                className="bg-white/10 hover:bg-white/15 text-[#F1F3F1] border border-[#7899B0]/30 font-mono text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-xl transition-all cursor-pointer text-center"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
