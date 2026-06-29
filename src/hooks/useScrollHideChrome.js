import { useEffect } from 'react'

const HIDE_DELTA = 6
const MIN_SCROLL_TO_HIDE = 64

/**
 * Hides `.site-top-chrome` while scrolling down and reveals it on upward scroll.
 * Skips when the mobile menu is open.
 */
export function useScrollHideChrome(pathname) {
  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false
    let resizeObserver = null
    let observedChrome = null

    const getChrome = () => document.querySelector('.site-top-chrome')

    const syncChromeHeight = (chrome) => {
      if (!chrome) {
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

      chrome.classList.toggle('site-top-chrome--scroll-hidden', hidden)
    }

    const onScroll = () => {
      observeChrome()
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        ticking = false

        const chrome = getChrome()
        if (chrome?.classList.contains('site-top-chrome--menu-open')) {
          setHidden(false)
          lastY = window.scrollY
          return
        }

        const y = window.scrollY
        const delta = y - lastY

        if (y <= 0) {
          setHidden(false)
        } else if (delta < 0) {
          setHidden(false)
        } else if (delta > HIDE_DELTA && y > MIN_SCROLL_TO_HIDE) {
          setHidden(true)
        }

        lastY = y
      })
    }

    observeChrome()
    requestAnimationFrame(observeChrome)
    setHidden(false)
    lastY = window.scrollY

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      resizeObserver?.disconnect()
      document.documentElement.style.removeProperty('--site-chrome-height')
      getChrome()?.classList.remove('site-top-chrome--scroll-hidden')
    }
  }, [pathname])
}
