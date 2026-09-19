"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

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
    const consent = localStorage.getItem("falah_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const prefs = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("falah_cookie_consent", JSON.stringify(prefs));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const prefs = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("falah_cookie_consent", JSON.stringify(prefs));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("falah_cookie_consent", JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none flex justify-center md:justify-end">
      <div className="bg-charcoal text-ivory p-6 md:p-8 max-w-lg w-full pointer-events-auto shadow-2xl border border-ivory/10 animate-in slide-in-from-bottom-8 duration-700">
        
        {!isManaging ? (
          <>
            <h3 className="text-xl font-primary font-bold mb-4 uppercase tracking-tighter">WE USE COOKIES</h3>
            <p className="font-primary text-ivory/70 text-sm mb-8 leading-relaxed">
              We use cookies and similar technologies to understand website usage, improve your experience, and provide relevant content.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={handleAcceptAll}
                className="flex-1 bg-vermilion hover:bg-ivory text-charcoal font-mono text-xs font-bold uppercase tracking-widest px-4 py-3 transition-colors"
              >
                ACCEPT
              </button>
              <button 
                onClick={handleRejectAll}
                className="flex-1 border border-ivory/20 hover:bg-ivory hover:text-charcoal font-mono text-xs font-bold uppercase tracking-widest px-4 py-3 transition-colors"
              >
                REJECT
              </button>
              <button 
                onClick={() => setIsManaging(true)}
                className="w-full mt-2 text-ivory/50 hover:text-ivory font-mono text-xs tracking-widest uppercase transition-colors underline underline-offset-4"
              >
                MANAGE PREFERENCES
              </button>
            </div>
          </>
        ) : (
          <div className="animate-in fade-in duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-primary font-bold uppercase tracking-tighter">COOKIE PREFERENCES</h3>
              <button onClick={() => setIsManaging(false)} className="text-ivory/50 hover:text-ivory transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-ivory/10">
                <div>
                  <h4 className="font-primary font-bold mb-1">Necessary</h4>
                  <p className="text-xs text-ivory/50 font-primary">Required for the website to function.</p>
                </div>
                <div className="text-xs font-mono text-ivory/30 uppercase tracking-widest">Always Active</div>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-ivory/10">
                <div>
                  <h4 className="font-primary font-bold mb-1">Analytics</h4>
                  <p className="text-xs text-ivory/50 font-primary">Help us understand how visitors interact with the site.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                  />
                  <div className="w-11 h-6 bg-ivory/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vermilion"></div>
                </label>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-primary font-bold mb-1">Marketing</h4>
                  <p className="text-xs text-ivory/50 font-primary">Used to deliver tailored advertising.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                  />
                  <div className="w-11 h-6 bg-ivory/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vermilion"></div>
                </label>
              </div>
            </div>

            <button 
              onClick={handleSavePreferences}
              className="w-full bg-ivory hover:bg-vermilion text-charcoal hover:text-ivory font-mono text-xs font-bold uppercase tracking-widest px-4 py-4 transition-colors"
            >
              SAVE PREFERENCES
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
