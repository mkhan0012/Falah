import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectPageClient from "./ProjectPageClient";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) return { title: "Not Found" };
  
  return {
    title: `${project.client} | FALAH BRANDHOUSE`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <ProjectPageClient params={resolvedParams} />;
}
