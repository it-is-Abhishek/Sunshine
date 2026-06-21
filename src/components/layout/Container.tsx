import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  wide?: boolean;
};

export function Container({ className, wide = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-[var(--container)]",
        wide && "w-[var(--container-wide)]",
        className,
      )}
      {...props}
    />
  );
}
