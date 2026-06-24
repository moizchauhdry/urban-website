export const SITE_NAME = 'Urban Elite Limo'

/** @param {string} pageName */
export function buildServicePageDescription(pageName) {
  const keyword = pageName.toLowerCase()
  return `Reliable and professional ${keyword} designed for a smooth, comfortable, and stress-free travel experience. Book in minutes and enjoy a seamless ride experience backed by professional drivers, punctual service, and premium vehicles.`
}

/**
 * @param {string} pageName
 * @param {{ longTitle?: string }} [options]
 */
export function buildServicePageTitle(pageName, options = {}) {
  if (options.longTitle) return options.longTitle
  return `${pageName} | ${SITE_NAME}`
}

/** @param {{ title: string, description: string }} meta */
export function applyPageMetadata(meta) {
  document.title = meta.title

  let descriptionEl = document.querySelector('meta[name="description"]')
  if (!descriptionEl) {
    descriptionEl = document.createElement('meta')
    descriptionEl.setAttribute('name', 'description')
    document.head.appendChild(descriptionEl)
  }
  descriptionEl.setAttribute('content', meta.description)
}
