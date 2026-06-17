import { useEffect, useRef, useState } from 'react'
import HeroBookingFormShell from './HeroBookingFormShell.jsx'

function loadHeroBookingFormModule() {
  return import('./HeroBookingForm.jsx')
}

/** Defers phone-input + Google Places until the user taps the booking area. */
export default function HeroDeferredBooking() {
  const slotRef = useRef(null)
  const [FormComponent, setFormComponent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const el = slotRef.current
    if (!el) return undefined

    let cancelled = false
    let activated = false

    const revealForm = () => {
      if (activated || cancelled) return
      activated = true
      setIsLoading(true)

      loadHeroBookingFormModule().then((mod) => {
        if (!cancelled) {
          setFormComponent(() => mod.default)
          setIsLoading(false)
        }
      })
    }

    const onActivate = () => revealForm()

    el.addEventListener('pointerdown', onActivate, { passive: true })
    el.addEventListener('focusin', onActivate)

    return () => {
      cancelled = true
      el.removeEventListener('pointerdown', onActivate)
      el.removeEventListener('focusin', onActivate)
    }
  }, [])

  return (
    <div
      className={`booking-card-slot${FormComponent ? '' : ' booking-card-slot--interactive'}${isLoading ? ' booking-card-slot--loading' : ''}`}
      ref={slotRef}
      tabIndex={0}
      role="group"
      aria-label="Booking form — tap to begin"
      aria-busy={isLoading || undefined}
    >
      {FormComponent ? <FormComponent /> : <HeroBookingFormShell />}
    </div>
  )
}
