import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline" | "ghost" | "surface";
type ButtonSize = "sm" | "md" | "lg";

type SharedButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[image:var(--gradient-brand)] text-[var(--button-foreground)] shadow-[var(--shadow-glow)] hover-glow",
  outline:
    "border border-[var(--border-strong)] bg-[var(--surface-glass)] text-[var(--foreground)] hover-gradient",
  ghost: "text-[var(--foreground)] hover:bg-[var(--surface-elevated)]",
  surface:
    "border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover-lift",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-6 text-base",
};

const baseClass =
  "inline-flex min-w-0 items-center justify-center gap-2 rounded-[var(--radius-full)] text-center font-semibold transition-[transform,background,border,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  SharedButtonProps & {
    href?: never;
  };

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  SharedButtonProps & {
    href: string;
  };

function isAnchorButtonProps(
  props: NativeButtonProps | AnchorButtonProps,
): props is AnchorButtonProps {
  return typeof props.href === "string";
}

export function Button({
  ...props
}: NativeButtonProps | AnchorButtonProps) {
  const {
    className,
    variant = "primary",
    size = "md",
    icon,
    children,
  } = props;
  const content = (
    <>
      {children}
      {icon ?? <ArrowRight aria-hidden className="size-4" />}
    </>
  );
  const composed = cn(baseClass, variants[variant], sizes[size], className);

  if (isAnchorButtonProps(props)) {
    return (
      <a
        className={composed}
        href={props.href}
        target={props.target}
        rel={props.rel}
        aria-label={props["aria-label"]}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={composed}
      type={props.type ?? "button"}
      disabled={props.disabled}
      aria-label={props["aria-label"]}
      onClick={props.onClick}
    >
      {content}
    </button>
  );
}
