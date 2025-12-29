"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}
      // Usamos w-12 h-12 para un buen tamaño de target táctil
      className="hover:bg-transparent w-10 h-9 relative overflow-hidden cursor-pointer bg-transparent border border-amber-500 dark:border-gray-800 rounded-md flex items-center justify-center"
    >
      <Sun
        className="absolute h-6 w-6 text-yellow-500 transition-all duration-500 inset-0 m-auto
                     scale-100 rotate-0 dark:scale-0 dark:-rotate-90"
      />
      <Moon
        className="absolute h-6 w-6 text-indigo-300 transition-all duration-500 inset-0 m-auto
                     scale-0 rotate-90 dark:scale-100 dark:rotate-0"
      />
    </Button>
  );
}
