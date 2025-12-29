"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  ExternalLink,
  User,
  Users,
  Clock,
  ArrowLeft,
  X,
  Layers,
  Zap,
  Layout,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ProjectData } from "@/lib/project-data";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { getSkillsByNames } from "@/lib/skills-data";
import { SkillBadge } from "@/components/ui/skill-badge";

interface ProjectDetailClientProps {
  project: ProjectData;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Navegación Superior Flotante */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Button variant="ghost" size="sm" asChild className="hover:bg-primary/10">
            <Link href="/#projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Volver a Proyectos</span>
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            {project.live && (
              <Button size="sm" asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Demo en Vivo</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section con Gradiente */}
      <header className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(var(--primary-rgb),0.08)_0%,transparent_100%)]" />
        
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center gap-3">
              <Badge variant="secondary" className="rounded-full px-4 py-1 text-xs font-medium uppercase tracking-wider">
                {project.type}
              </Badge>
              <Badge variant="outline" className="rounded-full border-primary/30 px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                {project.status}
              </Badge>
            </div>
            
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight lg:text-7xl">
              {project.title}
            </h1>
            
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {project.summary}
            </p>

            {/* Mockup de Imagen Principal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="group relative overflow-hidden rounded-2xl border bg-muted shadow-2xl transition-all">
                <div className="absolute inset-0 z-10 bg-linear-to-t from-background/20 to-transparent" />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Info Rápida Estilo "Dashboard" */}
      <section className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Rol", val: project.role, icon: User },
            { label: "Duración", val: project.duration, icon: Clock },
            { label: "Equipo", val: project.projectSummary?.teamSize || "Individual", icon: Users },
            { label: "Categoría", val: project.projectSummary?.projectType || project.type, icon: Layers },
          ].map((item, i) => (
            <BackgroundGradient key={i} className="rounded-[22px] bg-white dark:bg-zinc-900">
              <div className="flex flex-col items-center p-6 text-center">
                <item.icon className="mb-3 h-5 w-5 text-primary" />
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.label}</span>
                <span className="mt-1 font-semibold">{item.val}</span>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </section>

      {/* Cuerpo del Caso de Estudio */}
      <section className="container mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* Columna Izquierda: Narrativa */}
          <div className="space-y-16 lg:col-span-8">
            
            {/* Problema y Solución */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-2xl font-bold">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  El Desafío
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {project.description.problem}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-2xl font-bold">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  La Solución
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {project.description.purpose}
                </p>
              </div>
            </div>

            {/* Características con Iconos Dinámicos */}
            {project.features && project.features.length > 0 && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold tracking-tight">Funcionalidades Clave</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <Card key={index} className="border-none bg-muted/40 transition-colors hover:bg-muted/60">
                    <CardContent className="p-6">
                      <Zap className="mb-4 h-6 w-6 text-primary" />
                      <h4 className="mb-2 font-bold">{feature.title}</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            )}

            {/* Video Demo */}
            {project.demo && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold tracking-tight">Demo en Acción</h3>
                <div className="overflow-hidden rounded-xl border bg-muted/20 shadow-lg">
                  <div className="relative aspect-video">
                    <iframe
                      src={project.demo.videoUrl}
                      title={`${project.title} Demo`}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  {project.demo.caption && (
                    <div className="p-4 text-center">
                      <p className="text-sm text-muted-foreground">{project.demo.caption}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Galería Estilo Masonry/Grid moderno */}
            {
              project.screenshots && project.screenshots.length > 0 && <div className="space-y-8">
              <h3 className="text-3xl font-bold tracking-tight">Exploración Visual</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.screenshots?.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="group relative cursor-zoom-in overflow-hidden rounded-xl border"
                    onClick={() => setSelectedImage(img.url)}
                  >
                    <Image
                      src={img.url}
                      alt="Screenshot"
                      width={600}
                      height={400}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                       <Layout className="text-white h-8 w-8" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            }
          </div>

          {/* Columna Derecha: Stack Tecnológico (Sticky) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900" animate={true}
              >
                <div className="p-8">
                  <h3 className="mb-6 text-xl font-bold">Tecnologías Utilizadas</h3>
                  <div className="space-y-6">
                    {project.technologies && Object.entries(project.technologies).map(([key, techs]) => {
                      const skills = getSkillsByNames(techs);
                      return techs.length > 0 && (
                        <div key={key}>
                          <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">{key}</h4>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                              <SkillBadge
                                key={skill.name}
                                skill={skill}
                                showAnimation={false}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {project.techNotes && (
                    <div className="mt-8 rounded-xl bg-primary/5 p-4 border border-primary/10">
                      <p className="text-xs leading-relaxed text-muted-foreground font-medium italic">
                         &quot;{project.techNotes}&quot;
                      </p>
                    </div>
                  )}
                </div>
              </BackgroundGradient>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="container mx-auto max-w-5xl px-4 py-32 text-center">
        <h2 className="mb-8 text-3xl font-bold">¿Te gusta lo que ves?</h2>
        <div className="flex flex-wrap justify-center gap-4">
           <Button size="lg" asChild className="rounded-full px-8">
              <Link href="/#contact">Hablemos de tu proyecto</Link>
           </Button>
           <Button size="lg" variant="outline" asChild className="rounded-full px-8">
              <Link href="/#projects">Ver más trabajos</Link>
           </Button>
        </div>
      </footer>

      {/* Lightbox con AnimatePresence */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl"
            >
              <Image src={selectedImage} alt="Fullscreen view" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}