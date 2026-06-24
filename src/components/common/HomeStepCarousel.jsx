import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import CarouselNavButtons from './CarouselNavButtons.jsx'
import { useCssVars } from '../../hooks/useCssVars.js'

const GAP_PX = 20

function useStepVisibleCount(variant = 'destinations', itemCount = 4) {
  const [w, setW] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1280,
  )

  useEffect(() => {
    const onResize = () => setW(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  if (variant !== 'destinations') {
    if (w <= 720) return itemCount
    if (w <= 1024) return Math.min(itemCount, 4)
    return 4
  }

  if (w <= 720) return 1
  if (w <= 1024) return 2
  return 4
}

/**
 * Discrete horizontal carousel — waits `startDelayMs`, then advances one card
 * every `stepIntervalMs` (default 1s). Not a continuous marquee.
 */
export default function HomeStepCarousel({
  items,
  renderItem,
  startDelayMs = 1000,
  stepIntervalMs = 1000,
  gap = GAP_PX,
  className = '',
  viewportClassName = '',
  getItemKey = (item) => item.id,
  controlsClassName = '',
  variant = 'destinations',
  fixedCardWidth,
  loop = false,
}) {
  const n = items.length
  const visible = useStepVisibleCount(variant, n)
  const isLoop = loop && n > 1
  const displayItems = useMemo(
    () => (isLoop ? [...items, ...items] : items),
    [isLoop, items],
  )
  const viewportRef = useRef(null)
  const [viewportW, setViewportW] = useState(0)
  const [start, setStart] = useState(0)
  const [noTransition, setNoTransition] = useState(false)
  const pausedRef = useRef(false)
  const startRef = useRef(0)
  const animatingRef = useRef(false)

  const cardW =
    fixedCardWidth ??
    (viewportW > 0 ? (viewportW - gap * (visible - 1)) / visible : 0)
  const stepPx = cardW + gap
  const maxStart = isLoop
    ? n
    : fixedCardWidth
      ? Math.max(0, n - 1)
      : Math.max(0, n - visible)

  useEffect(() => {
    startRef.current = start
  }, [start])

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return undefined

    const measure = () => {
      const w = el.clientWidth
      setViewportW(w)
      const mx = isLoop ? n : fixedCardWidth ? Math.max(0, n - 1) : Math.max(0, n - visible)
      setStart((s) => Math.min(s, mx))
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [fixedCardWidth, isLoop, n, visible])

  const snapAfter = useCallback((applyPosition) => {
    setNoTransition(true)
    applyPosition()
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setNoTransition(false))
    })
  }, [])

  const onTransitionEnd = useCallback(
    (e) => {
      if (e.propertyName !== 'transform' || !isLoop) return
      const s = startRef.current
      if (s >= n) {
        snapAfter(() => {
          setStart(0)
          animatingRef.current = false
        })
      } else {
        animatingRef.current = false
      }
    },
    [isLoop, n, snapAfter],
  )

  const goNext = useCallback(() => {
    if (isLoop) {
      if (animatingRef.current) return
      animatingRef.current = true
      setNoTransition(false)
      setStart((s) => s + 1)
      return
    }
    if (maxStart < 1) return
    if (start >= maxStart) {
      snapAfter(() => setStart(0))
    } else {
      setNoTransition(false)
      setStart((s) => s + 1)
    }
  }, [isLoop, maxStart, snapAfter, start])

  const goPrev = useCallback(() => {
    if (isLoop) {
      if (animatingRef.current) return
      animatingRef.current = true
      if (start <= 0) {
        setNoTransition(true)
        setStart(n)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setNoTransition(false)
            setStart(n - 1)
          })
        })
      } else {
        setNoTransition(false)
        setStart((s) => s - 1)
      }
      return
    }
    if (maxStart < 1) return
    if (start <= 0) {
      snapAfter(() => setStart(maxStart))
    } else {
      setNoTransition(false)
      setStart((s) => s - 1)
    }
  }, [isLoop, maxStart, n, snapAfter, start])

  useEffect(() => {
    const allVisible = visible >= n
    const canAutoplay = !allVisible && (isLoop ? n >= 2 : maxStart >= 1)
    if (!canAutoplay) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return undefined

    let intervalId

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        if (pausedRef.current || animatingRef.current) return
        goNext()
      }, stepIntervalMs)
    }, startDelayMs)

    return () => {
      window.clearTimeout(timeoutId)
      if (intervalId) window.clearInterval(intervalId)
    }
  }, [goNext, isLoop, maxStart, n, startDelayMs, stepIntervalMs, visible])

  const trackClass = noTransition
    ? 'home-step-carousel-track home-step-carousel-track--offset is-snapping'
    : 'home-step-carousel-track home-step-carousel-track--offset'

  const translatePx = viewportW > 0 && stepPx > 0 ? start * stepPx : 0
  const trackRef = useRef(null)
  const cellW = cardW > 0 ? cardW : fixedCardWidth
  useCssVars(trackRef, {
    '--carousel-gap': `${gap}px`,
    '--carousel-offset-px': `${translatePx}px`,
    ...(cellW ? { '--carousel-cell-width': `${cellW}px` } : {}),
  })

  return (
    <div
      className={`home-step-carousel${className ? ` ${className}` : ''}`}
      onMouseEnter={() => {
        pausedRef.current = true
      }}
      onMouseLeave={() => {
        pausedRef.current = false
      }}
    >
      <div
        ref={viewportRef}
        className={`home-step-carousel-viewport${viewportClassName ? ` ${viewportClassName}` : ''}`}
      >
        <div
          ref={trackRef}
          className={trackClass}
          onTransitionEnd={onTransitionEnd}
        >
          {displayItems.map((item, index) => (
            <div
              key={isLoop ? `${getItemKey(item)}-${index}` : getItemKey(item)}
              className={`home-step-carousel-cell home-step-carousel-cell--sized${fixedCardWidth ? ' home-step-carousel-cell--fixed' : ''}`}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      <div className={`home-step-carousel-controls${controlsClassName ? ` ${controlsClassName}` : ''}`}>
        <CarouselNavButtons
          onPrev={goPrev}
          onNext={goNext}
          prevLabel="Previous slide"
          nextLabel="Next slide"
        />
      </div>
    </div>
  )
}
