import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { Quote } from 'lucide-react'
import Icon from '../common/Icon.jsx'
import { ReviewCard } from './ReviewCard.jsx'

const GAP_PX = 24

function AsideColumn() {
  return (
    <div className="review-aside">
      <div className="quote-icon">
        <Quote
          size={36}
          fill="var(--yellow)"
          stroke="var(--yellow)"
          strokeWidth={1.5}
          aria-hidden="true"
          style={{ width: 36, height: 36, flexShrink: 0 }}
        />
      </div>
      <h3>
        What Our
        <br />
        Customers
        <br />
        Are Saying
      </h3>
    </div>
  )
}

function NavArrows({ onPrev, onNext }) {
  return (
    <div className="review-nav">
      <button type="button" onClick={onPrev} aria-label="Previous reviews">
        <Icon name="arrow-left" size={14} />
      </button>
      <button type="button" onClick={onNext} aria-label="Next reviews">
        <Icon name="arrow-right" size={14} />
      </button>
    </div>
  )
}

/**
 * Mobile / tablet: full “pages” (1 or 2 cards) slide together — unchanged behavior.
 */
function PageCarousel({ pages }) {
  const pageCount = pages.length
  const [page, setPage] = useState(0)
  const [noTransition, setNoTransition] = useState(false)
  const touchStartX = useRef(null)

  const snapAfter = useCallback((applyPosition) => {
    setNoTransition(true)
    applyPosition()
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setNoTransition(false))
    })
  }, [])

  const goNext = useCallback(() => {
    if (pageCount < 2) return
    if (page >= pageCount - 1) {
      snapAfter(() => setPage(0))
    } else {
      setNoTransition(false)
      setPage((p) => p + 1)
    }
  }, [page, pageCount, snapAfter])

  const goPrev = useCallback(() => {
    if (pageCount < 2) return
    if (page <= 0) {
      snapAfter(() => setPage(pageCount - 1))
    } else {
      setNoTransition(false)
      setPage((p) => p - 1)
    }
  }, [page, pageCount, snapAfter])

  const onTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null
  }, [])

  const onTouchEnd = useCallback(
    (e) => {
      const start = touchStartX.current
      touchStartX.current = null
      if (start == null || pageCount < 2) return
      const end = e.changedTouches[0]?.clientX
      if (end == null) return
      const dx = end - start
      if (dx < -50) goNext()
      else if (dx > 50) goPrev()
    },
    [goNext, goPrev, pageCount],
  )

  const trackClass = noTransition
    ? 'reviews-carousel-track is-snapping'
    : 'reviews-carousel-track'

  return (
    <>
      <div className="reviews-grid">
        <AsideColumn />
        <div className="reviews-carousel-shell">
          <div
            className="reviews-carousel-viewport"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={trackClass}
              style={{
                width: `${pageCount * 100}%`,
                transform: `translateX(-${(100 * page) / pageCount}%)`,
              }}
            >
              {pages.map((group, pi) => (
                <div
                  key={pi}
                  className="reviews-carousel-page"
                  style={{ flex: `0 0 calc(100% / ${pageCount})` }}
                >
                  {group.map((r) => (
                    <ReviewCard key={r.id} author={r.author} text={r.text} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <NavArrows onPrev={goPrev} onNext={goNext} />
    </>
  )
}

/**
 * Large desktop: always `visible` cards in view; arrows shift the window by 1 card.
 */
function WindowCarousel({ reviews, visible }) {
  const viewportRef = useRef(null)
  const [viewportW, setViewportW] = useState(0)
  const [start, setStart] = useState(0)
  const [noTransition, setNoTransition] = useState(false)
  const touchStartX = useRef(null)

  const maxStart = Math.max(0, reviews.length - visible)
  const cardW =
    viewportW > 0 ? (viewportW - GAP_PX * (visible - 1)) / visible : 0
  const stepPx = cardW + GAP_PX

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return undefined

    const measure = () => {
      const w = el.clientWidth
      setViewportW(w)
      const mx = Math.max(0, reviews.length - visible)
      setStart((s) => {
        const capped = Math.min(s, mx)
        return Number.isFinite(capped) ? capped : 0
      })
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [reviews.length, visible])

  const snapAfter = useCallback((applyPosition) => {
    setNoTransition(true)
    applyPosition()
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setNoTransition(false))
    })
  }, [])

  const goNext = useCallback(() => {
    if (maxStart < 1) return
    if (start >= maxStart) {
      snapAfter(() => setStart(0))
    } else {
      setNoTransition(false)
      setStart((s) => s + 1)
    }
  }, [maxStart, snapAfter, start])

  const goPrev = useCallback(() => {
    if (maxStart < 1) return
    if (start <= 0) {
      snapAfter(() => setStart(maxStart))
    } else {
      setNoTransition(false)
      setStart((s) => s - 1)
    }
  }, [maxStart, snapAfter, start])

  const onTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null
  }, [])

  const onTouchEnd = useCallback(
    (e) => {
      const t0 = touchStartX.current
      touchStartX.current = null
      if (t0 == null || maxStart < 1) return
      const end = e.changedTouches[0]?.clientX
      if (end == null) return
      const dx = end - t0
      if (dx < -50) goNext()
      else if (dx > 50) goPrev()
    },
    [goNext, goPrev, maxStart],
  )

  const trackClass = noTransition
    ? 'reviews-carousel-track reviews-carousel-track--window is-snapping'
    : 'reviews-carousel-track reviews-carousel-track--window'

  const translatePx = viewportW > 0 && stepPx > 0 ? start * stepPx : 0

  return (
    <>
      <div className="reviews-grid">
        <AsideColumn />
        <div className="reviews-carousel-shell">
          <div
            ref={viewportRef}
            className="reviews-carousel-viewport"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={trackClass}
              style={{
                transform: `translate3d(-${translatePx}px,0,0)`,
              }}
            >
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="reviews-carousel-window-cell"
                  style={
                    viewportW > 0
                      ? { flex: `0 0 ${cardW}px`, minWidth: 0 }
                      : { minWidth: 0 }
                  }
                >
                  <ReviewCard author={r.author} text={r.text} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <NavArrows onPrev={goPrev} onNext={goNext} />
    </>
  )
}

export default function ReviewsCarousel(props) {
  if (props.variant === 'page') {
    return <PageCarousel pages={props.pages} />
  }
  return <WindowCarousel reviews={props.reviews} visible={props.visible} />
}
