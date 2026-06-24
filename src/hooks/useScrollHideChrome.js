import { useEffect } from 'react'

const COMPACT_MQ = '(max-width: 1024px)'
const SCROLL_DELTA = 2

/**
 * On mobile/tablet (≤1024px), hides `.site-top-chrome` while scrolling down and
 * reveals it on any upward scroll. Skips when the mobile menu is open.
 */
export function useScrollHideChrome(pathname) {
  useEffect(() => {
    const mq = window.matchMedia(COMPACT_MQ)
    let lastY = window.scrollY
    let ticking = false
    let resizeObserver = null
    let observedChrome = null

    const getChrome = () => document.querySelector('.site-top-chrome')

    const syncChromeHeight = (chrome) => {
      if (!chrome || !mq.matches) {
        document.documentElement.style.removeProperty('--site-chrome-height')
        return
      }
      document.documentElement.style.setProperty('--site-chrome-height', `${chrome.offsetHeight}px`)
    }

    const observeChrome = () => {
      const chrome = getChrome()
      if (chrome === observedChrome) return

      resizeObserver?.disconnect()
      observedChrome = chrome

      if (!chrome) {
        document.documentElement.style.removeProperty('--site-chrome-height')
        return
      }

      resizeObserver = new ResizeObserver(() => syncChromeHeight(chrome))
      resizeObserver.observe(chrome)
      syncChromeHeight(chrome)
    }

    const setHidden = (hidden) => {
      const chrome = getChrome()
      if (!chrome) return

      if (chrome.classList.contains('site-top-chrome--menu-open')) {
        chrome.classList.remove('site-top-chrome--scroll-hidden')
        return
      }

      chrome.classList.toggle('site-top-chrome--scroll-hidden', hidden && mq.matches)
    }

    const onScroll = () => {
      observeChrome()
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        ticking = false

        if (!mq.matches) {
          setHidden(false)
          lastY = window.scrollY
          return
        }

        const chrome = getChrome()
        if (chrome?.classList.contains('site-top-chrome--menu-open')) {
          setHidden(false)
          lastY = window.scrollY
          return
        }

        const y = window.scrollY
        const delta = y - lastY

        if (y <= SCROLL_DELTA) {
          setHidden(false)
        } else if (delta > SCROLL_DELTA) {
          setHidden(true)
        } else if (delta < -SCROLL_DELTA) {
          setHidden(false)
        }

        lastY = y
      })
    }

    const onMqChange = () => {
      if (!mq.matches) {
        setHidden(false)
        document.documentElement.style.removeProperty('--site-chrome-height')
      } else {
        syncChromeHeight(getChrome())
      }
    }

    observeChrome()
    requestAnimationFrame(observeChrome)
    setHidden(false)
    lastY = window.scrollY

    window.addEventListener('scroll', onScroll, { passive: true })
    mq.addEventListener('change', onMqChange)

    return () => {
      window.removeEventListener('scroll', onScroll)
      mq.removeEventListener('change', onMqChange)
      resizeObserver?.disconnect()
      document.documentElement.style.removeProperty('--site-chrome-height')
      getChrome()?.classList.remove('site-top-chrome--scroll-hidden')
    }
  }, [pathname])
}
