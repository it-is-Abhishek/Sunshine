"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { applyTheme, getPreferredTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/cn";

const RAY_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315] as const;

const spring = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20,
};

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[20px]">
      {RAY_ANGLES.map((angle) => (
        <g key={angle} transform={`rotate(${angle} 12 12)`}>
          <line
            x1="12"
            y1="2.25"
            x2="12"
            y2="5.75"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
          />
        </g>
      ))}
      <circle cx="12" cy="12" r="4.25" fill="currentColor" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[20px]">
      <path
        d="M13.2 2.4a9.6 9.6 0 1 0 0 19.2 7.2 7.2 0 0 1 0-19.2z"
        fill="currentColor"
      />
    </svg>
  );
}

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getPreferredTheme());
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const toggleTheme = () => {
    const nextTheme: Theme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <motion.button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      disabled={!mounted}
      onClick={toggleTheme}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={cn(
        "theme-toggle group relative flex size-10 items-center justify-center rounded-full disabled:opacity-60",
        "transition-all duration-300 border-none outline-none",
        // Light mode (default matching user image)
        "bg-[#f1f3f5] text-neutral-600",
        "hover:bg-[#e9ecef] hover:text-neutral-800",
        // Dark mode (clean flat dark gray matching dark theme)
        "dark:bg-neutral-800 dark:text-neutral-300",
        "dark:hover:bg-neutral-700 dark:hover:text-white",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500",
        className,
      )}
    >
      <motion.span
        className="relative block size-[20px]"
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={spring}
      >
        <motion.span
          className="absolute inset-0 grid place-items-center"
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.4 : 1,
            rotate: isDark ? -90 : 0,
          }}
          transition={spring}
        >
          <SunIcon />
        </motion.span>

        <motion.span
          className="absolute inset-0 grid place-items-center"
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.4,
            rotate: isDark ? 0 : 90,
          }}
          transition={spring}
        >
          <MoonIcon />
        </motion.span>
      </motion.span>
    </motion.button>
  );
}
