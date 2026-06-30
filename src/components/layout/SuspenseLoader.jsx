import { useEffect } from 'react'
import { useLoading } from '../../context/LoadingContext.jsx'

/** Suspense fallback — keeps the global loader visible while lazy chunks load. */
export default function SuspenseLoader() {
  const { show, hide } = useLoading()

  useEffect(() => {
    show()
    return () => hide()
  }, [show, hide])

  return null
}
