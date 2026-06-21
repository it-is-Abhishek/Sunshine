"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { fadeUp } from "@/animations/fadeUp";
import { cn } from "@/lib/cn";

type RevealProps = HTMLMotionProps<"div"> & {
  variants?: Variants;
};

export function Reveal({ className, variants = fadeUp, ...props }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      {...props}
    />
  );
}
