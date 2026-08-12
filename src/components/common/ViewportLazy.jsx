import { useEffect, useRef, useState } from 'react'

/**
 * Mount children only after the placeholder enters (or nears) the viewport.
 * Optional deferMs waits after mount before observing — keeps below-fold JS
 * off the first Lighthouse window on short mobile heroes.
 */
export default function ViewportLazy({
  children,
  rootMargin = '240px 0px',
  minHeight = 0,
  deferMs = 0,
  onVisible,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const onVisibleRef = useRef(onVisible)
  onVisibleRef.current = onVisible

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      const fallback = window.setTimeout(() => setVisible(true), deferMs)
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
        { rootMargin, threshold: 0.01 },
      )
      io.observe(node)
    }

    if (deferMs > 0) {
      delayTimer = window.setTimeout(observe, deferMs)
    } else {
      observe()
    }

    return () => {
      if (delayTimer != null) window.clearTimeout(delayTimer)
      io?.disconnect()
    }
  }, [rootMargin, visible, deferMs])

  useEffect(() => {
    if (visible) onVisibleRef.current?.()
  }, [visible])

  return (
    <div ref={ref} style={minHeight ? { minHeight } : undefined}>
      {visible ? children : null}
    </div>
  )
}
