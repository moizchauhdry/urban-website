import heroBgSm from '../assets/hero_image-800.webp'
import heroBgLg from '../assets/hero_image-1440.webp'

/** Site-wide hero LCP background — 800w mobile, 1440w desktop. */
export const HERO_BG_DEFAULT = heroBgSm
export const HERO_BG_SRCSET = `${heroBgSm} 800w, ${heroBgLg} 1440w`
export const HERO_BG_SIZES = '(max-width: 1024px) 800px, 1440px'
export const HERO_BG_WIDTH = 1440
export const HERO_BG_HEIGHT = 810
