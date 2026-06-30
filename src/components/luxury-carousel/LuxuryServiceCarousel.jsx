import { useCallback, useEffect, useRef, useState } from 'react'
import Icon from '../common/Icon.jsx'
import LuxuryServiceCard from './LuxuryServiceCard.jsx'

const AUTOPLAY_MS = 4500
const TRANSITION_MS = 700

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
export default function LuxuryServiceCarousel({ cards }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [leavingIndex, setLeavingIndex] = useState(null)
  const [enterPhase, setEnterPhase] = useState(true)
  const pausedRef = useRef(false)
  const animatingRef = useRef(false)
  const count = cards.length

  const goTo = useCallback(
    (nextIndex) => {
      if (count < 2) return
      const target = ((nextIndex % count) + count) % count
      if (target === activeIndex || animatingRef.current) return

      animatingRef.current = true
      setLeavingIndex(activeIndex)
      setEnterPhase(false)
      setActiveIndex(target)

      window.setTimeout(() => {
        setLeavingIndex(null)
        animatingRef.current = false
      }, TRANSITION_MS)

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setEnterPhase(true))
      })
    },
    [activeIndex, count],
  )

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  useEffect(() => {
    if (count < 2) return undefined
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return undefined

    const id = window.setInterval(() => {
      if (pausedRef.current || animatingRef.current) return
      goNext()
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [count, goNext])

  if (!count) return null

  const activeCard = cards[activeIndex]
  const leavingCard = leavingIndex != null ? cards[leavingIndex] : null

  return (
    <section
      className="section luxury-carousel-section"
      aria-roledescription="carousel"
      aria-label="Luxury car service highlights"
      onMouseEnter={() => {
        pausedRef.current = true
      }}
      onMouseLeave={() => {
        pausedRef.current = false
      }}
      onFocus={() => {
        pausedRef.current = true
      }}
      onBlur={() => {
        pausedRef.current = false
      }}
    >
      <div className="container luxury-carousel__container">
        <div className="luxury-carousel__stage">
          <div className="luxury-carousel__viewport">
            {leavingCard ? (
              <LuxuryServiceCard key={`leave-${leavingCard.id}`} {...leavingCard} phase="exit" />
            ) : null}
            <LuxuryServiceCard
              key={`active-${activeCard.id}-${activeIndex}`}
              {...activeCard}
              phase={enterPhase ? 'enter' : 'idle'}
            />
          </div>

          {count > 1 ? (
            <>
              <button
                type="button"
                className="luxury-carousel__arrow luxury-carousel__arrow--prev"
                aria-label="Previous slide"
                onClick={goPrev}
              >
                <Icon name="arrow-left" size={18} />
              </button>
              <button
                type="button"
                className="luxury-carousel__arrow luxury-carousel__arrow--next"
                aria-label="Next slide"
                onClick={goNext}
              >
                <Icon name="arrow-right" size={18} />
              </button>
            </>
          ) : null}
        </div>

        {count > 1 ? (
          <div className="luxury-carousel__dots" role="tablist" aria-label="Choose slide">
            {cards.map((card, index) => (
              <button
                key={card.id}
                type="button"
                role="tab"
                className={`luxury-carousel__dot${index === activeIndex ? ' is-active' : ''}`}
                aria-label={`Slide ${index + 1}: ${card.title}`}
                aria-selected={index === activeIndex}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
