import {
  Boxes,
  Droplets,
  Filter,
  FlaskConical,
  Layers3,
  Settings2,
} from "lucide-react";
import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    id: "industrial-filters",
    title: "Industrial Filters",
    eyebrow: "Primary Filtration",
    description:
      "Durable filter assemblies designed for process fluids, utilities, pre-filtration, and plant operations.",
    image: "/product-industrial-filters.mp4",
    specs: ["High dirt-holding capacity", "Multiple media options", "Plant-ready configurations"],
    icon: Filter,
    featured: true,
  },
  {
    id: "filter-cartridges",
    title: "Filter Cartridges",
    eyebrow: "Replaceable Media",
    description:
      "Depth, pleated, wound, and specialty cartridges specified by micron rating, media, length, and end connection.",
    image: "/product-filter-cartridges.jpg",
    media: [
      {
        id: "filter-cartridges-image",
        type: "image",
        src: "/product-filter-cartridges.jpg",
        alt: "Filter cartridge production workspace",
      },
      {
        id: "filter-cartridges-video-1",
        type: "video",
        src: "/product-filter-cartridges-vid1.mp4",
        alt: "Filter cartridge production video one",
      },
      {
        id: "filter-cartridges-video-2",
        type: "video",
        src: "/product-filter-cartridges-vid2.mp4",
        alt: "Filter cartridge production video two",
      },
    ],
    specs: ["Micron-rated performance", "Standard and custom lengths", "Broad chemical compatibility"],
    icon: Layers3,
    featured: true,
  },
  {
    id: "filter-housings",
    title: "Filter Housings",
    eyebrow: "Pressure Vessels",
    description:
      "Single and multi-cartridge housings for water, chemicals, oils, utilities, and process applications.",
    image: "/product-filter-housings.png",
    specs: ["SS and engineered materials", "Multiple connection standards", "Service-friendly layouts"],
    icon: Boxes,
    featured: true,
  },
  {
    id: "water-treatment-components",
    title: "Water Treatment Components",
    eyebrow: "System Essentials",
    description:
      "Components for RO, pre-treatment, polishing, and utility water systems with reliable supply continuity.",
    image: "/product-water-components.png",
    specs: ["RO pre-filtration", "Utility water support", "Contractor-friendly sourcing"],
    icon: Droplets,
  },
  {
    id: "filtration-systems",
    title: "Filtration Systems",
    eyebrow: "Integrated Solutions",
    description:
      "Configurable filtration systems for multi-stage removal, process protection, and water quality control.",
    image: "/product-filtration-systems.png",
    specs: ["Multi-stage layouts", "Flow-based sizing", "Upgrade-ready architecture"],
    icon: Settings2,
  },
  {
    id: "process-equipment",
    title: "Industrial Process Equipment",
    eyebrow: "Plant Support",
    description:
      "Complementary process equipment selected to support filtration, separation, transfer, and treatment workflows.",
    image: "/product-process-equipment.png",
    specs: ["Process integration", "Industrial materials", "Maintenance-aware selection"],
    icon: FlaskConical,
  },
];

export const featuredProducts = products.filter((product) => product.featured);
