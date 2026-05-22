import { useCallback, useRef } from 'react'

const DEFAULT_THRESHOLD = 50

/**
 * Horizontal pointer swipe on a viewport (mouse drag or touch via pointer events).
 */
export function usePointerSwipe(onSwipeLeft, onSwipeRight, enabled = true, threshold = DEFAULT_THRESHOLD) {
  const startX = useRef(null)
  const dragging = useRef(false)

  const onPointerDown = useCallback(
    (e) => {
      if (!enabled || e.button !== 0) return
      startX.current = e.clientX
      dragging.current = true
      e.currentTarget.setPointerCapture?.(e.pointerId)
    },
    [enabled],
  )

  const endDrag = useCallback(
    (clientX) => {
      if (!dragging.current || startX.current == null) return
      const dx = clientX - startX.current
      startX.current = null
      dragging.current = false
      if (Math.abs(dx) < threshold) return
      if (dx < 0) onSwipeLeft()
      else onSwipeRight()
    },
    [onSwipeLeft, onSwipeRight, threshold],
  )

  const onPointerUp = useCallback(
    (e) => {
      endDrag(e.clientX)
      try {
        e.currentTarget.releasePointerCapture?.(e.pointerId)
      } catch {
        /* already released */
      }
    },
    [endDrag],
  )

  const onPointerCancel = useCallback(() => {
    startX.current = null
    dragging.current = false
  }, [])

  return { onPointerDown, onPointerUp, onPointerCancel }
}
