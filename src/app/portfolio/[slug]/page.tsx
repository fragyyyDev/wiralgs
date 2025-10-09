// src/app/portfolio/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectClient from "./ProjectClient";
import Navbar from "@/components/Navbar";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: Props) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <>
      <Navbar />
      <ProjectClient project={project} />
    </>
  ) ;
}
