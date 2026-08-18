import { lazy, Suspense, useEffect, useState } from 'react'
import { HERO_BOOKING_HASH, HERO_BOOKING_ID } from '../../config/bookingNav.js'
import { isPhoneViewport } from '../../config/breakpoints.js'
import { prefetchBookingStoreData } from './heroBooking.js'

const HeroBookingForm = lazy(() => import('./HeroBookingForm.jsx'))

function shouldLoadFormImmediately() {
  return window.location.hash === HERO_BOOKING_HASH || !isPhoneViewport()
}

/** Hero booking slot — on phones, waits for the LCP image before pulling phone-input JS. */
export default function HeroDeferredBooking() {
  const [showForm, setShowForm] = useState(
    () => typeof window !== 'undefined' && shouldLoadFormImmediately(),
  )

  useEffect(() => {
    if (!showForm) return undefined
    const run = () => prefetchBookingStoreData()
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(run, { timeout: 1800 })
      return () => window.cancelIdleCallback?.(id)
    }
    const t = window.setTimeout(run, 700)
    return () => window.clearTimeout(t)
  }, [showForm])

  useEffect(() => {
    if (showForm) return undefined

    const activate = () => setShowForm(true)
    const slot = document.getElementById(HERO_BOOKING_ID)
    slot?.addEventListener('pointerdown', activate, { once: true, passive: true })
    slot?.addEventListener('focusin', activate, { once: true })

    const img =
      document.querySelector('.hero-bg-img') || document.getElementById('static-hero-lcp')

    let timeoutId
    if (img instanceof HTMLImageElement && !(img.complete && img.naturalWidth > 0)) {
      img.addEventListener('load', activate, { once: true })
      img.addEventListener('error', activate, { once: true })
      timeoutId = window.setTimeout(activate, 4000)
      return () => {
        img.removeEventListener('load', activate)
        img.removeEventListener('error', activate)
        slot?.removeEventListener('pointerdown', activate)
        slot?.removeEventListener('focusin', activate)
        window.clearTimeout(timeoutId)
      }
    }

    let idleId
    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(activate, { timeout: 1200 })
    } else {
      timeoutId = window.setTimeout(activate, 400)
    }

    return () => {
      slot?.removeEventListener('pointerdown', activate)
      slot?.removeEventListener('focusin', activate)
      if (idleId != null) window.cancelIdleCallback?.(idleId)
      if (timeoutId != null) window.clearTimeout(timeoutId)
    }
  }, [showForm])

  return (
    <div id={HERO_BOOKING_ID} className="booking-card-slot booking-card-slot--activated">
      {showForm ? (
        <Suspense fallback={null}>
          <HeroBookingForm />
        </Suspense>
      ) : null}
    </div>
  )
}
