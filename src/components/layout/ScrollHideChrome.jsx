import { useLocation } from 'react-router-dom'
import { useScrollHideChrome } from '../../hooks/useScrollHideChrome.js'

/** Auto-hides the site header on scroll-down for mobile/tablet viewports. */
export default function ScrollHideChrome() {
  const { pathname } = useLocation()
  useScrollHideChrome(pathname)
  return null
}
