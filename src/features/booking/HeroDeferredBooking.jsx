import { lazy, Suspense, useEffect } from 'react'
import { prefetchBookingStoreData } from './heroBooking.js'

const HeroBookingForm = lazy(() => import('./HeroBookingForm.jsx'))

const HERO_BOOKING_ID = 'hero-booking'

/** Hero booking slot — loads the real form (no placeholder shell). */
export default function HeroDeferredBooking() {
  useEffect(() => {
    prefetchBookingStoreData()
  }, [])

  return (
    <div id={HERO_BOOKING_ID} className="booking-card-slot booking-card-slot--activated">
      <Suspense fallback={null}>
        <HeroBookingForm />
      </Suspense>
    </div>
  )
}
