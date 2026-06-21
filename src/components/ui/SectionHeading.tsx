import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 text-balance text-[1.85rem] font-semibold leading-[1.08] text-[var(--foreground)] sm:text-3xl md:mt-5 md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-[0.95rem] leading-7 text-[var(--muted)] md:mt-5 md:text-lg md:leading-8">
        {description}
      </p>
    </Reveal>
  );
}
