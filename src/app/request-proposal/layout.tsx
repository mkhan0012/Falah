import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Proposal | FALAH BRANDHOUSE",
  description: "Start a project with FALAH BRANDHOUSE. Tell us what you&apos;re building, where you are today, and what you want to achieve.",
  alternates: {
    canonical: "https://falahbrandhouse.com/request-proposal",
  },
};

export default function RequestProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
