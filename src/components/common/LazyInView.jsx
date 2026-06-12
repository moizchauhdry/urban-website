import { useEffect, useRef, useState } from 'react'
import { triggerScrollRevealScan } from '../../hooks/scrollReveal.js'

/**
 * Loads a section chunk only when it enters (or nears) the viewport.
 * Keeps layout stable with an optional placeholder until the module loads.
 */
export default function LazyInView({ load, fallback = null, rootMargin = '250px 0px', minHeight }) {
  const ref = useRef(null)
  const [Component, setComponent] = useState(null)

  useEffect(() => {
    if (Component) return

    const el = ref.current
    if (!el) return

    let cancelled = false

    const loadModule = () => {
      load().then((mod) => {
        if (cancelled) return
        setComponent(() => mod.default)
        requestAnimationFrame(() => triggerScrollRevealScan())
      })
    }

    if (typeof IntersectionObserver === 'undefined') {
      loadModule()
      return () => {
        cancelled = true
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect()
          loadModule()
        }
      },
      { rootMargin, threshold: 0 },
    )

    io.observe(el)

    return () => {
      cancelled = true
      io.disconnect()
    }
  }, [Component, load, rootMargin])

  const wrapperStyle = minHeight != null ? { minHeight } : undefined

  if (!Component) {
    return (
      <div ref={ref} style={wrapperStyle}>
        {fallback}
      </div>
    )
  }

  return (
    <div ref={ref} style={wrapperStyle}>
      <Component />
    </div>
  )
}
