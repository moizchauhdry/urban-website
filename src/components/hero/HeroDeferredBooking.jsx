import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import HeroBookingFormShell from './HeroBookingFormShell.jsx'

const HeroBookingForm = lazy(() => import('./HeroBookingForm.jsx'))

const HERO_BOOKING_ID = 'hero-booking'
const IDLE_TIMEOUT = 2800

/** Hero booking slot — shell paints instantly; full form loads after idle or user tap. */
export default function HeroDeferredBooking() {
  const [activated, setActivated] = useState(false)

  const activate = useCallback(() => {
    setActivated(true)
  }, [])

  useEffect(() => {
    if (activated) return undefined
    if (window.location.hash === '#hero-booking') {
      activate()
      return undefined
    }

    if (typeof requestIdleCallback !== 'undefined') {
      const id = requestIdleCallback(() => activate(), { timeout: IDLE_TIMEOUT })
      return () => cancelIdleCallback(id)
    }

    const timer = window.setTimeout(activate, 1200)
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
      className={`booking-card-slot${activated ? '' : ' booking-card-slot--interactive'}`}
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
