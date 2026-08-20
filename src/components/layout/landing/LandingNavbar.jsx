import { lazy, Suspense, useEffect, useState } from 'react'
import { COMPACT_NAV_MQ, PHONE_MQ } from '../../../config/breakpoints.js'

const NavMenuItems = lazy(() => import('../../nav/NavMenuItems.jsx'))

/**
 * @param {{ variant?: 'connecticut' | 'standard' }} props
 * - connecticut: hide desktop nav at ≤984px
 * - standard: always show desktop nav above hamburger breakpoint
 */
export default function LandingNavbar({ variant = 'standard' }) {
  const hideMq = variant === 'connecticut' ? COMPACT_NAV_MQ : PHONE_MQ
  const [hideDesktop, setHideDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(hideMq).matches : variant === 'connecticut',
  )

  useEffect(() => {
    const mq = window.matchMedia(hideMq)
    const onChange = () => setHideDesktop(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [hideMq])

  return (
    <nav className="menu" aria-label="Primary">
      {hideDesktop ? null : (
        <Suspense fallback={null}>
          <NavMenuItems variant="desktop" />
        </Suspense>
      )}
    </nav>
  )
}
