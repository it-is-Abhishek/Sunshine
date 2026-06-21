import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function GradientBorder({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("gradient-border rounded-[var(--radius-xl)]", className)} {...props} />;
}
