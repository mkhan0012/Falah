"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import gsap from 'gsap';

export default function ImageLightbox({ 
  src, 
  alt, 
  className = "",
  fill = false
}: { 
  src: string; 
  alt: string; 
  className?: string;
  fill?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div 
        className="w-full h-full cursor-pointer group" 
        onClick={openLightbox}
        data-cursor="pointer"
      >
        <Image 
          src={src} 
          alt={alt} 
          fill={fill} 
          className={`${className} transition-transform duration-700 group-hover:scale-[1.02]`} 
        />
        <div className="absolute inset-0 bg-graphite/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-ivory font-mono text-xs tracking-widest px-4 py-2 border border-ivory/30 bg-graphite/40 backdrop-blur-sm uppercase">Click to Enlarge</span>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[99999] bg-graphite/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-ivory/60 hover:text-ivory transition-colors z-[100000]"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <div 
            className="relative w-full h-full max-w-7xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={src} 
              alt={alt} 
              fill 
              className="object-contain" 
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  );
}
