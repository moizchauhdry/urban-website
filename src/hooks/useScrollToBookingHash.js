import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const HERO_BOOKING_HASH = '#hero-booking'

/** Smooth-scroll to the hero booking form when the URL contains `#hero-booking`. */
export function useScrollToBookingHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash !== HERO_BOOKING_HASH) return undefined

    let cancelled = false
    const timer = window.setTimeout(() => {
      import('../config/bookingNav.js').then(({ scrollToHeroBooking }) => {
        if (!cancelled) scrollToHeroBooking()
      })
    }, 80)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [pathname, hash])
}
