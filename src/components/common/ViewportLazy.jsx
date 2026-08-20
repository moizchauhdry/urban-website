import { useEffect, useRef, useState } from 'react'
import { isPhoneViewport } from '../../config/breakpoints.js'

/**
 * Mount children only after the placeholder enters (or nears) the viewport.
 * Optional mobileDeferMs / mobileRootMargin apply only on phone viewports so
 * desktop keeps snappy below-fold loading while mobile protects LCP.
 */
export default function ViewportLazy({
  children,
  rootMargin = '480px 0px',
  minHeight = 0,
  deferMs = 0,
  mobileRootMargin,
  mobileDeferMs,
  onVisible,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const onVisibleRef = useRef(onVisible)
  onVisibleRef.current = onVisible

  const phone = isPhoneViewport()
  const effectiveRootMargin =
    phone && mobileRootMargin != null ? mobileRootMargin : rootMargin
  const effectiveDeferMs = phone && mobileDeferMs != null ? mobileDeferMs : deferMs

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      const fallback = window.setTimeout(() => setVisible(true), effectiveDeferMs)
      return () => window.clearTimeout(fallback)
    }

    let io
    let delayTimer
    const observe = () => {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        },
        { rootMargin: effectiveRootMargin, threshold: 0.01 },
      )
      io.observe(node)
    }

    if (effectiveDeferMs > 0) {
      delayTimer = window.setTimeout(observe, effectiveDeferMs)
    } else {
      observe()
    }

    return () => {
      if (delayTimer != null) window.clearTimeout(delayTimer)
      io?.disconnect()
    }
  }, [effectiveRootMargin, visible, effectiveDeferMs])

  useEffect(() => {
    if (visible) onVisibleRef.current?.()
  }, [visible])

  return (
    <div ref={ref} style={minHeight ? { minHeight } : undefined}>
      {visible ? children : null}
    </div>
  )
}
