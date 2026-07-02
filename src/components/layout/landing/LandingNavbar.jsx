import { lazy, Suspense, useEffect, useState } from 'react'
import NavMenuItems from '../../nav/NavMenuItems.jsx'
import SuspenseLoader from '../SuspenseLoader.jsx'
import { COMPACT_NAV_MQ } from '../../../config/breakpoints.js'

const DesktopNavMenuItems = lazy(() =>
  import('../../nav/NavMenuItems.jsx').then((mod) => ({ default: mod.default })),
)

/**
 * @param {{ variant?: 'connecticut' | 'standard' }} props
 * - connecticut: hide desktop nav at ≤984px (lazy-loaded menu items)
 * - standard: always show desktop nav above hamburger breakpoint
 */
export default function LandingNavbar({ variant = 'standard' }) {
  if (variant === 'standard') {
    return (
      <nav className="menu" aria-label="Primary">
        <NavMenuItems variant="desktop" />
      </nav>
    )
  }

  const [isCompact, setIsCompact] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(COMPACT_NAV_MQ).matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(COMPACT_NAV_MQ)
    const onChange = () => setIsCompact(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <nav className="menu" aria-label="Primary">
      {isCompact ? null : (
        <Suspense fallback={<SuspenseLoader />}>
          <DesktopNavMenuItems variant="desktop" />
        </Suspense>
      )}
    </nav>
  )
}
