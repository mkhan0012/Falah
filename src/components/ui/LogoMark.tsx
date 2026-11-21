import React from "react";
import Image from "next/image";

interface LogoMarkProps {
  className?: string;
  variant?: "light" | "dark" | "accent" | "monochrome" | "gradient";
  size?: number;
}

/**
 * VYOMA Official Monogram
 * Iconic rounded V crowned by the radiant golden sun circle.
 * Exact geometry and proportions matching the official brand mark.
 */
export default function LogoMark({
  className = "w-6 h-6",
  variant = "dark",
  size,
}: LogoMarkProps) {
  const isLight = variant === "light";
  const isMono = variant === "monochrome";
  const isGradient = variant === "gradient";

  // Brand Colors
  const vColor = isMono
    ? "currentColor"
    : isLight
    ? "#FFFFFF"
    : "#0B1736";

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="VYOMA Media Official Monogram"
    >
      <defs>
        {/* Subtle 3D gradient for high-fidelity brand presentation */}
        <linearGradient id="vyomaSunGrad" x1="50" y1="11" x2="50" y2="33" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFC805" />
          <stop offset="100%" stopColor="#FE9B00" />
        </linearGradient>

        <linearGradient id="vyomaVGradDark" x1="26" y1="40" x2="74" y2="84" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B1D47" />
          <stop offset="50%" stopColor="#061233" />
          <stop offset="100%" stopColor="#02091F" />
        </linearGradient>

        <linearGradient id="vyomaVGradLight" x1="26" y1="40" x2="74" y2="84" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EEF2F6" />
        </linearGradient>
      </defs>

      {/* Radiant Golden Sun / Sphere (Surya beacon) */}
      <circle
        cx="50"
        cy="22"
        r="11"
        fill={isMono ? "currentColor" : "url(#vyomaSunGrad)"}
      />

      {/* Smooth Rounded V Mark */}
      <path
        d="M 26.5 40.5 L 50 83 L 73.5 40.5"
        fill="none"
        stroke={
          isMono
            ? "currentColor"
            : isGradient
            ? isLight
              ? "url(#vyomaVGradLight)"
              : "url(#vyomaVGradDark)"
            : vColor
        }
        strokeWidth="13.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Reusable full brand mark:
 * Official V + Sun Monogram + "vyoma" Wordmark + "— MEDIA —" Subtitle
 */
export function VyomaBrandLogo({
  variant = "dark",
  className = "",
  orientation = "horizontal",
  useImage = false,
}: {
  variant?: "light" | "dark";
  className?: string;
  orientation?: "horizontal" | "stacked";
  useImage?: boolean;
}) {
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-[#0B1736]";

  if (useImage) {
    const src = isLight ? "/vyoma-logo-white.png" : "/vyoma-logo.png";
    return (
      <div className={`relative inline-block ${className}`}>
        <Image
          src={src}
          alt="Vyoma Media"
          width={280}
          height={84}
          priority
          className="h-8 sm:h-9 w-auto object-contain"
        />
      </div>
    );
  }

  if (orientation === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center gap-2.5 ${className}`}>
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
            isLight
              ? "bg-[#061233] border border-white/10 shadow-lg shadow-black/20"
              : "bg-white border border-[#0B1736]/10 shadow-sm"
          }`}
        >
          <LogoMark variant={variant} className="w-8 h-8" />
        </div>
        <div className="flex flex-col items-center">
          <span
            className={`font-display font-extrabold text-2xl tracking-[0.02em] leading-none ${textColor}`}
          >
            vyoma
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-3 h-[1px] bg-[#FEB005]" />
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase font-bold text-[#FEB005]">
              MEDIA
            </span>
            <span className="w-3 h-[1px] bg-[#FEB005]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center transition-all ${
          isLight
            ? "bg-[#02103D] border border-white/15 shadow-md shadow-black/30"
            : "bg-white border border-[#0B1736]/10 shadow-sm"
        }`}
      >
        <LogoMark variant={variant} className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
      </div>
      <div className="flex flex-col justify-center">
        <span
          className={`font-display font-extrabold text-lg sm:text-xl tracking-[0.02em] leading-tight ${textColor}`}
        >
          vyoma
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-3 h-[1.5px] bg-[#FEB005]" />
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.3em] font-extrabold text-[#FEB005] uppercase leading-none">
            MEDIA
          </span>
          <span className="w-3 h-[1.5px] bg-[#FEB005]" />
        </div>
      </div>
    </div>
  );
}
