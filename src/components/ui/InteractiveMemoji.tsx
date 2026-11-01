"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface InteractiveMemojiProps {
  type: "moshin" | "zainab";
}

export default function InteractiveMemoji({ type }: InteractiveMemojiProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pupilRef1 = useRef<SVGCircleElement>(null);
  const pupilRef2 = useRef<SVGCircleElement>(null);
  const headRef = useRef<SVGGElement>(null); // Slight head movement

  useEffect(() => {
    const ctx = gsap.context(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        
        // Get container center
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance and angle from center to mouse
        const diffX = e.clientX - centerX;
        const diffY = e.clientY - centerY;
        
        // Normalize for pupil movement (limit the distance)
        const maxPupilMove = 5;
        const angle = Math.atan2(diffY, diffX);
        const distance = Math.min(Math.sqrt(diffX*diffX + diffY*diffY) / 20, maxPupilMove);
        
        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        // Move the pupils
        gsap.to([pupilRef1.current, pupilRef2.current], {
          x: pupilX,
          y: pupilY,
          duration: 0.2,
          ease: "power2.out"
        });

        // Add a very subtle head tilt for extra realism
        const headX = (e.clientX / window.innerWidth - 0.5) * 5;
        const headY = (e.clientY / window.innerHeight - 0.5) * 5;
        gsap.to(headRef.current, {
          x: headX,
          y: headY,
          rotationY: headX * 2,
          rotationX: -headY * 2,
          duration: 0.5,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    });
    
    return () => ctx.revert();
  }, []);

  // Shared colors
  const skinColor = "#FFD3B6";
  const eyeColor = "#FFFFFF";
  const pupilColor = "#2C1B18";
  
  // Specific styling
  const hairColor = type === "moshin" ? "#2C1B18" : "#4A2F24";

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center relative overflow-visible bg-gray-100 rounded-full border-4 border-white shadow-lg">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible p-2">
        <g ref={headRef} className="will-change-transform" style={{ transformOrigin: "50% 50%" }}>
          {/* Back Hair (Zainab) */}
          {type === "zainab" && (
            <path d="M20,40 Q10,70 15,90 L85,90 Q90,70 80,40 Z" fill={hairColor} />
          )}

          {/* Face Base */}
          <path d="M20,40 Q20,10 50,10 Q80,10 80,40 Q80,80 50,85 Q20,80 20,40 Z" fill={skinColor} />

          {/* Hair Front */}
          {type === "moshin" ? (
             <path d="M18,40 Q18,5 50,5 Q82,5 82,40 Q82,25 50,20 Q18,25 18,40 Z" fill={hairColor} />
          ) : (
             <path d="M18,45 Q15,5 50,5 Q85,5 82,45 Q65,15 50,18 Q35,15 18,45 Z" fill={hairColor} />
          )}

          {/* Ears */}
          <circle cx="18" cy="45" r="6" fill={skinColor} />
          <circle cx="82" cy="45" r="6" fill={skinColor} />

          {/* Eyebrows */}
          {type === "moshin" ? (
            <g stroke={hairColor} strokeWidth="3" strokeLinecap="round" fill="none">
              <path d="M30,35 Q37,33 43,36" />
              <path d="M57,36 Q63,33 70,35" />
            </g>
          ) : (
            <g stroke={hairColor} strokeWidth="2" strokeLinecap="round" fill="none">
              <path d="M30,36 Q37,32 43,37" />
              <path d="M57,37 Q63,32 70,36" />
            </g>
          )}

          {/* Eyes Base (Whites) */}
          <ellipse cx="36" cy="45" rx="6" ry="7" fill={eyeColor} />
          <ellipse cx="64" cy="45" rx="6" ry="7" fill={eyeColor} />

          {/* Eye clip paths so pupils don't go outside the eye */}
          <clipPath id={"eye-clip-l-" + type}>
            <ellipse cx="36" cy="45" rx="5.5" ry="6.5" />
          </clipPath>
          <clipPath id={"eye-clip-r-" + type}>
            <ellipse cx="64" cy="45" rx="5.5" ry="6.5" />
          </clipPath>

          {/* Pupils */}
          <g clipPath={"url(#eye-clip-l-" + type + ")"}>
            <circle ref={pupilRef1} cx="36" cy="45" r="3" fill={pupilColor} />
          </g>
          <g clipPath={"url(#eye-clip-r-" + type + ")"}>
            <circle ref={pupilRef2} cx="64" cy="45" r="3" fill={pupilColor} />
          </g>

          {/* Nose */}
          <path d="M48,50 Q50,55 52,50" stroke="#E3B396" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Smile */}
          <path d="M38,65 Q50,75 62,65" stroke="#D18375" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Optional teeth for Zainab maybe? Or just keep it clean */}
        </g>
      </svg>
    </div>
  );
}
