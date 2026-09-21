import KeywordTool from "@/components/tools/KeywordTool";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free SEO Keyword Research Tool | FALAH BRANDHOUSE",
  description: "Discover high-intent keywords, analyze search volume, and uncover ranking opportunities with our free SEO keyword research tool.",
  alternates: {
    canonical: "https://falahbrandhouse.com/keyword-tool",
  },
};

export default function KeywordToolPage() {
  return (
    <main className="pt-32">
      <KeywordTool />
    </main>
  );
}
