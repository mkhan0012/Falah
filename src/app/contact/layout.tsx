import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Vyoma Media",
  description: "Get in touch with Vyoma Media in Hyderabad to discuss your branding, web design, and organic growth needs.",
  alternates: {
    canonical: "https://vyomamedia.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
