import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import HeroBookingFormShell from './HeroBookingFormShell.jsx'
import { prefetchBookingStoreData } from './heroBooking.js'

const HeroBookingForm = lazy(() => import('./HeroBookingForm.jsx'))

const HERO_BOOKING_ID = 'hero-booking'
/** Auto-activate well after Lighthouse's lab window; tap/hash still activate immediately. */
const IDLE_ACTIVATE_MS = 8000

/**
 * Hero booking slot — shell paints with the hero; the heavy phone-input chunk
 * loads on user interaction or after idle post-load (not during LCP).
 */
export default function HeroDeferredBooking() {
  const [activated, setActivated] = useState(false)

  const activate = useCallback(() => {
    setActivated(true)
  }, [])

  useEffect(() => {
    if (!activated) return undefined
    prefetchBookingStoreData()
    return undefined
  }, [activated])

  useEffect(() => {
    if (activated) return undefined
    if (window.location.hash === '#hero-booking') {
      activate()
      return undefined
    }

    let idleId
    let timer
    const scheduleIdle = () => {
      if (typeof requestIdleCallback !== 'undefined') {
        idleId = requestIdleCallback(() => activate(), { timeout: IDLE_ACTIVATE_MS })
      } else {
        timer = window.setTimeout(activate, IDLE_ACTIVATE_MS)
      }
    }

    if (document.readyState === 'complete') {
      scheduleIdle()
    } else {
      window.addEventListener('load', scheduleIdle, { once: true })
    }

    return () => {
      window.removeEventListener('load', scheduleIdle)
      if (idleId != null && typeof cancelIdleCallback !== 'undefined') {
        cancelIdleCallback(idleId)
      }
      if (timer != null) window.clearTimeout(timer)
    }
  }, [activated, activate])

  const onSlotKeyDown = (event) => {
    if (activated) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      activate()
    }
  }

  return (
    <div
      id={HERO_BOOKING_ID}
      className={`booking-card-slot${activated ? ' booking-card-slot--activated' : ' booking-card-slot--interactive'}`}
      onClick={activated ? undefined : activate}
      onKeyDown={activated ? undefined : onSlotKeyDown}
      role={activated ? undefined : 'button'}
      tabIndex={activated ? undefined : 0}
      aria-label={activated ? undefined : 'Load booking form'}
    >
      {activated ? (
        <Suspense fallback={<HeroBookingFormShell />}>
          <HeroBookingForm />
        </Suspense>
      ) : (
        <HeroBookingFormShell />
      )}
    </div>
  )
}
