import { useEffect, useRef, useState } from 'react'

/** Mount children only after the placeholder enters (or nears) the viewport. */
export default function ViewportLazy({ children, rootMargin = '240px 0px', minHeight = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return undefined
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin, threshold: 0.01 },
    )

    io.observe(node)
    return () => io.disconnect()
  }, [rootMargin, visible])

  return (
    <div ref={ref} style={minHeight ? { minHeight } : undefined}>
      {visible ? children : null}
    </div>
  )
}
