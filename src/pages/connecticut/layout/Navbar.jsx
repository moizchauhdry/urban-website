import SuspenseLoader from '../../../components/layout/SuspenseLoader.jsx'
import { lazy, Suspense, useEffect, useState } from 'react'
import { COMPACT_NAV_MQ } from '../../../config/breakpoints.js'

const MOBILE_MQ = COMPACT_NAV_MQ

const DesktopNavMenuItems = lazy(() =>
  import('../../../components/nav/NavMenuItems.jsx').then((mod) => ({ default: mod.default })),
)

/**
 * Compact nav through tablet (≤984px). Full desktop menu above that.
 */
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_MQ).matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ)
    const onChange = () => setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <nav className="menu" aria-label="Primary">
      {isMobile ? null : (
        <Suspense fallback={<SuspenseLoader />}>
          <DesktopNavMenuItems variant="desktop" />
        </Suspense>
      )}
    </nav>
  )
}
