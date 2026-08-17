import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../../utils/gsap.js'
import 'lenis/dist/lenis.css'

/** @type {Lenis | null} */
let lenisInstance = null

/** Active Lenis instance (null when reduced-motion or not mounted). */
export function getLenis() {
  return lenisInstance
}

/**
 * Smooth scroll helper — uses Lenis when available, otherwise native.
 * @param {number | HTMLElement | string} target
 * @param {object} [options]
 */
export function smoothScrollTo(target, options = {}) {
  const lenis = lenisInstance
  if (lenis) {
    lenis.scrollTo(target, {
      duration: 0.55,
      offset: 0,
      ...options,
    })
    return
  }

  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' })
    return
  }

  const el =
    typeof target === 'string' ? document.querySelector(target) : target
  el?.scrollIntoView({ behavior: 'smooth', block: options.block ?? 'start' })
}

/**
 * Site-wide inertia scrolling via Lenis, synced with GSAP ScrollTrigger.
 * Disabled when the user prefers reduced motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return undefined

    const lenis = new Lenis({
      duration: 0.55,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.25,
      touchMultiplier: 1.1,
      syncTouch: false,
      autoRaf: false,
    })

    lenisInstance = lenis
    document.documentElement.classList.add('lenis-smooth')

    lenis.on('scroll', ScrollTrigger.update)

    const ticker = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    const onReduceChange = (event) => {
      if (event.matches) lenis.stop()
      else lenis.start()
    }
    reduceMotion.addEventListener('change', onReduceChange)

    return () => {
      reduceMotion.removeEventListener('change', onReduceChange)
      gsap.ticker.remove(ticker)
      lenis.destroy()
      lenisInstance = null
      document.documentElement.classList.remove('lenis-smooth')
      ScrollTrigger.refresh()
    }
  }, [])

  return null
}
