import { useCallback, useEffect, useRef, useState } from 'react'
import LuxuryServiceCard from './LuxuryServiceCard.jsx'
import { PHONE_MAX_PX } from '../../config/breakpoints.js'

const PHONE_MQ = `(max-width: ${PHONE_MAX_PX}px)`
const WHEEL_SENSITIVITY = 0.00048
const TOUCH_SENSITIVITY = 0.0011
const VELOCITY_DAMPING = 0.9
const VELOCITY_MAX = 0.018
const SMOOTH_K = 9.5
const EXIT_DISTANCE = 112
const PIN_ZONE_BELOW = 32
const PIN_ZONE_ABOVE = 4
const PIN_RESET_ABOVE = 120
const PROGRESS_EPS = 0.002
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
    opacity: 1 - t * 0.32,
    scale: 1 - t * 0.035,
    zIndex,
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
  const targetProgressRef = useRef(0)
  const displayProgressRef = useRef(0)
  const velocityRef = useRef(0)
  const lastFrameRef = useRef(0)
  const isLockedRef = useRef(false)
  const lockYRef = useRef(0)
  const [displayProgress, setDisplayProgress] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(MIN_VIEWPORT_HEIGHT)
  const [isLocked, setIsLocked] = useState(false)
  const [spacerHeight, setSpacerHeight] = useState(0)
  const [useScrollPin, setUseScrollPin] = useState(() => {
    if (typeof window === 'undefined') return true
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  const count = cards?.length ?? 0

  const setTargetProgress = useCallback((value) => {
    targetProgressRef.current = Math.min(1, Math.max(0, value))
  }, [])

  const syncProgressImmediate = useCallback((value) => {
    const next = Math.min(1, Math.max(0, value))
    targetProgressRef.current = next
    displayProgressRef.current = next
    velocityRef.current = 0
    setDisplayProgress(next)
  }, [])

  useEffect(() => {
    isLockedRef.current = isLocked
  }, [isLocked])

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

      setViewportHeight(
        Math.max(getMinViewportHeight(), Math.ceil(maxHeight + getViewportHeightBuffer())),
      )
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

    let rafId = 0

    const refreshLockY = () => {
      if (isLockedRef.current) return lockYRef.current

      const section = sectionRef.current
      if (!section) return lockYRef.current

      const stickyTop = getStickyTop()
      const rect = section.getBoundingClientRect()
      lockYRef.current = window.scrollY + rect.top - stickyTop
      return lockYRef.current
    }

    const isInPinZone = (lockY) => {
      const y = window.scrollY
      return y >= lockY - PIN_ZONE_ABOVE && y <= lockY + PIN_ZONE_BELOW
    }

    const isProgressActive = () => {
      const p = targetProgressRef.current
      return p > PROGRESS_EPS && p < 1 - PROGRESS_EPS
    }

    const shouldHoldScroll = () => {
      if (!isLockedRef.current) return false
      const p = targetProgressRef.current
      if (Math.abs(velocityRef.current) > 0.00004) return true
      return p > PROGRESS_EPS && p < 1 - PROGRESS_EPS
    }

    const resetProgressIfFarAbove = (lockY) => {
      if (window.scrollY < lockY - PIN_RESET_ABOVE && targetProgressRef.current > PROGRESS_EPS) {
        syncProgressImmediate(0)
        setIsLocked(false)
      }
    }

    const maybeUnlockAtEnds = () => {
      const p = targetProgressRef.current
      const v = velocityRef.current
      if (!isLockedRef.current) return
      if (Math.abs(v) > 0.00004) return
      if (p <= PROGRESS_EPS || p >= 1 - PROGRESS_EPS) {
        setIsLocked(false)
      }
    }

    const lockSection = () => {
      if (isLockedRef.current) return
      const pin = pinRef.current
      const height = pin?.offsetHeight ?? 0
      if (height > 0) setSpacerHeight(height)
      setIsLocked(true)
    }

    const unlockSection = () => {
      setIsLocked(false)
    }

    const holdScroll = (lockY) => {
      if (Math.abs(window.scrollY - lockY) > 1) {
        window.scrollTo(0, lockY)
      }
    }

    const tickProgress = (now) => {
      if (!lastFrameRef.current) lastFrameRef.current = now
      const dt = Math.min((now - lastFrameRef.current) / 1000, 0.05)
      lastFrameRef.current = now

      if (Math.abs(velocityRef.current) > 0.00001) {
        setTargetProgress(targetProgressRef.current + velocityRef.current)
        velocityRef.current *= VELOCITY_DAMPING
        if (Math.abs(velocityRef.current) < 0.00004) velocityRef.current = 0
      }

      const target = targetProgressRef.current
      const current = displayProgressRef.current
      const alpha = 1 - Math.exp(-SMOOTH_K * dt)
      const next = current + (target - current) * alpha

      displayProgressRef.current = next

      if (Math.abs(next - current) > 0.00015) {
        setDisplayProgress(next)
      }

      maybeUnlockAtEnds()

      if (shouldHoldScroll()) {
        holdScroll(refreshLockY())
      }

      rafId = window.requestAnimationFrame(tickProgress)
    }

    const applyWheelDelta = (deltaY, sensitivity = WHEEL_SENSITIVITY) => {
      const section = sectionRef.current
      if (!section) return false

      const lockY = refreshLockY()
      resetProgressIfFarAbove(lockY)

      const p = targetProgressRef.current

      // Scrolling up past the section when cards are at the start — allow normal scroll
      if (deltaY < 0 && p <= PROGRESS_EPS) {
        unlockSection()
        velocityRef.current = 0
        return false
      }

      // Scrolling down past the section when cards are complete — allow normal scroll
      if (deltaY > 0 && p >= 1 - PROGRESS_EPS) {
        unlockSection()
        velocityRef.current = 0
        return false
      }

      if (!isInPinZone(lockY)) return false

      if (deltaY > 0 && p < 1 - PROGRESS_EPS) {
        if (window.scrollY < lockY - 2) return false
        lockSection()
        velocityRef.current = Math.min(
          VELOCITY_MAX,
          velocityRef.current + deltaY * sensitivity,
        )
        holdScroll(lockY)
        return true
      }

      if (deltaY < 0 && p > PROGRESS_EPS) {
        lockSection()
        velocityRef.current = Math.max(
          -VELOCITY_MAX,
          velocityRef.current + deltaY * sensitivity,
        )
        holdScroll(lockY)
        return true
      }

      return false
    }

    const clampScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const lockY = refreshLockY()
      resetProgressIfFarAbove(lockY)

      if (window.scrollY < lockY - 2) {
        unlockSection()
        return
      }

      if (!isInPinZone(lockY)) return

      if (isProgressActive()) {
        lockSection()
        holdScroll(lockY)
      } else {
        maybeUnlockAtEnds()
      }
    }

    const onWheel = (e) => {
      if (applyWheelDelta(e.deltaY)) e.preventDefault()
    }

    let touchY = 0
    const onTouchStart = (e) => {
      touchY = e.touches[0]?.clientY ?? 0
    }
    const onTouchMove = (e) => {
      const y = e.touches[0]?.clientY ?? touchY
      const deltaY = touchY - y
      touchY = y
      if (Math.abs(deltaY) < 0.5) return
      if (applyWheelDelta(deltaY, TOUCH_SENSITIVITY)) e.preventDefault()
    }

    rafId = window.requestAnimationFrame(tickProgress)
    window.addEventListener('scroll', clampScroll, { passive: true })
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('resize', refreshLockY, { passive: true })

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', clampScroll)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('resize', refreshLockY)
    }
  }, [useScrollPin, count, setTargetProgress, syncProgressImmediate])

  if (!cards?.length) return null

  const isLastCard = (index) => index === count - 1

  if (!useScrollPin) {
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
      className={`section luxury-carousel-section scroll-pinned-cards${isLocked ? ' scroll-pinned-cards--locked' : ''}`}
      aria-label="Luxury car service highlights"
      style={{ overflowAnchor: 'none' }}
    >
      {isLocked ? (
        <div
          className="scroll-pinned-cards__spacer"
          style={{ height: spacerHeight }}
          aria-hidden="true"
        />
      ) : null}

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
              const { translateY, opacity, scale, zIndex } = getCardStackStyle(index, displayProgress, count)

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
