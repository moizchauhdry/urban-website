import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Header/footer logo: on primary click, go home (if needed) and scroll to top.
 * Modifier keys keep default Link behavior (new tab, etc.).
 */
export function useHomeLogoClick() {
  const location = useLocation()
  const navigate = useNavigate()

  return useCallback(
    (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
      ) {
        return
      }
      event.preventDefault()
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      navigate('/')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })
      })
    },
    [location.pathname, navigate]
  )
}
