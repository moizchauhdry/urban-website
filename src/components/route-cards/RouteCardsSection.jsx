import ScrollPinnedLuxuryCards from '../luxury-carousel/ScrollPinnedLuxuryCards.jsx'
import { getRouteCards } from '../../data/routeCardsPages.jsx'

/** Scroll-pinned content blocks (route cards) — content keyed by pageKey. */
export default function RouteCardsSection({ pageKey }) {
  let cards
  try {
    cards = getRouteCards(pageKey)
  } catch {
    return null
  }

  return <ScrollPinnedLuxuryCards cards={cards} />
}
