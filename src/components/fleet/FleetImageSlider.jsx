import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { FleetCarouselDots } from './FleetCarouselDots.jsx'
import { usePointerSwipe } from '../../hooks/usePointerSwipe.js'

const AUTOPLAY_MS = 4500
const FADE_MS = 500

function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}

/** Single slide image with skeleton until fully loaded (cached-safe). */
function FleetSliderSlideImage({ src, alt, isPrimary, eager }) {
  const [loadedSrc, setLoadedSrc] = useState(null)
  const loaded = loadedSrc === src

  const setImgRef = useCallback(
    (node) => {
      if (node?.complete && node.naturalWidth > 0) setLoadedSrc(src)
    },
    [src],
  )

  const markLoaded = useCallback(() => setLoadedSrc(src), [src])

  const photoClass = cx(
    'fleet-slider-photo',
    isPrimary ? 'fleet-slider-photo--primary' : 'fleet-slider-photo--photo',
    loaded ? 'is-loaded' : 'is-loading',
  )

  const skeleton = !loaded ? (
    <span
      className="fleet-slider-skeleton absolute inset-0 z-0 animate-pulse bg-neutral-200"
      aria-hidden="true"
    />
  ) : null

  const img = (
    <img
      ref={setImgRef}
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
      className={photoClass}
      onLoad={markLoaded}
      onError={markLoaded}
    />
  )

  if (isPrimary) {
    return (
      <div className="fleet-slider-primary-stage">
        {skeleton}
        {img}
      </div>
    )
  }

  return (
    <>
      {skeleton}
      {img}
    </>
  )
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
        {images.map((img, i) => {
          const isPrimary = i === 0
          return (
            <div
              key={`${img.src}-${i}`}
              className={cx(
                'fleet-slider-image-wrap',
                isPrimary ? 'fleet-slider-image-wrap--primary' : 'fleet-slider-image-wrap--photo',
                i === index && 'is-active',
              )}
              aria-hidden={i !== index}
            >
              <FleetSliderSlideImage
                src={img.src}
                alt={img.alt}
                isPrimary={isPrimary}
                eager={isPrimary || i === index}
              />
            </div>
          )
        })}
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
