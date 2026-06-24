import RouteCard from './RouteCard.jsx'

/**
 * @param {{ cards: import('./RouteCard.jsx').default extends (p: infer P) => unknown ? P[] : never }} props
 */
export default function RouteCardsSection({ cards }) {
  if (!cards?.length) return null

  return (
    <section className="section route-cards-section">
      <div className="container route-cards-stack">
        {cards.map((card) => (
          <RouteCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}
