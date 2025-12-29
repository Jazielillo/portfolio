"use client";
import { useEffect, useRef, useState } from "react";
import NavbarTabs from "./ui/tabs-trigger";
import { ModeToggle } from "./ui/mode-toggle";
import MobileMenu from "./ui/bread-menu";

export const Navbar = () => {
  const [showTabs, setShowTabs] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Detectar si hemos scrolleado más de 50px
      setHasScrolled(currentY > 50);

      // Si estamos en los primeros 50px, siempre mostrar
      if (currentY < 50) {
        setIsVisible(true);
        setShowTabs(true);
      } else {
        // Si scrolleamos hacia arriba, mostrar. Si hacia abajo, ocultar
        if (currentY < lastScrollY.current) {
          setIsVisible(true);
          setShowTabs(true);
        } else if (currentY > lastScrollY.current) {
          setIsVisible(false);
          setShowTabs(false);
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-500 w-full
        transition-all duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Fondo blur - solo visible cuando hasScrolled es true */}
      <div className={`absolute inset-0 transition-all duration-300 ${hasScrolled ? 'bg-background/80 dark:bg-background/80 backdrop-blur-xl border-b border-border/40' : 'bg-transparent'}`}></div>

      {/* Contenido del Navbar */}
      <div
        className={`
          relative
          px-4 py-3
          sm:px-6 sm:py-4
          md:px-10 md:py-5
          lg:px-16 lg:py-4
          xl:px-20 xl:py-5
          flex justify-between items-center 
          transition-all duration-300
        `}
      >
      {/* Logo - Mobile (< 640px) */}
      <div
        className={`
          flex gap-2 items-center sm:hidden
          transition-all duration-300
          ${showTabs
            ? "opacity-80 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <h2 className="text-xl font-outfit font-light">Portfolio</h2>
      </div>

      {/* Logo - Tablet y Desktop (>= 640px) */}
      <div
        className={`
          hidden sm:flex gap-2 items-center
          transition-all duration-300
          ${showTabs
            ? "opacity-80 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <h2 className="text-2xl font-outfit font-light">Portfolio</h2>
      </div>

      {/* Tabs - Solo visible en Laptop y Desktop (>= 1024px) */}
      <div
        className={`
          hidden lg:block
          transition-all duration-300
          ${showTabs
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <NavbarTabs />
      </div>

      {/* Botones - Desktop (>= 1024px) */}
      <div
        className={`
          hidden lg:flex gap-2.5 items-center
          transition-all duration-300
          ${showTabs
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <ModeToggle />
      </div>

      {/* Mobile Menu - Mobile y Tablet (< 1024px) */}
      <div
        className={`
          flex lg:hidden items-center gap-2
          transition-all duration-300
          ${showTabs
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        {/* ModeToggle visible en tablets */}
        <div className="hidden sm:block lg:hidden">
          <ModeToggle />
        </div>
        <MobileMenu />
      </div>
      </div>
    </div>
  );
};