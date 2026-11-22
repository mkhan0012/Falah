import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Manrope, Inter, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
import MobileStickyCTA from "@/components/ui/MobileStickyCTA";
import { ThemeProvider } from "@/components/ThemeProvider";
import { generateLocalBusinessSchema } from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: "#02103D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vyomamedia.co.in"),
  title: {
    default: "VYOMA Media | Branding, Web Design & SEO Studio in India",
    template: "%s | VYOMA Media",
  },
  description:
    "Growth you own, not growth you rent. VYOMA Media builds brands, high-performing websites and organic SEO visibility that create lasting commercial value.",
  keywords: [
    "VYOMA Media",
    "branding agency Hyderabad",
    "web design Hyderabad",
    "web design company Hyderabad",
    "SEO agency Hyderabad",
    "organic growth studio",
    "technical SEO Hyderabad",
    "Next.js web development",
    "brand strategy",
    "Generative Engine Optimization",
  ],
  alternates: {
    canonical: "./",
    languages: {
      "en-IN": "https://vyomamedia.co.in",
      "en": "https://vyomamedia.co.in",
      "x-default": "https://vyomamedia.co.in",
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon-48x48.png?v=2", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png?v=2", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png?v=2", sizes: "192x192", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest?v=2",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vyomamedia.co.in",
    siteName: "Vyoma Media",
    title: "VYOMA Media | Branding, Web Design & SEO Studio in India",
    description:
      "Growth you own, not growth you rent. VYOMA Media builds brands, high-performing websites and organic SEO visibility that create lasting commercial value.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VYOMA Media — Growth You Own. Not Growth You Rent.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VYOMA Media | Branding, Web Design & SEO Studio in India",
    description:
      "Growth you own, not growth you rent. VYOMA Media builds brands, high-performing websites and organic SEO visibility that create lasting commercial value.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google9d5290b895c6adf0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateLocalBusinessSchema();

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Google Search & Cross-Platform Favicons (multiple-of-48px standard for Googlebot-Image & browser tabs) */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg?v=2" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96x96.png?v=2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag Manager / GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WTVD4M3S"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={`${manrope.variable} ${inter.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable} font-sans antialiased bg-[#F1F3F1] text-[#30383D] selection:bg-[#7899B0] selection:text-white`}
      >
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTVD4M3S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ExitIntentPopup />
            <MobileStickyCTA />
            <CookieConsent />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
