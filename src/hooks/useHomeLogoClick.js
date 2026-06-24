import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const SITE_HOME_PATH = '/'

/**
 * Header/footer logo: go to the main site home (`/`) and scroll to top.
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
      if (location.pathname === SITE_HOME_PATH) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      navigate(SITE_HOME_PATH)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })
      })
    },
    [location.pathname, navigate],
  )
}
