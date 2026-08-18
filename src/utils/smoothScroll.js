/** @type {import('lenis').default | null} */
let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

/** @param {import('lenis').default | null} instance */
export function setLenisInstance(instance) {
  lenisInstance = instance
}

/**
 * Smooth scroll helper — uses Lenis when available, otherwise native.
 * @param {number | HTMLElement | string} target
 * @param {object} [options]
 */
export function smoothScrollTo(target, options = {}) {
  const lenis = lenisInstance
  if (lenis) {
    lenis.scrollTo(target, {
      duration: 0.55,
      offset: 0,
      ...options,
    })
    return
  }

  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' })
    return
  }

  const el =
    typeof target === 'string' ? document.querySelector(target) : target
  el?.scrollIntoView({ behavior: 'smooth', block: options.block ?? 'start' })
}
