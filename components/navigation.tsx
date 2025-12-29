"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.button>
          <div className="flex gap-6">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
