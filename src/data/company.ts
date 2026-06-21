import {
  Factory,
  FlaskConical,
  Gauge,
  Headphones,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import type {
  FAQ,
  NavigationItem,
  ProcessStep,
  Stat,
  ValueProposition,
} from "@/types/content";

export const company = {
  name: "SUN SHINE ENTERPRISES",
  shortName: "Sun Shine",
  tagline: "Engineered filtration for demanding industrial systems.",
  description:
    "Premium filtration components, housings, cartridges, and process equipment built for reliability across water treatment and industrial operations.",
  email: "sales@sunshineenterprises.co",
  phone: "+91 98765 43210",
  location: "India",
} as const;

export const navigationItems: NavigationItem[] = [
  { label: "Products", href: "/#products" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "Quality", href: "/#quality" },
  { label: "Contact", href: "/contact" },
];

export const trustStats: Stat[] = [
  {
    value: "6+",
    label: "Product Families",
    detail: "Cartridges, housings, systems, and process equipment",
  },
  {
    value: "24/7",
    label: "Operational Focus",
    detail: "Components selected for continuous-duty environments",
  },
  {
    value: "ISO",
    label: "Quality Mindset",
    detail: "Documentation-ready supply and repeatable specifications",
  },
  {
    value: "B2B",
    label: "Industrial Supply",
    detail: "Built for OEMs, plants, contractors, and project teams",
  },
];

export const valuePropositions: ValueProposition[] = [
  {
    id: "application-fit",
    title: "Application-led selection",
    description:
      "Recommendations start from process media, pressure, temperature, flow, and maintenance constraints.",
    icon: Gauge,
  },
  {
    id: "industrial-grade",
    title: "Industrial-grade supply",
    description:
      "Components are organized for repeat purchase, traceable specs, and project-grade documentation.",
    icon: Factory,
  },
  {
    id: "quality-assurance",
    title: "Quality-first execution",
    description:
      "Every engagement prioritizes fit, durability, serviceability, and long-term operating economics.",
    icon: ShieldCheck,
  },
  {
    id: "responsive-support",
    title: "Responsive technical support",
    description:
      "Teams get clear product guidance, fast quoting support, and practical replacement recommendations.",
    icon: Headphones,
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "diagnose",
    title: "Diagnose",
    description:
      "Map the process, contaminants, flow rates, operating pressure, service cycle, and installation envelope.",
  },
  {
    id: "specify",
    title: "Specify",
    description:
      "Select cartridge media, housing metallurgy, seals, connection standards, and system configuration.",
  },
  {
    id: "supply",
    title: "Supply",
    description:
      "Coordinate product availability, technical documentation, packaging, and project delivery timelines.",
  },
  {
    id: "support",
    title: "Support",
    description:
      "Assist with replacements, maintenance planning, compatibility checks, and future upgrade paths.",
  },
];

export const faqs: FAQ[] = [
  {
    id: "custom-products",
    question: "Can products be specified for a unique industrial process?",
    answer:
      "Yes. The product recommendation can be adapted around flow rate, pressure, micron rating, material compatibility, connection type, and maintenance access.",
  },
  {
    id: "replacement-cartridges",
    question: "Do you support replacement filter cartridge selection?",
    answer:
      "Yes. Existing cartridge dimensions, end caps, media type, gasket material, and operating conditions can be mapped to a suitable replacement.",
  },
  {
    id: "bulk-supply",
    question: "Is the website architecture ready for a larger catalog?",
    answer:
      "Yes. Products, industries, testimonials, FAQ, process steps, and navigation are data-driven so additional catalog items can be added without changing section components.",
  },
  {
    id: "project-teams",
    question: "Who is this offering designed for?",
    answer:
      "The supply model fits manufacturers, process plants, OEMs, water treatment contractors, EPC teams, and maintenance departments.",
  },
];

export const capabilityHighlights = [
  { label: "Micron precision", icon: Sparkles },
  { label: "Housing compatibility", icon: Wrench },
  { label: "Project-ready supply", icon: PackageCheck },
  { label: "Process chemistry fit", icon: FlaskConical },
] as const;
