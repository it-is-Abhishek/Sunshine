import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-full)] border border-[var(--border)] bg-[var(--surface-glass)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]",
        className,
      )}
      {...props}
    />
  );
}
