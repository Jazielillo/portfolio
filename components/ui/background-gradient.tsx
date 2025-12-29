import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = false,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = animate || isHovered;

  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div 
      className={cn("relative p-0.5 group", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        variants={shouldAnimate ? variants : undefined}
        initial={shouldAnimate ? "initial" : undefined}
        animate={shouldAnimate ? "animate" : undefined}
        transition={
          shouldAnimate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: shouldAnimate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-1 blur-md transition-all duration-500 will-change-transform",
          isHovered 
            ? "opacity-70 bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
            : "opacity-10 bg-[radial-gradient(circle_farthest-side_at_0_100%,#6b7280,transparent),radial-gradient(circle_farthest-side_at_100%_0,#6b7280,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#6b7280,transparent),radial-gradient(circle_farthest-side_at_0_0,#6b7280,#141316)]"
        )}
      />
      <motion.div
        variants={shouldAnimate ? variants : undefined}
        initial={shouldAnimate ? "initial" : undefined}
        animate={shouldAnimate ? "animate" : undefined}
        transition={
          shouldAnimate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: shouldAnimate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-1 will-change-transform transition-all duration-500",
          isHovered
            ? "opacity-80 bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
            : "opacity-5 bg-[radial-gradient(circle_farthest-side_at_0_100%,#6b7280,transparent),radial-gradient(circle_farthest-side_at_100%_0,#6b7280,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#6b7280,transparent),radial-gradient(circle_farthest-side_at_0_0,#6b7280,#141316)]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
