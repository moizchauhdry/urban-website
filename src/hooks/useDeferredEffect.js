import { useEffect } from 'react'

/** Run an effect after the browser is idle — keeps first paint / LCP off the critical path. */
export function useDeferredEffect(effect, deps, timeout = 2000) {
  useEffect(() => {
    let active = true
    let dispose

    const run = () => {
      if (!active) return
      dispose = effect()
    }

    if (typeof requestIdleCallback !== 'undefined') {
      const id = requestIdleCallback(run, { timeout })
      return () => {
        active = false
        cancelIdleCallback(id)
        dispose?.()
      }
    }

    const timer = window.setTimeout(run, 300)
    return () => {
      active = false
      window.clearTimeout(timer)
      dispose?.()
    }
  }, deps)
}
