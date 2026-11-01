import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Open Roles | Vyoma Media",
  description: "Join the team at Vyoma Media in Hyderabad. We operate across brand strategy, high-craft web systems, generative engine optimization, and organic growth.",
  alternates: {
    canonical: "https://vyomamedia.com/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
