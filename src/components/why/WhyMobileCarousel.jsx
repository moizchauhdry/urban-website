import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Icon from '../common/Icon.jsx'
import { usePointerSwipe } from '../../hooks/usePointerSwipe.js'
import WhyCard from './WhyCard.jsx'

/** One-card carousel with arrows — mobile only (≤720px). */
export default function WhyMobileCarousel({ items }) {
  const n = items.length
  const viewportRef = useRef(null)
  const [viewportW, setViewportW] = useState(0)

  const extended = useMemo(() => {
    if (n <= 1) return items
    return [items[n - 1], ...items, items[0]]
  }, [items, n])

  const totalSlides = extended.length
  const [slideIndex, setSlideIndex] = useState(n <= 1 ? 0 : 1)
  const [noTransition, setNoTransition] = useState(false)
  const slideIndexRef = useRef(slideIndex)
  const animatingRef = useRef(false)

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return undefined

    const measure = () => setViewportW(el.clientWidth)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

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
      if (i === totalSlides - 1) finishSnap(1)
      else if (i === 0) finishSnap(n)
      else animatingRef.current = false
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

  const swipe = usePointerSwipe(goNext, goPrev, n >= 2)

  const trackClass = noTransition
    ? 'why-carousel-track is-snapping'
    : 'why-carousel-track'

  const translatePx = viewportW > 0 ? slideIndex * viewportW : 0
  const trackW = viewportW > 0 ? totalSlides * viewportW : undefined

  if (n <= 1) {
    return (
      <div className="why-carousel">
        <div ref={viewportRef} className="why-carousel-viewport">
          <div className="why-carousel-slide-inner">
            {items[0] ? <WhyCard item={items[0]} /> : null}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="why-carousel">
      <div
        ref={viewportRef}
        className="why-carousel-viewport fleet-carousel-viewport--draggable"
        onPointerDown={swipe.onPointerDown}
        onPointerUp={swipe.onPointerUp}
        onPointerCancel={swipe.onPointerCancel}
      >
        <div
          className={trackClass}
          style={{
            width: trackW != null ? `${trackW}px` : undefined,
            transform:
              viewportW > 0
                ? `translate3d(-${translatePx}px,0,0)`
                : undefined,
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {extended.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="why-carousel-slide"
              style={
                viewportW > 0
                  ? { flex: `0 0 ${viewportW}px`, width: `${viewportW}px` }
                  : undefined
              }
            >
              <div className="why-carousel-slide-inner">
                <WhyCard item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="review-nav why-carousel-nav">
        <button type="button" onClick={goPrev} aria-label="Previous feature">
          <Icon name="arrow-left" size={14} />
        </button>
        <button type="button" onClick={goNext} aria-label="Next feature">
          <Icon name="arrow-right" size={14} />
        </button>
      </div>
    </div>
  )
}
