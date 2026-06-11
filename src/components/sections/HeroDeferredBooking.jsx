import { lazy, Suspense, useEffect, useRef, useState } from 'react'

const HeroBookingForm = lazy(() => import('./HeroBookingForm.jsx'))

const bookingPlaceholder = (
  <div className="booking-card booking-card--loading" aria-hidden="true" />
)

/** Defers phone-input + Google Places until the booking slot is near the viewport. */
export default function HeroDeferredBooking() {
  const slotRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = slotRef.current
    if (!el) return

    let loaded = false
    const loadForm = () => {
      if (loaded) return
      loaded = true
      setReady(true)
    }

    if (typeof IntersectionObserver === 'undefined') {
      loadForm()
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect()
          loadForm()
        }
      },
      { rootMargin: '80px 0px', threshold: 0 },
    )

    io.observe(el)

    return () => io.disconnect()
  }, [])

  return (
    <div className="booking-card-slot" ref={slotRef}>
      {ready ? (
        <Suspense fallback={bookingPlaceholder}>
          <HeroBookingForm />
        </Suspense>
      ) : (
        bookingPlaceholder
      )}
    </div>
  )
}
