import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import HeroBookingFormShell from './HeroBookingFormShell.jsx'
import { prefetchBookingStoreData } from './heroBooking.js'

const HeroBookingForm = lazy(() => import('./HeroBookingForm.jsx'))

const HERO_BOOKING_ID = 'hero-booking'
/** Swap after the card's tiltIn entrance (0.5s delay + 1.1s) so the animation never replays. */
const ACTIVATE_DELAY = 1700

/**
 * Hero booking slot — the site paints first with a loading shell, then the full
 * form activates after ~1s (or immediately on user tap / #hero-booking hash).
 */
export default function HeroDeferredBooking() {
  const [activated, setActivated] = useState(false)

  const activate = useCallback(() => {
    setActivated(true)
  }, [])

  useEffect(() => {
    // Fetch booking options while the shell is showing so the form mounts with data ready.
    prefetchBookingStoreData()
  }, [])

  useEffect(() => {
    if (activated) return undefined
    if (window.location.hash === '#hero-booking') {
      activate()
      return undefined
    }

    const timer = window.setTimeout(activate, ACTIVATE_DELAY)
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
