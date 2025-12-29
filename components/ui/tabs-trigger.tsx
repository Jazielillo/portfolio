"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NavbarTabs() {
  const [activeTab, setActiveTab] = useState("inicio");

  useEffect(() => {
    const sections = ["about", "skills", "projects"];

    const handleScroll = () => {
      const middle = window.innerHeight / 2;

      let closestSection = activeTab;
      let smallestDistance = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const sectionMiddle = rect.top + rect.height / 2;

        const distance = Math.abs(sectionMiddle - middle);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestSection = id;
        }
      });

      if (closestSection !== activeTab) {
        setActiveTab(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  // Para que al tocar un tab haga scroll suave
  const handleTabChange = (value: string) => {
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveTab(value);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange}>
      <TabsList>
        <TabsTrigger value="about" className="cursor-pointer">
          Sobre mí
        </TabsTrigger>
        <TabsTrigger value="skills" className="cursor-pointer">
          Habilidades
        </TabsTrigger>
        <TabsTrigger value="projects" className="cursor-pointer">
          Proyectos
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
