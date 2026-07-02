import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useLoading } from '../context/LoadingContext.jsx'

const NON_NAV_HIDE_MS = 700

function shouldSkipLoader(target) {
  if (!target) return true
  if (target.closest('[data-no-loader]')) return true
  if (target.closest('.menu-toggle')) return true
  if (target.disabled || target.getAttribute('aria-disabled') === 'true') return true

  if (target.tagName === 'INPUT') {
    const type = target.getAttribute('type') || 'text'
    if (!['submit', 'button'].includes(type)) return true
  }

  return false
}

function isInternalNavLink(el) {
  if (el.tagName !== 'A') return false
  const href = el.getAttribute('href')
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false
  if (el.target === '_blank' || el.hasAttribute('download')) return false

  try {
    const url = new URL(href, window.location.origin)
    return url.origin === window.location.origin
  } catch {
    return false
  }
}

function isSamePageInternalNavLink(el) {
  if (!isInternalNavLink(el)) return false

  try {
    const url = new URL(el.getAttribute('href'), window.location.origin)
    return url.pathname === window.location.pathname
  } catch {
    return false
  }
}

function isFormSubmitControl(el) {
  return (
    (el.tagName === 'BUTTON' && el.type === 'submit') ||
    (el.tagName === 'INPUT' && el.type === 'submit')
  )
}

/**
 * Shows the site loader on interactive clicks and hides it when navigation settles.
 */
export function useGlobalLoading() {
  const { show, hide } = useLoading()
  const location = useLocation()
  const hideTimerRef = useRef(null)

  useEffect(() => {
    hide()
  }, [location.key, hide])

  useEffect(() => {
    const scheduleHide = () => {
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current)
      hideTimerRef.current = window.setTimeout(() => hide(), NON_NAV_HIDE_MS)
    }

    const onClick = (e) => {
      const target = e.target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"]',
      )
      if (shouldSkipLoader(target)) return

      if (isFormSubmitControl(target)) {
        const form = target.closest('form')
        if (form && !form.checkValidity()) return
      }

      show()

      if (
        isSamePageInternalNavLink(target) ||
        isFormSubmitControl(target) ||
        (!isInternalNavLink(target) && !isFormSubmitControl(target))
      ) {
        scheduleHide()
      }
    }

    document.addEventListener('click', onClick, true)
    return () => {
      document.removeEventListener('click', onClick, true)
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current)
    }
  }, [show, hide])
}
