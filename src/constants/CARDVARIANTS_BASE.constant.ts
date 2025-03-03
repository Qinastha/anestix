export const CARDVARIANTS_BASE = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.3,
    },
  }),
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
    },
  },
};
