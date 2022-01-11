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

export const zoomInAnimate = {
  hidden: { scale: 0.6, opacity: 0.5 },
  show: {
    scale: 0.8,
    opacity: 1,
    transition: {
      delay: 0.09,
      duration: 5,
      ease: 'easeInOut',
    },
  },
}
