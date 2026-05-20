import { memo, useCallback, useEffect, useRef, useState } from 'react'

const AUTOPLAY_MS = 4800

function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}

/**
 * In-card image gallery only: crossfading slides + pagination dots.
 * State is local — each fleet card mounts its own instance.
 */
function FleetImageSliderInner({ images }) {
  const [index, setIndex] = useState(0)
  const pausedRef = useRef(false)
  const n = images.length

  const goTo = useCallback((i) => {
    setIndex(((i % n) + n) % n)
  }, [n])

  useEffect(() => {
    if (n < 2) return undefined
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return undefined

    const id = window.setInterval(() => {
      if (pausedRef.current) return
      setIndex((i) => (i + 1) % n)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [n])

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
      <div className="fleet-slider-viewport relative h-[200px] w-full overflow-hidden bg-white transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] will-change-transform">
        {images.map((img, i) => (
          <img
            key={`${img.src}-${i}`}
            src={img.src}
            alt={img.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className={cx(
              'pointer-events-none absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-500 ease-out',
              i === index ? 'z-[1] opacity-100' : 'z-0 opacity-0',
            )}
            aria-hidden={i !== index}
          />
        ))}
      </div>

      {n > 1 ? (
        <div
          className="fleet-dots flex justify-center gap-2 bg-white px-2 pb-3 pt-2"
          role="group"
          aria-label="Vehicle photos"
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show photo ${i + 1} of ${n}`}
              aria-current={i === index || undefined}
              className={cx(
                'h-2 shrink-0 rounded-full border-0 bg-[#ddd] p-0 transition-all duration-200 ease-out',
                'cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FCB813]',
                i === index ? 'w-6 rounded-md bg-[#0a0a0a]' : 'w-2',
              )}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export const FleetImageSlider = memo(FleetImageSliderInner)
