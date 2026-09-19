import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | FALAH BRANDHOUSE",
  description: "Get in touch with FALAH BRANDHOUSE to discuss your brand, digital, and growth needs.",
  alternates: {
    canonical: "https://falahbrandhouse.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
