/** Shared scroll-reveal scanner (used by hook + lazy home sections). */
let scanDocument = null

export function triggerScrollRevealScan() {
  scanDocument?.()
}

/** Main page blocks that slide up on scroll (hero is visible on load — excluded). */
export const SECTION_SELECTOR =
  'section.section:not(.scroll-pinned-cards), section.planning, section.trusted, section.journey, section.airports, section.faq-section'

/**
 * @param {IntersectionObserver} io
 * @param {WeakSet<Element>} observed
 * @param {boolean} reducedMotion
 */
export function createScrollRevealScanner(io, observed, reducedMotion) {
  const observe = (el) => {
    if (!el || el.classList.contains('is-visible') || observed.has(el)) return
    if (reducedMotion) {
      el.classList.add('is-visible')
      return
    }
    observed.add(el)
    io.observe(el)
  }

  return function scan() {
    document.querySelectorAll(SECTION_SELECTOR).forEach((el) => {
      el.classList.add('scroll-reveal-section')
      observe(el)
    })
  }
}

export function bindScrollRevealScanner(fn) {
  scanDocument = fn
}

export function unbindScrollRevealScanner(fn) {
  if (scanDocument === fn) scanDocument = null
}
