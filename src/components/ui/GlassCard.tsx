import type { HTMLAttributes } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

export function GlassCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <Card variant="glass" className={cn("hover-lift", className)} {...props} />;
}
