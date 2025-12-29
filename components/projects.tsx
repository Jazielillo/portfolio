"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Briefcase,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { useMemo } from "react";
import Link from "next/link";
import { projectsData } from "@/lib/project-data";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import { getSkillsByNames } from "@/lib/skills-data";
import { SkillBadge } from "./ui/skill-badge";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

interface ProjectCardProps {
  project: (typeof projectsData)[0];
  type: "professional" | "academic";
}

function ProjectCard({ project, type }: ProjectCardProps) {
  return (
    <motion.div
      variants={item}
      className="h-full"
    >
      <BackgroundGradient
        className={`rounded-[22px] bg-white dark:bg-zinc-900 h-full ${type === "professional" ? "min-h-[550px]" : "min-h-[450px]"}`}
        animate={false}
      >
        <div className="p-4 sm:p-6 h-full flex flex-col">
          <div className="relative h-48 overflow-hidden bg-muted rounded-lg mb-4">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
            <div
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                type === "professional"
                  ? "bg-blue-600 text-white"
                  : "bg-green-600 text-white"
              }`}
            >
              {type === "professional" ? (
                <>
                  <Briefcase className="h-3 w-3" />
                  Profesional
                </>
              ) : (
                <>
                  <GraduationCap className="h-3 w-3" />
                  Académico
                </>
              )}
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.summary}
            </p>
          </div>
          
          <div className="flex-1 mb-4">
            <div className="flex flex-wrap gap-2">
              {getSkillsByNames([
                ...project.technologies.frontend,
                ...project.technologies.backend,
              ])
                .slice(0, 4)
                .map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                    showAnimation={false}
                  />
                ))}
            </div>
          </div>
          
          <div className="flex gap-2 mt-auto">
            <Button variant="default" size="sm" asChild>
              <Link href={`/projects/${project.id}`}>
                Ver Detalles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Código
              </a>
            </Button>
            {project.live && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </BackgroundGradient>
    </motion.div>
  );
}

interface ProjectsProps {
  filterTechnology?: string | null;
}

export function Projects({ filterTechnology }: ProjectsProps) {
  const professionalProjects = useMemo(
    () => projectsData.filter((p) => p.type === "professional"),
    []
  );

  const academicProjects = useMemo(
    () => projectsData.filter((p) => p.type === "academic"),
    []
  );

  const filteredProfessional = useMemo(() => {
    if (!filterTechnology) return professionalProjects;
    return professionalProjects.filter((project) =>
      [
        ...project.technologies.frontend,
        ...project.technologies.backend,
        ...project.technologies.tools,
      ].some((tech) => tech.toLowerCase() === filterTechnology.toLowerCase())
    );
  }, [filterTechnology, professionalProjects]);

  const filteredAcademic = useMemo(() => {
    if (!filterTechnology) return academicProjects;
    return academicProjects.filter((project) =>
      [
        ...project.technologies.frontend,
        ...project.technologies.backend,
        ...project.technologies.tools,
      ].some((tech) => tech.toLowerCase() === filterTechnology.toLowerCase())
    );
  }, [filterTechnology, academicProjects]);

  const hasResults =
    filteredProfessional.length > 0 || filteredAcademic.length > 0;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Proyectos</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {filterTechnology
              ? `Proyectos usando ${filterTechnology}`
              : "Una muestra de trabajos profesionales y logros académicos"}
          </p>
        </motion.div>

        {!hasResults && filterTechnology && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">
              No se encontraron proyectos usando <strong>{filterTechnology}</strong>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Intenta seleccionar una tecnología diferente
            </p>
          </motion.div>
        )}

        {filteredProfessional.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-foreground">
                Proyectos Profesionales
                {filterTechnology && (
                  <span className="text-lg font-normal text-muted-foreground ml-2">
                    ({filteredProfessional.length})
                  </span>
                )}
              </h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
            >
              <AnimatePresence mode="popLayout">
                {filteredProfessional.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    type="professional"
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}

        {filteredAcademic.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-green-600" />
              <h3 className="text-2xl font-bold text-foreground">
                Proyectos Académicos
                {filterTechnology && (
                  <span className="text-lg font-normal text-muted-foreground ml-2">
                    ({filteredAcademic.length})
                  </span>
                )}
              </h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 auto-rows-fr"
            >
              <AnimatePresence mode="popLayout">
                {filteredAcademic.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    type="academic"
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
