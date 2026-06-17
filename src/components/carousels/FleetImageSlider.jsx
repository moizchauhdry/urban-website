import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { FleetCarouselDots } from './FleetCarouselDots.jsx'
import { usePointerSwipe } from '../../hooks/usePointerSwipe.js'

const AUTOPLAY_MS = 4500
const FADE_MS = 500
/** Matches .fleet-slider-viewport aspect-ratio 5/4 at 800px reference width */
const FLEET_IMG_WIDTH = 800
const FLEET_IMG_HEIGHT = 640

function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}

/** Single slide image with skeleton until fully loaded (cached-safe). */
function FleetSliderSlideImage({ src, loadSrc, alt, isPrimary, shouldLoad, priorityLoad }) {
  const [dynamicSrc, setDynamicSrc] = useState(null)
  const [loadedSrc, setLoadedSrc] = useState(null)

  const canLoad = shouldLoad && (priorityLoad || !isPrimary)
  const staticSrc = src && !(isPrimary && !priorityLoad) ? src : null
  const resolvedSrc = staticSrc ?? dynamicSrc
  const loaded = Boolean(resolvedSrc && loadedSrc === resolvedSrc)

  useEffect(() => {
    if (staticSrc || !loadSrc || !canLoad) return undefined

    let cancelled = false
    loadSrc().then((mod) => {
      if (!cancelled) setDynamicSrc(mod.default)
    })
    return () => {
      cancelled = true
    }
  }, [staticSrc, loadSrc, canLoad])

  const setImgRef = useCallback(
    (node) => {
      if (node?.complete && node.naturalWidth > 0 && resolvedSrc) {
        setLoadedSrc(resolvedSrc)
      }
    },
    [resolvedSrc],
  )

  const markLoaded = useCallback(() => {
    if (resolvedSrc) setLoadedSrc(resolvedSrc)
  }, [resolvedSrc])

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

  if (!resolvedSrc) {
    return skeleton
  }

  const img = (
    <img
      ref={setImgRef}
      src={resolvedSrc}
      alt={alt}
      width={FLEET_IMG_WIDTH}
      height={FLEET_IMG_HEIGHT}
      loading={isPrimary && priorityLoad ? 'eager' : 'lazy'}
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
function FleetImageSliderInner({ images, priorityLoad = true }) {
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
        className="fleet-slider-viewport fleet-slider-viewport--draggable fleet-image-slider"
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
          const isActive = i === index
          const shouldLoad = isPrimary || isActive
          const slideKey = img.src ?? img.alt

          return (
            <div
              key={`${slideKey}-${i}`}
              className={cx(
                'fleet-slider-image-wrap',
                isPrimary ? 'fleet-slider-image-wrap--primary' : 'fleet-slider-image-wrap--photo',
                isActive && 'is-active',
              )}
              aria-hidden={!isActive}
            >
              <FleetSliderSlideImage
                src={img.src}
                loadSrc={img.loadSrc}
                alt={img.alt}
                isPrimary={isPrimary}
                shouldLoad={shouldLoad}
                priorityLoad={priorityLoad}
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
