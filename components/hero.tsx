"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { clsx } from "clsx";
import DecryptedText from "./animations/decrypted-text";
import { BackgroundGradientTemplate } from "./ui/background-gradient-template";
import { AnimatedEntry } from "./animations/animated-entry";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const mainTitleClasses = clsx(
    "font-onest text-[54px] font-black leading-[100%]",
    "sm:text-3xl",
    "md:text-5xl",
    "lg:text-6xl",
    "xl:text-[60px]",
    "2xl:text-[80px]"
  );

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="container mx-auto max-w-6xl z-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-2.5">
              {/* Nombre con efecto más dramático */}
              <p className={mainTitleClasses}>
                <DecryptedText
                  text="Hola, soy "
                  animateOn="view"
                  speed={100} // Más rápido
                  sequential={true}
                  revealDirection="start"
                  className="font-onest font-black text-foreground/80"
                />
                <DecryptedText
                  text="Enrique"
                  animateOn="view"
                  speed={70} // Aún más rápido para el nombre
                  sequential={true}
                  revealDirection="start"
                  className="font-oxanium font-light text-primary" // Resalta en color primario
                />
                <br className="md:hidden" />
                <DecryptedText
                  text="Buelna"
                  animateOn="view"
                  speed={60}
                  sequential={true}
                  revealDirection="start"
                  className="font-onest font-black text-primary" // También en primario
                />
              </p>
            </div>

            {/* Título simple con fade-in suave */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }} // Más delay para que termine el nombre primero
              className="text-2xl md:text-3xl font-light text-muted-foreground mb-6 tracking-wide"
            >
              Desarrollador Fullstack
            </motion.h2>

            {/* Descripción con simple fade */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-muted-foreground/80 mb-5 leading-relaxed max-w-xl"
            >
              Creando experiencias web modernas con código limpio y soluciones
              creativas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-5"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/Buelna_Servin_Jesus_Enrique__CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href="mailto:jesusenriqueyt@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contáctame
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/enriqueBuelna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/enriquebuelna/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          <div className="relative rounded-2xl">
            <AnimatedEntry animation="fadeDown" delay={0.88}>
              <BackgroundGradientTemplate
                imageUrl="/foto_perfil.jpeg"
                alt="me"
                technologie="xd"
              ></BackgroundGradientTemplate>
            </AnimatedEntry>
          </div>
        </div>
      </div>
    </section>
  );
}
