"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "@/lib/skills-data";

interface SkillBadgeProps {
  skill: Skill;
  delay?: number;
  showAnimation?: boolean;
}

export function SkillBadge({
  skill,
  delay = 0,
  showAnimation = true,
}: SkillBadgeProps) {
  const badge = (
    <a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex cursor-pointer items-center gap-2 rounded-md border border-black/10 px-2 py-1 font-mono font-medium text-neutral-500 duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-white/5"
    >
      <Image
        src={skill.logo}
        alt={`${skill.name} logo`}
        width={20}
        height={20}
        className="size-5 rounded"
      />
      {skill.name}
    </a>
  );

  if (!showAnimation) {
    return badge;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: 0.3,
      }}
      whileHover={{ scale: 1.05 }}
    >
      {badge}
    </motion.div>
  );
}
