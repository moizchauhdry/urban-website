import {
  ABOUT_US,
  BOOK_NOW,
  CONNECTICUT_HOME,
  CONTACT_US,
  FIFA_HOME,
  FLEET,
  MAIN_HOME,
  OUR_SERVICES,
  PRIVACY_POLICY,
  THANK_YOU,
} from './routes.js'

/** Header uses compact Connecticut-style nav. */
const CONNECTICUT_HEADER_PATHS = new Set([MAIN_HOME, CONNECTICUT_HOME, FIFA_HOME])

/** Main site pages without a hero booking card at the top. */
const STATIC_PAGE_PATHS = new Set([
  ABOUT_US,
  OUR_SERVICES,
  CONTACT_US,
  FLEET,
  BOOK_NOW,
  PRIVACY_POLICY,
  THANK_YOU,
])

/** @param {string} pathname */
export function resolveLayoutContext(pathname) {
  return {
    headerVariant: CONNECTICUT_HEADER_PATHS.has(pathname) ? 'connecticut' : 'standard',
    isHeroHome: !STATIC_PAGE_PATHS.has(pathname),
    wrapperClassName: pathname === FIFA_HOME ? 'fifa-page' : undefined,
  }
}
