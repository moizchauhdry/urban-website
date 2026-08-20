/** Main site homepage (Urban Elite Limo). */
export const MAIN_HOME = '/'

export const CONNECTICUT_HOME = '/connecticut-car-service'
export const FLORIDA_HOME = '/florida-car-service'
export const NEW_YORK_HOME = '/new-york-car-service'
export const BOSTON_HOME = '/boston-car-service'
export const ILLINOIS_HOME = '/illinois-car-service'
export const CHICAGO_LIMO_HOME = '/illinois-car-service/chicago-limo-service'
export const CHICAGO_CHAUFFEUR_HOME = '/illinois-car-service/chicago-chauffeur-service'
export const FIFA_HOME = '/fifa'
export const MIAMI_CAR_SERVICE = '/miami-car-service'

export const ABOUT_US = '/about-us'
export const BOOK_NOW = '/book-now'
export const FLEET = '/fleet'
export const OUR_SERVICES = '/our-services'
export const CONTACT_US = '/contact-us'
export const PRIVACY_POLICY = '/privacy-policy'
export const TERMS_OF_SERVICE = '/terms-of-service'
export const THANK_YOU = '/thank-you'

/** `/jfk-airport-car-service/` → `/jfk-airport-car-service`; `/` stays `/`. */
export function normalizePathname(pathname) {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/+$/, '') || '/'
}
