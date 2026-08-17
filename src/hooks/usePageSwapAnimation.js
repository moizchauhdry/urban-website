import { useRef } from 'react'

/**
 * True after `swapKey` has changed at least once while this component stayed mounted.
 * First paint stays still (LCP); later service-area / airport navigations can animate.
 *
 * @param {string | null | undefined} swapKey
 */
export function usePageSwapAnimation(swapKey) {
  const prevKeyRef = useRef(swapKey)
  const swappedRef = useRef(false)

  if (swapKey && prevKeyRef.current !== swapKey) {
    if (prevKeyRef.current) swappedRef.current = true
    prevKeyRef.current = swapKey
  }

  return swappedRef.current
}
