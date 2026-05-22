import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { FleetCarouselDots } from './FleetCarouselDots.jsx'
import { usePointerSwipe } from '../../hooks/usePointerSwipe.js'

const AUTOPLAY_MS = 4500
const FADE_MS = 500

function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}

/**
 * In-card image gallery: crossfade, drag/swipe, dots, autoplay.
 */
function FleetImageSliderInner({ images }) {
  const [index, setIndex] = useState(0)
  const pausedRef = useRef(false)
  const n = images.length

  const goTo = useCallback((i) => {
    setIndex(((i % n) + n) % n)
  }, [n])

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % n)
  }, [n])

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n)
  }, [n])

  useEffect(() => {
    if (n < 2) return undefined
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return undefined

    const id = window.setInterval(() => {
      if (pausedRef.current) return
      goNext()
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [goNext, n])

  const swipe = usePointerSwipe(goNext, goPrev, n >= 2, 36)

  if (n === 0) return null

  return (
    <div
      className="fleet-slider-root"
      onMouseEnter={() => {
        pausedRef.current = true
      }}
      onMouseLeave={() => {
        pausedRef.current = false
      }}
      onFocus={() => {
        pausedRef.current = true
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) pausedRef.current = false
      }}
    >
      <div
        className="fleet-slider-viewport fleet-slider-viewport--draggable"
        style={{ '--fleet-fade-ms': `${FADE_MS}ms` }}
        onPointerDown={(e) => {
          e.stopPropagation()
          swipe.onPointerDown(e)
        }}
        onPointerUp={(e) => {
          e.stopPropagation()
          swipe.onPointerUp(e)
        }}
        onPointerCancel={(e) => {
          e.stopPropagation()
          swipe.onPointerCancel()
        }}
      >
        {images.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className={cx('fleet-slider-image-wrap', i === index && 'is-active')}
            aria-hidden={i !== index}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              draggable={false}
              className="fleet-slider-photo"
            />
          </div>
        ))}
      </div>

      {n > 1 ? (
        <FleetCarouselDots
          count={n}
          active={index}
          onSelect={goTo}
          ariaLabel="Vehicle photos"
        />
      ) : null}
    </div>
  )
}

export const FleetImageSlider = memo(FleetImageSliderInner)
