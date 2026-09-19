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
  description: "Strategy, design, digital experiences and growth systems for ambitious businesses and people in Hyderabad, India.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://falahbrandhouse.com",
    siteName: "FALAH BRANDHOUSE",
    title: "FALAH BRANDHOUSE | Brand & Digital Growth Studio",
    description: "Strategy, design, digital experiences and growth systems for ambitious businesses.",
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
    description: "Strategy, design, digital experiences and growth systems for ambitious businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${instrumentSans.variable} ${ibmPlexMono.variable} antialiased bg-ivory text-graphite font-primary selection:bg-vermilion selection:text-ivory`}
      >
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen pt-24 lg:pt-0">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </SmoothScroll>
      </body>
    </html>
  );
}

