import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Proposal | Vyoma Media",
  description: "Start a project with Vyoma Media in Hyderabad. Tell us what you're building, where you are today, and what you want to achieve.",
  alternates: {
    canonical: "https://vyomamedia.com/request-proposal",
  },
};

export default function RequestProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
