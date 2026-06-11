import { useEffect } from 'react'
import { triggerScrollRevealScan } from '../../hooks/scrollReveal.js'

/** Runs after lazy home sections mount so they receive scroll-reveal classes. */
export default function ScrollRevealInit() {
  useEffect(() => {
    triggerScrollRevealScan()
    const t = window.setTimeout(triggerScrollRevealScan, 100)
    return () => window.clearTimeout(t)
  }, [])

  return null
}
