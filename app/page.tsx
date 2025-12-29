"use client";

import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import { Skills } from "@/components/skills";
import { Vortex } from "@/components/ui/vortex";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <BackgroundRippleEffect />
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={500}
        baseHue={220}
        className="absolute inset-0"
        containerClassName="absolute inset-0 h-full w-full pointer-events-none overflow-hidden"
      />
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>
      
      <div className="w-full relative">
        <section id="about" >
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <Footer />
      </div>
    </div>
  );
}
