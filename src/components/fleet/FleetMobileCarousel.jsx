import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FleetCard } from './FleetCard.jsx'

/**
 * Single-card fleet carousel for narrow viewports.
 * Clone slides at ends so looping always animates smoothly (no instant jumps).
 */
export default function FleetMobileCarousel({ items }) {
  const n = items.length

  const extended = useMemo(() => {
    if (n <= 1) return items
    return [items[n - 1], ...items, items[0]]
  }, [items, n])

  const totalSlides = extended.length
  const [slideIndex, setSlideIndex] = useState(n <= 1 ? 0 : 1)
  const [noTransition, setNoTransition] = useState(false)
  const slideIndexRef = useRef(slideIndex)
  const animatingRef = useRef(false)
  const touchStartX = useRef(null)

  useEffect(() => {
    slideIndexRef.current = slideIndex
  }, [slideIndex])

  const finishSnap = useCallback((nextIdx) => {
    setNoTransition(true)
    setSlideIndex(nextIdx)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setNoTransition(false)
        animatingRef.current = false
      })
    })
  }, [])

  const onTransitionEnd = useCallback(
    (e) => {
      if (e.propertyName !== 'transform') return
      const i = slideIndexRef.current
      if (n <= 1) {
        animatingRef.current = false
        return
      }
      if (i === totalSlides - 1) {
        finishSnap(1)
      } else if (i === 0) {
        finishSnap(n)
      } else {
        animatingRef.current = false
      }
    },
    [n, totalSlides, finishSnap],
  )

  const goNext = useCallback(() => {
    if (n < 2 || animatingRef.current) return
    animatingRef.current = true
    setNoTransition(false)
    setSlideIndex((s) => s + 1)
  }, [n])

  const goPrev = useCallback(() => {
    if (n < 2 || animatingRef.current) return
    animatingRef.current = true
    setNoTransition(false)
    setSlideIndex((s) => s - 1)
  }, [n])

  const onTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null
  }, [])

  const onTouchEnd = useCallback(
    (e) => {
      const start = touchStartX.current
      touchStartX.current = null
      if (start == null || n < 2) return
      const end = e.changedTouches[0]?.clientX
      if (end == null) return
      const dx = end - start
      if (dx < -50) goNext()
      else if (dx > 50) goPrev()
    },
    [goNext, goPrev, n],
  )

  const trackClass = noTransition
    ? 'fleet-mobile-carousel-track is-snapping'
    : 'fleet-mobile-carousel-track'

  if (n <= 1) {
    return (
      <div className="fleet-mobile-carousel">
        <div className="fleet-mobile-carousel-viewport">
          {items[0] ? <FleetCard item={items[0]} /> : null}
        </div>
      </div>
    )
  }

  const pct = 100 / totalSlides

  return (
    <div className="fleet-mobile-carousel">
      <div
        className="fleet-mobile-carousel-viewport"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={trackClass}
          style={{
            width: `${totalSlides * 100}%`,
            transform: `translate3d(-${slideIndex * pct}%,0,0)`,
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {extended.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="fleet-mobile-carousel-slide"
              style={{ flex: `0 0 ${pct}%` }}
            >
              <FleetCard item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="review-nav fleet-mobile-carousel-nav">
        <button type="button" onClick={goPrev} aria-label="Previous vehicle">
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button type="button" onClick={goNext} aria-label="Next vehicle">
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  )
}
