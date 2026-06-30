import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

const LoadingContext = createContext(null)

const MIN_VISIBLE_MS = 280

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const countRef = useRef(0)
  const shownAtRef = useRef(0)
  const hideTimerRef = useRef(null)

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current)
      hideTimerRef.current = null
    }
  }, [])

  const show = useCallback(() => {
    clearHideTimer()
    countRef.current += 1
    if (countRef.current === 1) {
      shownAtRef.current = Date.now()
      setIsLoading(true)
    }
  }, [clearHideTimer])

  const hide = useCallback(() => {
    countRef.current = Math.max(0, countRef.current - 1)
    if (countRef.current > 0) return

    const elapsed = Date.now() - shownAtRef.current
    const delay = Math.max(0, MIN_VISIBLE_MS - elapsed)

    clearHideTimer()
    hideTimerRef.current = window.setTimeout(() => {
      hideTimerRef.current = null
      if (countRef.current === 0) setIsLoading(false)
    }, delay)
  }, [clearHideTimer])

  const withLoader = useCallback(
    async (promiseOrFn) => {
      show()
      try {
        return typeof promiseOrFn === 'function' ? await promiseOrFn() : await promiseOrFn
      } finally {
        hide()
      }
    },
    [show, hide],
  )

  useEffect(() => () => clearHideTimer(), [clearHideTimer])

  return (
    <LoadingContext.Provider value={{ isLoading, show, hide, withLoader }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const ctx = useContext(LoadingContext)
  if (!ctx) {
    throw new Error('useLoading must be used within LoadingProvider')
  }
  return ctx
}
