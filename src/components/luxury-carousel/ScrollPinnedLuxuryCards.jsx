import { useCallback, useEffect, useRef, useState } from 'react'
import LuxuryServiceCard from './LuxuryServiceCard.jsx'
import { PHONE_MAX_PX } from '../../config/breakpoints.js'
import { gsap, ScrollTrigger } from '../../utils/gsap.js'

const PHONE_MQ = `(max-width: ${PHONE_MAX_PX}px)`
const EXIT_DISTANCE = 112
const SCRUB_SMOOTH = 1.35
const MIN_VIEWPORT_HEIGHT = 480
const MIN_VIEWPORT_HEIGHT_PHONE = 320
const VIEWPORT_HEIGHT_BUFFER = 44
const VIEWPORT_HEIGHT_BUFFER_PHONE = 28

function isPhoneViewport() {
  return typeof window !== 'undefined' && window.matchMedia(PHONE_MQ).matches
}

function getMinViewportHeight() {
  return isPhoneViewport() ? MIN_VIEWPORT_HEIGHT_PHONE : MIN_VIEWPORT_HEIGHT
}

function getViewportHeightBuffer() {
  return isPhoneViewport() ? VIEWPORT_HEIGHT_BUFFER_PHONE : VIEWPORT_HEIGHT_BUFFER
}

function getStickyTop() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--site-chrome-height')
  const parsed = parseFloat(raw)
  return Number.isFinite(parsed) ? parsed : 0
}

/** @param {number} t */
function easeMilky(t) {
  const clamped = Math.min(1, Math.max(0, t))
  return clamped * clamped * clamped * (clamped * (clamped * 6 - 15) + 10)
}

/**
 * @param {number} index
 * @param {number} progress 0–1
 * @param {number} count
 */
function getCardStackStyle(index, progress, count) {
  const zIndex = count - index
  const lastIndex = count - 1

  if (index === lastIndex) {
    return { translateY: 0, opacity: 1, scale: 1, zIndex }
  }

  const segmentSize = 1 / (count - 1)
  const exitStart = index * segmentSize
  const exitEnd = (index + 1) * segmentSize

  if (progress <= exitStart) {
    return { translateY: 0, opacity: 1, scale: 1, zIndex }
  }

  if (progress >= exitEnd) {
    return { translateY: -EXIT_DISTANCE, opacity: 0, scale: 0.96, zIndex }
  }

  const t = easeMilky((progress - exitStart) / segmentSize)
  return {
    translateY: -EXIT_DISTANCE * t,
    opacity: 1 - t * 0.26,
    scale: 1 - t * 0.028,
    zIndex,
  }
}

function setScrollPinLocked(active) {
  if (active) {
    document.documentElement.dataset.scrollPinLocked = 'true'
  } else {
    delete document.documentElement.dataset.scrollPinLocked
  }
}

/**
 * @param {{ cards: Array<{
 *   id: string,
 *   railLabel: string,
 *   title: string,
 *   description: string,
 *   description2: string,
 *   imageSrc: string,
 * }> }} props
 */
export default function ScrollPinnedLuxuryCards({ cards }) {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const measureRef = useRef(null)
  const viewportHeightRef = useRef(MIN_VIEWPORT_HEIGHT)
  const scrollTriggerRef = useRef(null)
  const [displayProgress, setDisplayProgress] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(MIN_VIEWPORT_HEIGHT)
  const [useScrollPin, setUseScrollPin] = useState(() => {
    if (typeof window === 'undefined') return true
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  const count = cards?.length ?? 0

  const syncProgress = useCallback((progress) => {
    setDisplayProgress(progress)
  }, [])

  useEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setUseScrollPin(!motionMq.matches)
    sync()
    motionMq.addEventListener('change', sync)
    return () => motionMq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!useScrollPin) return undefined

    const measure = () => {
      const node = measureRef.current?.querySelector('.luxury-carousel__card')
      if (!node || !(node instanceof HTMLElement)) return

      const body = node.querySelector('.route-card__body')
      const button = node.querySelector('.luxury-carousel__btn')
      const cardTop = node.getBoundingClientRect().top

      let maxHeight = node.scrollHeight

      if (body instanceof HTMLElement) {
        maxHeight = Math.max(maxHeight, body.scrollHeight + 4)
      }

      if (button instanceof HTMLElement) {
        const btnRect = button.getBoundingClientRect()
        maxHeight = Math.max(maxHeight, btnRect.bottom - cardTop + 12)
      }

      maxHeight = Math.max(
        maxHeight,
        node.getBoundingClientRect().height,
        node.offsetHeight,
      )

      const nextHeight = Math.max(getMinViewportHeight(), Math.ceil(maxHeight + getViewportHeightBuffer()))
      viewportHeightRef.current = nextHeight
      setViewportHeight(nextHeight)
    }

    let rafId = 0
    let ro = null

    const attach = () => {
      if (!measureRef.current) {
        rafId = window.requestAnimationFrame(attach)
        return
      }

      measure()
      ro = new ResizeObserver(measure)
      ro.observe(measureRef.current)
    }

    attach()
    window.addEventListener('resize', measure, { passive: true })
    document.fonts?.ready.then(measure).catch(() => {})

    return () => {
      window.cancelAnimationFrame(rafId)
      ro?.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [useScrollPin, cards])

  useEffect(() => {
    if (!useScrollPin || count < 2) return undefined

    const section = sectionRef.current
    const pin = pinRef.current
    if (!section || !pin) return undefined

    let cancelled = false
    let gsapCtx = null
    let setupRaf = 0

    const setup = () => {
      if (cancelled) return

      gsapCtx = gsap.context(() => {
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: section,
          start: () => `top top+=${getStickyTop()}`,
          end: () => {
            const perCard = Math.max(
              window.innerHeight * 0.58,
              viewportHeightRef.current * 0.7,
              420,
            )
            return `+=${perCard * (count - 1)}`
          },
          pin,
          pinSpacing: true,
          scrub: SCRUB_SMOOTH,
          fastScrollEnd: true,
          anticipatePin: 1.2,
          invalidateOnRefresh: true,
          onToggle: (self) => setScrollPinLocked(self.isActive),
          onUpdate: (self) => syncProgress(self.progress),
        })
      }, section)

      syncProgress(scrollTriggerRef.current?.progress ?? 0)
      ScrollTrigger.refresh()
    }

    setupRaf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) setup()
      })
    })

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('resize', refresh, { passive: true })

    return () => {
      cancelled = true
      cancelAnimationFrame(setupRaf)
      window.removeEventListener('resize', refresh)
      setScrollPinLocked(false)
      scrollTriggerRef.current?.kill()
      scrollTriggerRef.current = null
      gsapCtx?.revert()
    }
  }, [useScrollPin, count, cards, syncProgress])

  useEffect(() => {
    if (!useScrollPin || count < 2) return undefined
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [viewportHeight, useScrollPin, count])

  if (!cards?.length) return null

  const isLastCard = (index) => index === count - 1

  if (!useScrollPin || count < 2) {
    return (
      <section className="section luxury-carousel-section">
        <div className="container luxury-carousel__container">
          <div className="route-cards-stack">
            {cards.map((card, index) => (
              <LuxuryServiceCard
                key={card.id}
                {...card}
                phase="idle"
                showQuoteButton={isLastCard(index)}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  const activeDot = Math.min(count - 1, Math.floor(displayProgress * (count - 1) + 0.001))

  return (
    <section
      ref={sectionRef}
      className="section luxury-carousel-section scroll-pinned-cards"
      aria-label="Luxury car service highlights"
      style={{ overflowAnchor: 'none' }}
    >
      <div ref={pinRef} className="scroll-pinned-cards__pin">
        <div className="container luxury-carousel__container">
          <div
            ref={measureRef}
            className="scroll-pinned-cards__measure"
            aria-hidden="true"
          >
            <LuxuryServiceCard
              key={`measure-${cards[count - 1].id}`}
              {...cards[count - 1]}
              phase="stack"
              showQuoteButton
            />
          </div>

          <div
            className="luxury-carousel__viewport scroll-pinned-cards__viewport"
            style={{ height: viewportHeight }}
          >
            {cards.map((card, index) => {
              const { translateY, opacity, scale, zIndex } = getCardStackStyle(
                index,
                displayProgress,
                count,
              )

              return (
                <LuxuryServiceCard
                  key={card.id}
                  {...card}
                  phase="stack"
                  showQuoteButton={isLastCard(index)}
                  style={{
                    zIndex,
                    opacity,
                    transform: `translate3d(0, ${translateY}%, 0) scale(${scale})`,
                    pointerEvents: translateY > -90 && opacity > 0.35 ? 'auto' : 'none',
                  }}
                />
              )
            })}
          </div>

          {count > 1 ? (
            <div className="luxury-carousel__dots scroll-pinned-cards__dots" aria-hidden="true">
              {cards.map((card, index) => (
                <span
                  key={card.id}
                  className={`luxury-carousel__dot${index === activeDot ? ' is-active' : ''}`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
