import {
  Beaker,
  Building2,
  CircuitBoard,
  Factory,
  Fuel,
  Waves,
} from "lucide-react";
import type { Industry } from "@/types/content";

export const industries: Industry[] = [
  {
    id: "water-treatment",
    title: "Water Treatment",
    description: "Pre-treatment, RO protection, polishing, and process water filtration.",
    icon: Waves,
  },
  {
    id: "chemical-processing",
    title: "Chemical Processing",
    description: "Media and housing selection around compatibility, pressure, and service cycle.",
    icon: Beaker,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Reliable filtration supply for production lines, utilities, and maintenance teams.",
    icon: Factory,
  },
  {
    id: "energy-utilities",
    title: "Energy & Utilities",
    description: "Robust components for plant water, oil filtration, and critical support systems.",
    icon: Fuel,
  },
  {
    id: "electronics",
    title: "Electronics",
    description: "Clean process support where fine filtration and stable quality matter.",
    icon: CircuitBoard,
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description: "Project-focused filtration sourcing for contractors and facility operators.",
    icon: Building2,
  },
];
