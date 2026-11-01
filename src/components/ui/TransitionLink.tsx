"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface TransitionLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  children: ReactNode;
}

export default function TransitionLink({ href, children, className, onClick, ...props }: TransitionLinkProps) {
  return (
    <Link 
      href={href} 
      onClick={onClick} 
      className={className} 
      {...props}
    >
      {children}
    </Link>
  );
}
