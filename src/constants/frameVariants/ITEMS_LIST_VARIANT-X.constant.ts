export const CHILD_VARIANT_X = {
  hidden: { opacity: 0, x: -10, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    x: -10,
    scale: 0.95,
  },
};
export const PARENT_VARIANT_X = {
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
    },
  },
};
