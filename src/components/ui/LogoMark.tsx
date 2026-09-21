export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Left Mane */}
      <path d="M50 5 L15 20 L5 55 L25 85 L45 95 L30 70 L30 40 L50 25 Z" fill="currentColor" />
      
      {/* Right Mane */}
      <path d="M50 5 L85 20 L95 55 L75 85 L55 95 L70 70 L70 40 L50 25 Z" fill="currentColor" />
      
      {/* Center Snout / Falah Abstract F */}
      <path d="M50 35 L60 45 L50 75 L40 45 Z" fill="currentColor" />
      
      {/* Vermilion Accent Crown */}
      <polygon points="45,15 55,15 50,25" fill="#E84A27" />
    </svg>
  );
}
