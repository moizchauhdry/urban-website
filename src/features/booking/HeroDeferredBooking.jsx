import { lazy, Suspense, useEffect } from 'react'
import { prefetchBookingStoreData } from './heroBooking.js'

const HeroBookingForm = lazy(() => import('./HeroBookingForm.jsx'))

const HERO_BOOKING_ID = 'hero-booking'

/** Hero booking slot — loads the real form (no placeholder shell). */
export default function HeroDeferredBooking() {
  useEffect(() => {
    const run = () => prefetchBookingStoreData()
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(run, { timeout: 4000 })
      return () => window.cancelIdleCallback?.(id)
    }
    const t = window.setTimeout(run, 2000)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div id={HERO_BOOKING_ID} className="booking-card-slot booking-card-slot--activated">
      <Suspense fallback={null}>
        <HeroBookingForm />
      </Suspense>
    </div>
  )
}
