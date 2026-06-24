import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import CarouselNavButtons from '../common/CarouselNavButtons.jsx'
import { FleetCard } from './FleetCard.jsx'
import { FleetCarouselDots } from './FleetCarouselDots.jsx'
import FleetCategoryTabs from '../fleet/FleetCategoryTabs.jsx'
import { filterFleetByCategory } from '../../constants/fleetCategories.js'
import { usePointerSwipe } from '../../hooks/usePointerSwipe.js'

const GAP_PX = 10
const AUTOPLAY_MS = 5000

function FleetCarouselControls({ onPrev, onNext }) {
  return (
    <div className="fleet-carousel-controls">
      <CarouselNavButtons
        className="services-nav"
        onPrev={onPrev}
        onNext={onNext}
        prevLabel="Previous vehicle"
        nextLabel="Next vehicle"
      />
    </div>
  )
}

function useFleetPerView() {
  const [w, setW] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1280,
  )
  useEffect(() => {
    const onResize = () => setW(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  if (w <= 720) return 1
  return 3
}

/** One-card loop carousel (mobile). */
function FleetCarouselSingle({ items }) {
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
  const pausedRef = useRef(false)

  const logicalIndex = n <= 1 ? 0 : ((slideIndex - 1 + n) % n)

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

  const goToLogical = useCallback(
    (target) => {
      if (n < 2) return
      const t = ((target % n) + n) % n
      if (t === logicalIndex) return
      animatingRef.current = true
      setNoTransition(false)
      setSlideIndex(t + 1)
    },
    [logicalIndex, n],
  )

  useEffect(() => {
    if (n < 2) return undefined
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return undefined

    const id = window.setInterval(() => {
      if (pausedRef.current || animatingRef.current) return
      goNext()
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [goNext, n])

  const swipe = usePointerSwipe(goNext, goPrev, n >= 2)

  const trackClass = noTransition
    ? 'fleet-mobile-carousel-track is-snapping'
    : 'fleet-mobile-carousel-track'

  const translatePx = viewportW > 0 ? slideIndex * viewportW : 0
  const trackW = viewportW > 0 ? totalSlides * viewportW : undefined

  if (n <= 1) {
    return (
      <div className="fleet-carousel">
        <div ref={viewportRef} className="fleet-mobile-carousel-viewport">
          <div className="fleet-mobile-carousel-slide-inner">
            {items[0] ? <FleetCard item={items[0]} priorityLoad /> : null}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="fleet-carousel"
      onMouseEnter={() => {
        pausedRef.current = true
      }}
      onMouseLeave={() => {
        pausedRef.current = false
      }}
    >
      <FleetCarouselControls onPrev={goPrev} onNext={goNext} />

      <div
        ref={viewportRef}
        className="fleet-mobile-carousel-viewport fleet-carousel-viewport--draggable"
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
              className="fleet-mobile-carousel-slide"
              style={
                viewportW > 0
                  ? { flex: `0 0 ${viewportW}px`, width: `${viewportW}px` }
                  : undefined
              }
            >
              <div className="fleet-mobile-carousel-slide-inner">
                <FleetCard item={item} priorityLoad={idx === slideIndex} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <FleetCarouselDots count={n} active={logicalIndex} onSelect={goToLogical} />
    </div>
  )
}

/** Window carousel — 3 cards visible on desktop. */
function FleetCarouselWindow({ items, visible }) {
  const n = items.length
  const viewportRef = useRef(null)
  const [viewportW, setViewportW] = useState(0)
  const [focusIndex, setFocusIndex] = useState(0)
  const [noTransition, setNoTransition] = useState(false)
  const pausedRef = useRef(false)
  const animatingRef = useRef(false)

  const maxStart = Math.max(0, n - visible)
  const start = Math.min(focusIndex, maxStart)
  const cardW =
    viewportW > 0 ? (viewportW - GAP_PX * (visible - 1)) / visible : 0
  const stepPx = cardW + GAP_PX

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return undefined

    const measure = () => {
      const w = el.clientWidth
      setViewportW(w)
      const mx = Math.max(0, n - visible)
      setFocusIndex((s) => Math.min(s, mx))
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [n, visible])

  const snapAfter = useCallback((applyPosition) => {
    setNoTransition(true)
    applyPosition()
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setNoTransition(false)
        animatingRef.current = false
      })
    })
  }, [])

  const goNext = useCallback(() => {
    if (n < 2) return
    animatingRef.current = true
    if (focusIndex >= n - 1) {
      snapAfter(() => setFocusIndex(0))
    } else {
      setNoTransition(false)
      setFocusIndex((s) => s + 1)
    }
  }, [focusIndex, n, snapAfter])

  const goPrev = useCallback(() => {
    if (n < 2) return
    animatingRef.current = true
    if (focusIndex <= 0) {
      snapAfter(() => setFocusIndex(n - 1))
    } else {
      setNoTransition(false)
      setFocusIndex((s) => s - 1)
    }
  }, [focusIndex, n, snapAfter])

  const goTo = useCallback(
    (index) => {
      const t = ((index % n) + n) % n
      if (t === focusIndex) return
      animatingRef.current = true
      setNoTransition(false)
      setFocusIndex(t)
    },
    [focusIndex, n],
  )

  useEffect(() => {
    if (n < 2) return undefined
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return undefined

    const id = window.setInterval(() => {
      if (pausedRef.current || animatingRef.current) return
      goNext()
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [goNext, n])

  const swipe = usePointerSwipe(goNext, goPrev, n >= 2)

  const trackClass = noTransition
    ? 'fleet-desktop-carousel-track is-snapping'
    : 'fleet-desktop-carousel-track'

  const translatePx = viewportW > 0 && stepPx > 0 ? start * stepPx : 0
  const trackW =
    viewportW > 0 && cardW > 0
      ? n * cardW + GAP_PX * (n - 1)
      : undefined

  const onTransitionEnd = useCallback(() => {
    animatingRef.current = false
  }, [])

  return (
    <div
      className="fleet-carousel"
      onMouseEnter={() => {
        pausedRef.current = true
      }}
      onMouseLeave={() => {
        pausedRef.current = false
      }}
    >
      <div
        ref={viewportRef}
        className="fleet-desktop-carousel-viewport fleet-carousel-viewport--draggable"
        onPointerDown={swipe.onPointerDown}
        onPointerUp={swipe.onPointerUp}
        onPointerCancel={swipe.onPointerCancel}
      >
        <div
          className={trackClass}
          style={{
            width: trackW != null ? `${trackW}px` : '100%',
            gap: `${GAP_PX}px`,
            transform: `translate3d(-${translatePx}px,0,0)`,
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              className="fleet-desktop-carousel-cell"
              style={cardW > 0 ? { flex: `0 0 ${cardW}px` } : undefined}
            >
              <FleetCard item={item} priorityLoad={i >= start && i < start + visible} />
            </div>
          ))}
        </div>
      </div>

      <FleetCarouselControls onPrev={goPrev} onNext={goNext} />
      <FleetCarouselDots count={n} active={focusIndex} onSelect={goTo} />
    </div>
  )
}

export default function FleetCarousel({ items, showCategoryTabs = true }) {
  const [category, setCategory] = useState('sedan')
  const filteredItems = useMemo(
    () => (showCategoryTabs ? filterFleetByCategory(items, category) : items),
    [items, category, showCategoryTabs],
  )
  const perView = useFleetPerView()

  return (
    <>
      {showCategoryTabs ? (
        <FleetCategoryTabs active={category} onChange={setCategory} />
      ) : null}
      {perView === 1 ? (
        <FleetCarouselSingle key={category} items={filteredItems} />
      ) : (
        <FleetCarouselWindow key={category} items={filteredItems} visible={perView} />
      )}
    </>
  )
}
