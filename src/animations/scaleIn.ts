import type { Variants } from "framer-motion";

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] },
  },
};
