import type { Metadata } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import CookieConsent from "@/components/ui/CookieConsent";

const instrumentSans = Instrument_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://falahbrandhouse.com'),
  title: {
    default: "FALAH BRANDHOUSE | Brand & Digital Growth Studio",
    template: "%s | FALAH BRANDHOUSE",
  },
  description: "AI-optimized brand strategy, website design, and SEO to generate high-quality organic leads for ambitious businesses in Hyderabad, India, and globally.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://falahbrandhouse.com",
    siteName: "FALAH BRANDHOUSE",
    title: "FALAH BRANDHOUSE | Brand & Digital Growth Studio",
    description: "Generate high-quality organic leads through AI-optimized branding, web design, and digital strategies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FALAH BRANDHOUSE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FALAH BRANDHOUSE | Brand & Digital Growth Studio",
    description: "Generate high-quality organic leads through AI-optimized branding, web design, and digital strategies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Falah Brandhouse",
    "image": "https://falahbrandhouse.com/og-image.jpg",
    "description": "Strategy, design, digital experiences and growth systems for ambitious businesses and people in Hyderabad, India.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressCountry": "IN"
    },
    "url": "https://falahbrandhouse.com"
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preload" as="video" href="/showreel.mp4" type="video/mp4" />
        <link rel="alternate" type="application/rss+xml" title="Falah Brandhouse Insights" href="/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${instrumentSans.variable} ${ibmPlexMono.variable} font-primary antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main className="min-h-screen pt-24 lg:pt-0">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

