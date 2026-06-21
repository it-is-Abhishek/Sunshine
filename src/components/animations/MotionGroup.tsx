"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { stagger } from "@/animations/stagger";
import { cn } from "@/lib/cn";

export function MotionGroup({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      {...props}
    />
  );
}
