import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../../utils/gsap.js'
import { setLenisInstance } from '../../utils/smoothScroll.js'
import 'lenis/dist/lenis.css'

export { getLenis, smoothScrollTo } from '../../utils/smoothScroll.js'

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

    setLenisInstance(lenis)
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
      setLenisInstance(null)
      document.documentElement.classList.remove('lenis-smooth')
      ScrollTrigger.refresh()
    }
  }, [])

  return null
}
