"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter((path) => path);
  
  const breadcrumbList = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join("/")}`;
    const name = path.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return { name, href };
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://falahbrandhouse.com"
      },
      ...breadcrumbList.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.name,
        "item": `https://falahbrandhouse.com${crumb.href}`
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          {breadcrumbList.map((crumb, index) => {
            const isLast = index === breadcrumbList.length - 1;
            return (
              <React.Fragment key={crumb.href}>
                <ChevronRight size={12} className="opacity-50" />
                <li aria-current={isLast ? "page" : undefined}>
                  {isLast ? (
                    <span className="text-foreground font-bold">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-accent transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
