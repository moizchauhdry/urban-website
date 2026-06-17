import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { HERO_BOOKING_HASH, scrollToHeroBooking } from '../config/bookingNav.js'

/** Smooth-scroll to the hero booking form when the URL contains `#hero-booking`. */
export function useScrollToBookingHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash !== HERO_BOOKING_HASH) return undefined
    const timer = window.setTimeout(() => scrollToHeroBooking(), 120)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])
}
