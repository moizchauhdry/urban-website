import { useEffect, useRef } from 'react'
import { COMPACT_NAV_MQ } from '../config/breakpoints.js'

const MOBILE_MQ = COMPACT_NAV_MQ

/**
 * Locks document scroll (including iOS overscroll) while `locked` is true.
 * Only runs when `window.matchMedia(MOBILE_MQ)` matches — desktop is untouched.
 */
export function useMobileScrollLock(locked) {
  const scrollYRef = useRef(0)

  useEffect(() => {
    if (!locked) return undefined

    const mq = window.matchMedia(MOBILE_MQ)
    if (!mq.matches) return undefined

    scrollYRef.current = window.scrollY
    const { body, documentElement: html } = document

    const prevBody = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
      touchAction: body.style.touchAction,
    }
    const prevHtml = {
      overflow: html.style.overflow,
      overscrollBehavior: html.style.overscrollBehavior,
      height: html.style.height,
    }

    body.style.position = 'fixed'
    body.style.top = `-${scrollYRef.current}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.style.overflow = 'hidden'
    body.style.touchAction = 'none'

    html.style.overflow = 'hidden'
    html.style.overscrollBehavior = 'none'
    html.style.height = '100%'

    return () => {
      Object.assign(body.style, prevBody)
      Object.assign(html.style, prevHtml)
      window.scrollTo(0, scrollYRef.current)
    }
  }, [locked])
}
