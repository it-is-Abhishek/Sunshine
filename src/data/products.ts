import {
  Boxes,
  Droplets,
  Filter,
  Layers3,
  Settings2,
} from "lucide-react";

import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    // -------------------------
    id: "industrial-filters",
    title: "Bag Filter (7 × 32)",
    eyebrow: "Liquid Filtration",
    description: "Industrial liquid filter bags offering consistent filtration, high dirt-holding capacity, and long service life.",
    image: "/assets/bag-filter.png",
    specs: [
      "Standard 7 × 32 size",
      "1–250 micron options",
      "PP, Polyester & Nylon media",
    ],
    icon: Filter,
    featured: true,
  },
  {
    // ---------------------------------
    id: "filter-cartridges",
    title: "Filter Press Cloth",
    eyebrow: "Butterfly Type",
    description: "High-quality butterfly type filter press cloths designed for efficient cake release, high filtration accuracy, and extended service life.",
    image: "/assets/filter-press.png",
    specs: [
      "Excellent cake discharge",
      "High filtration efficiency",
      "Chemical & abrasion resistant",
    ],
    icon: Layers3,
    featured: true,
  },
  {
    // --------------------------
    id: "filter-housings",
    title: "Centrifuge Bags",
    eyebrow: "Solid-Liquid Separation",
    description: "High-performance centrifuge bags engineered for reliable solid-liquid separation in demanding industrial processes.",
    image: "/assets/centrifuge-bags.png",
    specs: [
      "Custom machine-fit designs",
      "High-strength filter fabrics",
      "Excellent dimensional stability",
    ],
    icon: Boxes,
    featured: true,
  },
  {
    // -------------------------
    id: "water-treatment-components",
    title: "FBD Bags",
    eyebrow: "Pharmaceutical Filtration",
    description: "Premium FBD bags designed for efficient drying, dust-free operation, and maximum product recovery.",
    image: "/assets/fdb-bags.png",
    specs: [
      "High air permeability",
      "Excellent dust retention",
      "Custom pharmaceutical-grade stitching",
    ],
    icon: Droplets,
    featured: false,
  },
  {
    // ------------------------------
    id: "filtration-systems",
    title: "ANFD Bags",
    eyebrow: "Nutsche Filter Dryer",
    description:  "Precision-engineered ANFD bags for efficient filtration, washing, and drying in pharmaceutical and chemical processing.",
    image: "/assets/afdb-industry-bag.png",
    specs: [
      "Precision custom fabrication",
      "High chemical resistance",
      "Suitable for pharma & chemical plants",
    ],
    icon: Settings2,
    featured: false,
  },
];

export const featuredProducts = products.filter(
  (product) => product.featured
);