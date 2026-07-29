import { HOME_HERO } from './home.jsx'

/** @param {string} pageKey */
export function getHomeHero() {
  return HOME_HERO
}

/** Sync API for home only; landings must use loadLandingHero. */
export function getHeroPage(pageKey) {
  if (pageKey === 'home') return HOME_HERO
  throw new Error(
    `getHeroPage sync only supports "home". Use loadLandingHero("${pageKey}") for landings.`,
  )
}

/** @param {string} pageKey */
export async function loadLandingHero(pageKey) {
  if (pageKey === 'home') return HOME_HERO
  const { getLandingHeroPage } = await import('./landings.jsx')
  return getLandingHeroPage(pageKey)
}
