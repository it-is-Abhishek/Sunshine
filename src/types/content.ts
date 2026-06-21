import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type Product = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  media?: ProductMedia[];
  specs: string[];
  icon: LucideIcon;
  featured?: boolean;
};

export type ProductMedia = {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
};

export type Industry = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
};

export type ValueProposition = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};
