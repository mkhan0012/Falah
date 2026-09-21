"use client";

import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { animatePageOut } from "@/utils/animations";
import { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export default function TransitionLink({ href, children, className, ...props }: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetUrl = href.toString();
    
    // If we're already on that page, just do nothing
    if (window.location.pathname === targetUrl) {
      return;
    }
    
    animatePageOut(targetUrl, router);
  };

  return (
    <Link href={href} onClick={handleTransition} className={className} {...props}>
      {children}
    </Link>
  );
}
