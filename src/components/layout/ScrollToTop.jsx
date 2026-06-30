import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to the top of the page on every client-side route change. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    // Home LCP image is injected in index.html for `/` only — remove on all other routes.
    if (pathname !== '/') {
      document.getElementById('static-hero-lcp')?.remove()
    }
  }, [pathname])

  return null
}
