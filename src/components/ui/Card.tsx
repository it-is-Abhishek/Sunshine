import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "default" | "glass" | "gradient" | "elevated";

const variants: Record<CardVariant, string> = {
  default: "border border-[var(--border)] bg-[var(--surface)]",
  glass: "border border-[var(--border)] bg-[var(--surface-glass)] backdrop-blur-2xl",
  gradient: "gradient-border bg-[var(--surface)]",
  elevated: "border border-[var(--border)] bg-[var(--surface-elevated)] shadow-[var(--shadow-card)]",
};

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-[var(--radius-lg)] p-5 transition duration-300 sm:p-6", variants[variant], className)}
      {...props}
    />
  );
}
