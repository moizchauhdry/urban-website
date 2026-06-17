import { useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import NavMenuItems from '../../../components/nav/NavMenuItems.jsx'

const PANEL_ID = 'site-mobile-menu'

export { PANEL_ID }

/**
 * Full-width mobile drawer under the header row. Portaled to `document.body` so
 * `position: fixed` stays viewport-anchored; `--mobile-menu-top` follows the header.
 */
export default function MobileMenuPanel({ open, onClose, anchorRef }) {
  useLayoutEffect(() => {
    if (!open || !anchorRef?.current) {
      document.documentElement.style.removeProperty('--mobile-menu-top')
      return undefined
    }
    const updateTop = () => {
      const el = anchorRef.current
      if (!el) return
      document.documentElement.style.setProperty(
        '--mobile-menu-top',
        `${el.getBoundingClientRect().bottom}px`
      )
    }
    updateTop()
    window.addEventListener('scroll', updateTop, { passive: true })
    window.addEventListener('resize', updateTop)
    return () => {
      window.removeEventListener('scroll', updateTop)
      window.removeEventListener('resize', updateTop)
      document.documentElement.style.removeProperty('--mobile-menu-top')
    }
  }, [open, anchorRef])

  return createPortal(
    <>
      <button
        type="button"
        className={`mobile-menu-backdrop${open ? ' is-visible' : ''}`}
        aria-hidden={!open}
        tabIndex={-1}
        aria-label="Close menu"
        onClick={onClose}
      />

      <div
        id={PANEL_ID}
        className={`mobile-menu-panel${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-labelledby="mobile-menu-heading"
      >
        <div className="container mobile-menu-panel__inner">
          <h2 id="mobile-menu-heading" className="mobile-menu-panel__title">
            Menu
          </h2>
          <nav className="mobile-menu-panel__nav" aria-label="Primary">
            <NavMenuItems variant="mobile" onNavigate={onClose} />
          </nav>
        </div>
      </div>
    </>,
    document.body
  )
}
