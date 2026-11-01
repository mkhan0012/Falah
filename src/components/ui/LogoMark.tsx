import React from "react";

interface LogoMarkProps {
  className?: string;
  variant?: "light" | "dark" | "accent" | "monochrome";
  size?: number;
}

/**
 * VYOMA Geometric V Monogram
 * Inspired by horizon, elevation, and atmospheric openness.
 * Precision architectural facets forming an elevated V with a clean horizon aperture.
 */
export default function LogoMark({
  className = "w-6 h-6",
  variant = "dark",
  size,
}: LogoMarkProps) {
  // Color logic based on variant
  // "dark": for light backgrounds (Deep Atmosphere icon)
  // "light": for dark backgrounds (Cloud White / Sky Slate icon)
  // "accent": Sky Slate primary
  // "monochrome": currentColor
  const isLight = variant === "light";
  const isAccent = variant === "accent";
  const isMono = variant === "monochrome";

  const primaryColor = isMono
    ? "currentColor"
    : isLight
    ? "#F1F3F1"
    : isAccent
    ? "#7899B0"
    : "#172B3A";

  const secondaryColor = isMono
    ? "currentColor"
    : isLight
    ? "#7899B0"
    : "#7899B0";

  const accentColor = isMono ? "currentColor" : "#D3A56C"; // Warm Sand

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="VYOMA Media Monogram"
    >
      {/* Horizon Datum Line: Precision horizontal segment crossing the aperture */}
      <line
        x1="18"
        y1="46"
        x2="82"
        y2="46"
        stroke={secondaryColor}
        strokeWidth="2.5"
        strokeDasharray="4 4"
        strokeOpacity={isLight ? "0.6" : "0.5"}
        strokeLinecap="round"
      />

      {/* Left Wing of V Monogram: Solid anchor ascending from apex */}
      <path
        d="M 50 86 L 22 24 L 35 24 L 50 63 L 50 86 Z"
        fill={primaryColor}
      />

      {/* Right Wing of V Monogram: Elevated ascending beacon reaching higher */}
      <path
        d="M 50 86 L 50 63 L 65 24 L 78 14 L 62 86 Z"
        fill={secondaryColor}
      />

      {/* Horizon Aperture Keystone: Geometric chevron emphasizing elevation */}
      <polygon
        points="50,46 59,24 50,30 41,24"
        fill={primaryColor}
        opacity={isLight ? "0.9" : "0.85"}
      />

      {/* Subtle Warm Sand Elevation Marker: At the apex of the horizon aperture */}
      <circle
        cx="50"
        cy="46"
        r="3"
        fill={accentColor}
      />
    </svg>
  );
}

/**
 * Reusable full brand mark: V monogram + VYOMA wordmark + MEDIA descriptor
 */
export function VyomaBrandLogo({
  variant = "dark",
  className = "",
  orientation = "horizontal",
}: {
  variant?: "light" | "dark";
  className?: string;
  orientation?: "horizontal" | "stacked";
}) {
  const isLight = variant === "light";
  const textColor = isLight ? "text-[#F1F3F1]" : "text-[#172B3A]";
  const descriptorColor = isLight ? "text-[#7899B0]" : "text-[#7899B0]";

  if (orientation === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
        <LogoMark variant={variant} className="w-10 h-10" />
        <div className="flex flex-col items-center">
          <span
            className={`font-display font-extrabold text-2xl tracking-[0.08em] leading-none ${textColor}`}
          >
            VYOMA
          </span>
          <span
            className={`font-mono text-[9px] tracking-[0.35em] uppercase mt-1 font-semibold ${descriptorColor}`}
          >
            MEDIA
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
          isLight
            ? "bg-[#172B3A] border border-[#7899B0]/40 shadow-inner"
            : "bg-white border border-[#7899B0]/25 shadow-sm"
        }`}
      >
        <LogoMark variant={variant} className="w-5 h-5" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-display font-extrabold text-lg tracking-[0.04em] ${textColor}`}
          >
            VYOMA
          </span>
          <span
            className={`font-mono text-[10px] tracking-[0.25em] font-semibold uppercase ${descriptorColor}`}
          >
            MEDIA
          </span>
        </div>
        <span className="text-[8px] font-mono tracking-widest text-[#7899B0] uppercase mt-0.5">
          HYDERABAD · EST. 2025
        </span>
      </div>
    </div>
  );
}
