export const colors = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  surface: "var(--surface)",
  surfaceElevated: "var(--surface-elevated)",
  surfaceGlass: "var(--surface-glass)",
  muted: "var(--muted)",
  border: "var(--border)",
  borderStrong: "var(--border-strong)",
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
  success: "var(--success)",
  warning: "var(--warning)",
  gradientBrand: "var(--gradient-brand)",
  gradientSurface: "var(--gradient-surface)",
} as const;

export const spacing = {
  sectionY: "clamp(5rem, 8vw, 9rem)",
  container: "min(100% - 2rem, 1180px)",
  containerWide: "min(100% - 2rem, 1440px)",
  navHeight: "5rem",
} as const;

export const radii = {
  xs: "0.375rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  full: "999px",
} as const;

export const shadows = {
  soft: "0 24px 80px rgba(35, 51, 107, 0.1)",
  glow: "0 20px 80px rgba(29, 194, 198, 0.22)",
  card: "0 18px 48px rgba(35, 51, 107, 0.1)",
} as const;

export const animations = {
  fast: "160ms ease",
  medium: "260ms ease",
  slow: "520ms cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const zIndex = {
  base: 0,
  raised: 10,
  nav: 50,
  overlay: 80,
  modal: 100,
} as const;

export const tokens = {
  colors,
  spacing,
  radii,
  shadows,
  animations,
  breakpoints,
  zIndex,
} as const;
