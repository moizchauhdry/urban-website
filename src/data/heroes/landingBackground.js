import heroLandingSm from '../../assets/hero/pages/landing-800.webp'
import heroLandingLg from '../../assets/hero/pages/landing-1440.webp'
import heroMiamiSm from '../../assets/hero/pages/miami-800.webp'
import heroMiamiLg from '../../assets/hero/pages/miami-1440.webp'
import heroConnecticutSm from '../../assets/hero/pages/connecticut-800.webp'
import heroConnecticutLg from '../../assets/hero/pages/connecticut-1440.webp'
import heroNewyorkSm from '../../assets/hero/pages/newyork-800.webp'
import heroNewyorkLg from '../../assets/hero/pages/newyork-1440.webp'
import heroNewjerseySm from '../../assets/hero/pages/newjersey-800.webp'
import heroNewjerseyLg from '../../assets/hero/pages/newjersey-1440.webp'
import heroBostonSm from '../../assets/hero/pages/boston-800.webp'
import heroBostonLg from '../../assets/hero/pages/boston-1440.webp'
import heroChicagoSm from '../../assets/hero/pages/chicago-800.webp'
import heroChicagoLg from '../../assets/hero/pages/chicago-1440.webp'
import heroMilwaukeeSm from '../../assets/hero/pages/milwaukee-800.webp'
import heroMilwaukeeLg from '../../assets/hero/pages/milwaukee-1440.webp'
import heroAtlantaSm from '../../assets/hero/pages/atlanta-800.webp'
import heroAtlantaLg from '../../assets/hero/pages/atlanta-1440.webp'
import heroTexasSm from '../../assets/hero/pages/texas-800.webp'
import heroTexasLg from '../../assets/hero/pages/texas-1440.webp'
import heroFloridaSm from '../../assets/hero/pages/florida-800.webp'
import heroFloridaLg from '../../assets/hero/pages/florida-1440.webp'
import heroManhattanSm from '../../assets/hero/pages/manhattan-800.webp'
import heroManhattanLg from '../../assets/hero/pages/manhattan-1440.webp'
import heroNycLimoSm from '../../assets/hero/pages/nyc-limo-800.webp'
import heroNycLimoLg from '../../assets/hero/pages/nyc-limo-1440.webp'
import heroHartfordSm from '../../assets/hero/pages/hartford-800.webp'
import heroHartfordLg from '../../assets/hero/pages/hartford-1440.webp'
import heroNewhavenSm from '../../assets/hero/pages/newhaven-800.webp'
import heroNewhavenLg from '../../assets/hero/pages/newhaven-1440.webp'
import heroStamfordSm from '../../assets/hero/pages/stamford-800.webp'
import heroStamfordLg from '../../assets/hero/pages/stamford-1440.webp'
import heroGreenwichSm from '../../assets/hero/pages/greenwich-800.webp'
import heroGreenwichLg from '../../assets/hero/pages/greenwich-1440.webp'
import heroNorwalkSm from '../../assets/hero/pages/norwalk-800.webp'
import heroNorwalkLg from '../../assets/hero/pages/norwalk-1440.webp'
import heroDanburySm from '../../assets/hero/pages/danbury-800.webp'
import heroDanburyLg from '../../assets/hero/pages/danbury-1440.webp'
import heroFairfieldSm from '../../assets/hero/pages/fairfield-800.webp'
import heroFairfieldLg from '../../assets/hero/pages/fairfield-1440.webp'
import heroJfkSm from '../../assets/hero/pages/jfk-800.webp'
import heroJfkLg from '../../assets/hero/pages/jfk-1440.webp'
import heroLgaSm from '../../assets/hero/pages/lga-800.webp'
import heroLgaLg from '../../assets/hero/pages/lga-1440.webp'
import heroEwrSm from '../../assets/hero/pages/ewr-800.webp'
import heroEwrLg from '../../assets/hero/pages/ewr-1440.webp'
import heroBdlSm from '../../assets/hero/pages/bdl-800.webp'
import heroBdlLg from '../../assets/hero/pages/bdl-1440.webp'
import heroBosSm from '../../assets/hero/pages/bos-800.webp'
import heroBosLg from '../../assets/hero/pages/bos-1440.webp'
import heroMiaSm from '../../assets/hero/pages/mia-800.webp'
import heroMiaLg from '../../assets/hero/pages/mia-1440.webp'
import heroOrdSm from '../../assets/hero/pages/ord-800.webp'
import heroOrdLg from '../../assets/hero/pages/ord-1440.webp'
import heroMkeSm from '../../assets/hero/pages/mke-800.webp'
import heroMkeLg from '../../assets/hero/pages/mke-1440.webp'
import heroCtBostonSm from '../../assets/hero/pages/ct-boston-800.webp'
import heroCtBostonLg from '../../assets/hero/pages/ct-boston-1440.webp'
import heroBostonLimoSm from '../../assets/hero/pages/boston-limo-800.webp'
import heroBostonLimoLg from '../../assets/hero/pages/boston-limo-1440.webp'
import heroBostonChauffeurSm from '../../assets/hero/pages/boston-chauffeur-800.webp'
import heroBostonChauffeurLg from '../../assets/hero/pages/boston-chauffeur-1440.webp'
import { getDestinationId } from '../destinationPacks.js'

/**
 * Shared landing hero art — sync-importable so service/airport pages can paint
 * the LCP image before the large landings.jsx chunk resolves.
 */
export const LANDING_BACKGROUND = {
  default: heroLandingSm,
  sm: heroLandingSm,
  lg: heroLandingLg,
  // 100vw so phones (DPR 1.75) pick 800w instead of 1440w.
  sizes: '100vw',
  width: 1440,
  height: 810,
}

function destBackground(sm, lg) {
  return {
    ...LANDING_BACKGROUND,
    default: sm,
    sm,
    lg,
  }
}

export const MIAMI_BACKGROUND = {
  ...LANDING_BACKGROUND,
  default: heroMiamiSm,
  sm: heroMiamiSm,
  lg: heroMiamiLg,
}

const DESTINATION_BACKGROUNDS = {
  connecticut: destBackground(heroConnecticutSm, heroConnecticutLg),
  newyork: destBackground(heroNewyorkSm, heroNewyorkLg),
  newjersey: destBackground(heroNewjerseySm, heroNewjerseyLg),
  boston: destBackground(heroBostonSm, heroBostonLg),
  chicago: destBackground(heroChicagoSm, heroChicagoLg),
  milwaukee: destBackground(heroMilwaukeeSm, heroMilwaukeeLg),
  atlanta: destBackground(heroAtlantaSm, heroAtlantaLg),
  texas: destBackground(heroTexasSm, heroTexasLg),
  florida: destBackground(heroFloridaSm, heroFloridaLg),
}

const PAGE_HERO_OVERRIDES = {
  'manhattan-car-service': destBackground(heroManhattanSm, heroManhattanLg),
  'nyc-limo-service': destBackground(heroNycLimoSm, heroNycLimoLg),
  'hartford-ct-car-service': destBackground(heroHartfordSm, heroHartfordLg),
  'new-haven-ct-car-service': destBackground(heroNewhavenSm, heroNewhavenLg),
  'stamford-ct-car-service': destBackground(heroStamfordSm, heroStamfordLg),
  'greenwich-ct-car-service': destBackground(heroGreenwichSm, heroGreenwichLg),
  'norwalk-ct-car-service': destBackground(heroNorwalkSm, heroNorwalkLg),
  'danbury-ct-car-service': destBackground(heroDanburySm, heroDanburyLg),
  'fairfield-ct-car-service': destBackground(heroFairfieldSm, heroFairfieldLg),
  'jfk-airport-car-service': destBackground(heroJfkSm, heroJfkLg),
  'ct-to-jfk-airport-car-service': destBackground(heroJfkSm, heroJfkLg),
  'lga-airport-car-service': destBackground(heroLgaSm, heroLgaLg),
  'newark-airport-service': destBackground(heroEwrSm, heroEwrLg),
  'bdl-airport-car-service': destBackground(heroBdlSm, heroBdlLg),
  'bos-airport-car-service': destBackground(heroBosSm, heroBosLg),
  'miami-airport-car-service': destBackground(heroMiaSm, heroMiaLg),
  'miami-airport-limo-service': destBackground(heroMiaSm, heroMiaLg),
  'chicago-airport-car-service': destBackground(heroOrdSm, heroOrdLg),
  'milwaukee-to-ohare-car-service': destBackground(heroOrdSm, heroOrdLg),
  'milwaukee-airport-limo-service': destBackground(heroMkeSm, heroMkeLg),
  'connecticut-to-boston-car-service': destBackground(heroCtBostonSm, heroCtBostonLg),
  'boston-limo-service': destBackground(heroBostonLimoSm, heroBostonLimoLg),
  'boston-chauffeur-service': destBackground(heroBostonChauffeurSm, heroBostonChauffeurLg),
}

/** Miami-area pages — keep in sync with the backgrounds set in landings.jsx. */
const MIAMI_PAGES = [
  'miami-car-service',
  'miami-chauffeur-service',
  'miami-airport-car-service',
  'miami-airport-limo-service',
  'miami-to-orlando-car-service',
  'miami-to-naples-car-service',
  'miami-to-fort-lauderdale-car-service',
  'west-palm-beach-to-miami-limo-service',
]

const MIAMI_PAGE_SET = new Set(MIAMI_PAGES)

/** @param {string} pageKey */
export function getLandingBackground(pageKey) {
  if (PAGE_HERO_OVERRIDES[pageKey]) return PAGE_HERO_OVERRIDES[pageKey]
  if (MIAMI_PAGE_SET.has(pageKey)) return MIAMI_BACKGROUND
  const dest = getDestinationId(pageKey)
  if (dest && DESTINATION_BACKGROUNDS[dest]) return DESTINATION_BACKGROUNDS[dest]
  return LANDING_BACKGROUND
}
