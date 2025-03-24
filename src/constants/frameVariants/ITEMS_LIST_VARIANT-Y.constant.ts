export const CHILD_VARIANT_Y = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
};
export const PARENT_VARIANT_Y = {
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
