import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import HeroBookingFormShell from './HeroBookingFormShell.jsx'
import { prefetchBookingStoreData } from './heroBooking.js'

const HeroBookingForm = lazy(() => import('./HeroBookingForm.jsx'))

const HERO_BOOKING_ID = 'hero-booking'
/** Short delay so the site paints first; tap/hash still activate immediately. */
const ACTIVATE_DELAY_MS = 1000

/**
 * Hero booking slot — shell paints with the hero; the full form loads after ~1s
 * (or immediately on user tap / #hero-booking hash).
 */
export default function HeroDeferredBooking() {
  const [activated, setActivated] = useState(false)

  const activate = useCallback(() => {
    setActivated(true)
  }, [])

  useEffect(() => {
    // Warm options while the shell is visible so dropdowns are ready on mount.
    prefetchBookingStoreData()
  }, [])

  useEffect(() => {
    if (activated) return undefined
    if (window.location.hash === '#hero-booking') {
      activate()
      return undefined
    }

    const timer = window.setTimeout(activate, ACTIVATE_DELAY_MS)
    return () => window.clearTimeout(timer)
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
