import { useEffect } from 'react'
import {
  bindScrollRevealScanner,
  createScrollRevealScanner,
  unbindScrollRevealScanner,
} from './scrollReveal.js'

/** Wires IntersectionObserver + DOM scan for scroll reveal animations. */
export function useScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observed = new WeakSet()

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
    )

    const scan = createScrollRevealScanner(io, observed, reducedMotion)
    bindScrollRevealScanner(scan)
    scan()

    let debounceId = 0
    const scheduleScan = () => {
      window.clearTimeout(debounceId)
      debounceId = window.setTimeout(scan, 50)
    }

    const rootEl = document.getElementById('root')
    const mo =
      rootEl &&
      new MutationObserver(() => {
        scheduleScan()
      })
    mo?.observe(rootEl, { childList: true, subtree: true })

    const rescanTimers = [150, 500, 1200, 2500].map((ms) => window.setTimeout(scan, ms))

    return () => {
      window.clearTimeout(debounceId)
      rescanTimers.forEach((id) => window.clearTimeout(id))
      mo?.disconnect()
      io.disconnect()
      unbindScrollRevealScanner(scan)
    }
  }, [])
}
