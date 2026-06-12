import { useEffect, useRef, useState } from 'react'
import HeroBookingFormShell from './HeroBookingFormShell.jsx'

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

function loadHeroBookingFormModule() {
  return import('./HeroBookingForm.jsx')
}

/** Defers phone-input + Google Places until the booking slot is near the viewport. */
export default function HeroDeferredBooking() {
  const slotRef = useRef(null)
  const [FormComponent, setFormComponent] = useState(null)
  const modulePromiseRef = useRef(null)

  useEffect(() => {
    modulePromiseRef.current = loadHeroBookingFormModule()
  }, [])

  useEffect(() => {
    const el = slotRef.current
    if (!el) return undefined

    let cancelled = false
    let cancelId = 0

    const revealForm = () => {
      const pending = modulePromiseRef.current ?? loadHeroBookingFormModule()
      pending.then((mod) => {
        if (!cancelled) setFormComponent(() => mod.default)
      })
    }

    const isMobile = window.matchMedia(MOBILE_MQ).matches

    if (isMobile) {
      cancelId = scheduleFormLoad(revealForm)
      return () => {
        cancelled = true
        cancelFormLoad(cancelId)
      }
    }

    if (typeof IntersectionObserver === 'undefined') {
      revealForm()
      return () => {
        cancelled = true
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect()
          revealForm()
        }
      },
      { rootMargin: '80px 0px', threshold: 0 },
    )

    io.observe(el)

    return () => {
      cancelled = true
      io.disconnect()
    }
  }, [])

  return (
    <div className="booking-card-slot" ref={slotRef}>
      {FormComponent ? <FormComponent /> : <HeroBookingFormShell />}
    </div>
  )
}
