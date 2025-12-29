import { ProjectDetailClient } from "@/components/project-details"
import { getProjectById, projectsData } from "@/lib/project-data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.summary,
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
