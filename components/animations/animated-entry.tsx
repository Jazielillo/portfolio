"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

const ENTRY_ANIMATIONS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
} as const;

type AnimationType = keyof typeof ENTRY_ANIMATIONS;

interface AnimatedEntryProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
}

export const AnimatedEntry = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.5,
  className,
  triggerOnce = true,
}: AnimatedEntryProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: triggerOnce, margin: "0px" });

  const variants = ENTRY_ANIMATIONS[animation];

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
      style={{ opacity: 0 }} // Set initial opacity to match server render
    >
      {children}
    </motion.div>
  );
};
