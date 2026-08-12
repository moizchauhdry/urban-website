import { useEffect, useState } from 'react'
import LuxuryServiceCard from '../luxury-carousel/LuxuryServiceCard.jsx'
import { getRouteCards } from '../../data/routeCardsPages.jsx'
import { getPopularRoutesForPage } from '../../data/popularRoutesByState.js'

const DESKTOP_STACK_MQ = '(min-width: 1025px)'

function useDesktopStackLayout() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(DESKTOP_STACK_MQ).matches : true,
  )

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_STACK_MQ)
    const onChange = () => setIsDesktop(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return isDesktop
}

/** Static content blocks — image left/right alternating on desktop; image-first on mobile. */
export default function RouteCardsSection({ pageKey }) {
  const isDesktop = useDesktopStackLayout()
  let cards
  try {
    cards = getRouteCards(pageKey)
  } catch {
    return null
  }

  if (!cards?.length) return null

  const popularRoutes = getPopularRoutesForPage(pageKey)
  const hasPopularRoutes = Boolean(popularRoutes?.length)

  return (
    <section className="section luxury-carousel-section" aria-label="Service highlights">
      <div className="container luxury-carousel__container">
        <div className="route-cards-stack">
          {cards.map((card, index) => {
            const isLast = index === cards.length - 1
            // On mobile/tablet always image-left so the photo sits above the copy.
            const layout =
              isDesktop && index % 2 === 1 ? 'image-right' : 'image-left'
            return (
              <LuxuryServiceCard
                key={card.id}
                {...card}
                layout={layout}
                phase="idle"
                showQuoteButton={isLast && !hasPopularRoutes}
                popularRoutes={isLast && hasPopularRoutes ? popularRoutes : null}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
