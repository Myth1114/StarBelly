export const TopProductsAnimation = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      duration: 0.9,
      ease: 'easeInOut',
    },
  },
}

export const HeroSectionAnimation = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
}

export const ImageAnimation = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
}
