import ScrollPinnedLuxuryCards from '../luxury-carousel/ScrollPinnedLuxuryCards.jsx'

/**
 * @param {{ cards: Array<{
 *   id: string,
 *   railLabel: string,
 *   title: string,
 *   description: string,
 *   description2: string,
 *   imageSrc: string,
 * }> }} props
 */
export default function RouteCardsSection({ cards }) {
  return <ScrollPinnedLuxuryCards cards={cards} />
}
