import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#172B3A",
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
  metadataBase: new URL("https://vyomamedia.com"),
  title: {
    default: "VYOMA Media | Branding, Web Design & Organic Growth Studio Hyderabad",
    template: "%s | VYOMA Media",
  },
  description:
    "We build brands, digital experiences and organic visibility that create lasting commercial value. Growth you own, not growth you rent. Based in Hyderabad, India.",
  keywords: [
    "VYOMA Media",
    "branding agency Hyderabad",
    "web design Hyderabad",
    "organic growth studio",
    "technical SEO Hyderabad",
    "Next.js web development",
    "brand strategy",
    "Generative Engine Optimization",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vyomamedia.com",
    siteName: "VYOMA Media",
    title: "VYOMA Media | Branding, Web Design & Organic Growth Studio Hyderabad",
    description:
      "We build brands, digital experiences and organic visibility that create lasting commercial value. Growth you own, not growth you rent.",
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
    title: "VYOMA Media | Branding, Web Design & Organic Growth Studio Hyderabad",
    description:
      "We build brands, digital experiences and organic visibility that create lasting commercial value. Growth you own, not growth you rent.",
    images: ["/og-image.jpg"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "VYOMA Media",
    "legalName": "VYOMA Media",
    "slogan": "GROWTH YOU OWN. NOT GROWTH YOU RENT.",
    "description":
      "We build brands, digital experiences and organic visibility that create lasting commercial value.",
    "image": "https://vyomamedia.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN",
    },
    "telephone": "+919100023456",
    "email": "hello@vyomamedia.com",
    "url": "https://vyomamedia.com",
    "sameAs": [
      "https://vyomamedia.com",
    ],
    "areaServed": [
      { "@type": "City", "name": "Hyderabad" },
      { "@type": "Country", "name": "India" },
      { "@type": "AdministrativeArea", "name": "Global" },
    ],
    "knowsAbout": [
      "Brand Strategy",
      "Visual Identity",
      "Web Design",
      "Next.js Frontend Engineering",
      "Technical SEO",
      "Organic Growth Systems",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Serif:ital@0;1&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Manrope:wght@400;500;600;700;800&display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="VYOMA Media Insights"
          href="/feed.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${manrope.variable} ${inter.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable} font-sans antialiased bg-[#F1F3F1] text-[#30383D] selection:bg-[#7899B0] selection:text-white`}
      >
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
