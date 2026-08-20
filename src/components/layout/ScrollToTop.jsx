import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { smoothScrollTo } from '../../utils/smoothScroll.js'

/** Scroll to the top of the page on every client-side route change. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const lenisReady = document.documentElement.classList.contains('lenis-smooth')
    if (lenisReady) {
      smoothScrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }

    const isHome = pathname === '/'
    document.documentElement.classList.toggle('route-not-home', !isHome)

    // Home LCP image is injected in index.html for `/` only — remove on all other routes.
    if (!isHome) {
      document.getElementById('static-hero-lcp')?.remove()
    }
  }, [pathname])

  return null
}
