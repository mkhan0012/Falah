"use client";

import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ReactNode, MouseEvent } from "react";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function TransitionLink({ href, children, className, onClick, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick();
    
    const targetUrl = href.toString();
    
    // If we're already on that page, just do nothing
    if (pathname === targetUrl) {
      return;
    }
    
    router.push(targetUrl);
  };

  return (
    <Link href={href} onClick={handleTransition} className={className} {...props}>
      {children}
    </Link>
  );
}
