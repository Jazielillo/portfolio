"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "./mode-toggle";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<string>("");

  // Montado en cliente (necesario para portal)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Scroll-lock del body
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Detectar sección activa con IntersectionObserver
  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "contact"];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((s): s is HTMLElement => s !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const links = [
    { href: "#about", label: "Sobre mí" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <>
      {/* Botón hamburguesa */}
      <button onClick={() => setOpen(true)} className="sm:hidden p-2">
        <Menu className="text-[32px]" />
      </button>

      {/* PORTAL: menú en <body> */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
                {/* Fondo oscuro */}
                <motion.div
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-999 dark:bg-black/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                />

                {/* Menú FULLSCREEN */}
                <motion.div
                  className="fixed inset-0 h-full w-full bg-card z-1000 p-6 flex flex-col"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "tween", duration: 0.25 }}
                >
                  {/* Cerrar */}
                  <div className="flex justify-between items-center">
                    <button onClick={() => setOpen(false)}>
                      <X className="text-[32px]" />
                    </button>

                    <ModeToggle></ModeToggle>
                  </div>

                  {/* Links */}
                  <nav className="flex flex-col gap-6 text-2xl font-semibold justify-center items-center flex-1">
                    {links.map((link) => {
                      const isActive = active === link.href;

                      return (
                        <a
                          key={link.href}
                          onClick={() => {
                            setOpen(false);
                            document
                              .getElementById(link.href.substring(1))
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className={`transition-colors cursor-pointer ${
                            isActive
                              ? "text-primary font-bold underline underline-offset-4"
                              : ""
                          }`}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
