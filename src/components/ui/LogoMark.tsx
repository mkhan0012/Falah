export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M50 10 L10 45 L45 55 Z" fill="currentColor" />
      <path d="M50 10 L90 45 L55 55 Z" fill="#E84A27" />
      <path d="M45 55 L50 95 L55 55 Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
