import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import CarouselNavButtons from '../common/CarouselNavButtons.jsx'
import ServiceCard from './ServiceCard.jsx'

const GAP_PX = 20

function useServicesPerView() {
  const [w, setW] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1280,
  )
  useEffect(() => {
    const onResize = () => setW(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  if (w <= 720) return 1
  if (w <= 1024) return 2
  return 4
}

function chunkItems(items, size) {
  const out = []
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size))
  }
  return out
}

function NavArrows({ onPrev, onNext }) {
  return (
    <CarouselNavButtons
      className="services-nav"
      onPrev={onPrev}
      onNext={onNext}
      prevLabel="Previous services"
      nextLabel="Next services"
    />
  )
}

function ServicesIntro() {
  return (
    <div className="services-intro">
      <h2 className="section-title">Our Services</h2>
      <p className="section-sub">
        From airport rides to city travel, we&apos;ve got every trip covered with comfort and style.
      </p>
    </div>
  )
}

function MobilePageCarousel({ pages, onPrevRef, onNextRef }) {
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

  useEffect(() => {
    onPrevRef.current = goPrev
    onNextRef.current = goNext
  }, [goPrev, goNext, onPrevRef, onNextRef])

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
    <div className="services-carousel-shell">
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
              className="reviews-carousel-page services-carousel-page"
              style={{ flex: `0 0 calc(100% / ${pageCount})` }}
            >
              {group.map((item) => (
                <ServiceCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  imageClass={item.imageClass}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DesktopWindowCarousel({ items, visible, onPrevRef, onNextRef }) {
  const viewportRef = useRef(null)
  const [viewportW, setViewportW] = useState(0)
  const [start, setStart] = useState(0)
  const [noTransition, setNoTransition] = useState(false)
  const touchStartX = useRef(null)

  const maxStart = Math.max(0, items.length - visible)
  const cardW =
    viewportW > 0 ? (viewportW - GAP_PX * (visible - 1)) / visible : 0
  const stepPx = cardW + GAP_PX

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return undefined

    const measure = () => {
      const w = el.clientWidth
      setViewportW(w)
      const mx = Math.max(0, items.length - visible)
      setStart((s) => {
        const capped = Math.min(s, mx)
        return Number.isFinite(capped) ? capped : 0
      })
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [items.length, visible])

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

  useEffect(() => {
    onPrevRef.current = goPrev
    onNextRef.current = goNext
  }, [goPrev, goNext, onPrevRef, onNextRef])

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
    <div className="services-carousel-shell">
      <div
        ref={viewportRef}
        className="reviews-carousel-viewport"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={trackClass}
          style={{ transform: `translate3d(-${translatePx}px,0,0)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="reviews-carousel-window-cell services-carousel-window-cell"
              style={
                viewportW > 0
                  ? { flex: `0 0 ${cardW}px`, minWidth: 0 }
                  : { minWidth: 0 }
              }
            >
              <ServiceCard
                title={item.title}
                description={item.description}
                imageClass={item.imageClass}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ServicesCarousel({ items = [] }) {
  const perView = useServicesPerView()
  const pages = useMemo(() => chunkItems(items, perView), [items, perView])
  const prevRef = useRef(() => {})
  const nextRef = useRef(() => {})

  const handlePrev = useCallback(() => prevRef.current(), [])
  const handleNext = useCallback(() => nextRef.current(), [])

  return (
    <>
      <ServicesIntro />
      <div className="services-carousel-wrap">
        {perView === 1 ? (
          <MobilePageCarousel
            key="mobile"
            pages={pages}
            onPrevRef={prevRef}
            onNextRef={nextRef}
          />
        ) : (
          <DesktopWindowCarousel
            key={perView}
            items={items}
            visible={perView}
            onPrevRef={prevRef}
            onNextRef={nextRef}
          />
        )}
        <div className="services-carousel-controls">
          <NavArrows onPrev={handlePrev} onNext={handleNext} />
        </div>
      </div>
    </>
  )
}
