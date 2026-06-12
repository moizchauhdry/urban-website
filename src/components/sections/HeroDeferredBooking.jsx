import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import HeroBookingFormShell from './HeroBookingFormShell.jsx'

const HeroBookingForm = lazy(() => import('./HeroBookingForm.jsx'))

const MOBILE_MQ = '(max-width: 720px)'

function scheduleFormLoad(callback) {
  if (typeof window.requestIdleCallback === 'function') {
    return window.requestIdleCallback(callback, { timeout: 1200 })
  }
  return window.setTimeout(callback, 1)
}

function cancelFormLoad(id) {
  if (typeof window.cancelIdleCallback === 'function') {
    window.cancelIdleCallback(id)
    return
  }
  window.clearTimeout(id)
}

/** Defers phone-input + Google Places until the booking slot is near the viewport. */
export default function HeroDeferredBooking() {
  const slotRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = slotRef.current
    if (!el) return undefined

    let loaded = false
    let cancelId = 0

    const loadForm = () => {
      if (loaded) return
      loaded = true
      setReady(true)
    }

    const isMobile = window.matchMedia(MOBILE_MQ).matches

    if (isMobile) {
      cancelId = scheduleFormLoad(loadForm)
      return () => cancelFormLoad(cancelId)
    }

    if (typeof IntersectionObserver === 'undefined') {
      loadForm()
      return undefined
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
        <Suspense fallback={<HeroBookingFormShell />}>
          <HeroBookingForm />
        </Suspense>
      ) : (
        <HeroBookingFormShell />
      )}
    </div>
  )
}
