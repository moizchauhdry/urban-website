import { OTHER_PAGES } from '../pages/other-pages/registry.js'
import illinoisPages from '../pages/illinois/pages.manifest.json'
import {
  buildServicePageDescription,
  buildServicePageTitle,
  SITE_NAME,
} from '../utils/pageMetadata.js'

/** @type {Record<string, { title: string, description: string }>} */
const PAGE_METADATA_BY_PATH = {
  '/': {
    title: 'Premium Car Service | Urban Elite Limo',
    description:
      'Premium car service and airport transfers with professional chauffeurs, luxury vehicles, and reliable rides for business and leisure travel.',
  },
  '/about-us': {
    title: 'About Us | Urban Elite Limo',
    description:
      'Learn about Urban Elite Limo — professional chauffeurs, premium vehicles, and dependable car service for airports, cities, and long-distance travel.',
  },
  '/our-services': {
    title: 'Our Services | Urban Elite Limo',
    description:
      'Explore Urban Elite Limo services including airport transfers, corporate travel, hourly chauffeur service, city-to-city rides, and special event transportation.',
  },
  '/contact-us': {
    title: 'Contact Us | Urban Elite Limo',
    description:
      'Contact Urban Elite Limo for reservations, quotes, and support. Reach our team for airport transfers, corporate travel, and private chauffeur service.',
  },
  '/fleet': {
    title: 'Our Fleet | Urban Elite Limo',
    description:
      'Browse the Urban Elite Limo fleet of luxury sedans, SUVs, sprinters, and executive vehicles for airport transfers and private chauffeur service.',
  },
  '/book-now': {
    title: 'Book Now | Urban Elite Limo',
    description:
      'Book your ride with Urban Elite Limo. Request a quote for airport transfers, hourly chauffeur service, and long-distance car service.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Urban Elite Limo',
    description:
      'Read the Urban Elite Limo privacy policy for information on how we collect, use, and protect your personal information.',
  },
  '/thank-you': {
    title: 'Quotation Request Received | Urban Elite Limo',
    description:
      'Your quotation request has been received. Urban Elite Limo will contact you shortly to confirm your ride details.',
  },
  '/fifa': {
    title: 'FIFA World Cup 2026 Chauffeur Service | Urban Elite Limo',
    description:
      'Book FIFA World Cup 2026 stadium transfers and match-day chauffeur service in Canada, the USA, and Mexico with Urban Elite Limo.',
  },
}

const REGIONAL_HUB_PAGES = [
  {
    path: '/connecticut-car-service',
    pageName: 'Connecticut Car Service',
    longTitle:
      'Reliable Connecticut Car Service for Airports and Long Distance Travel | Urban Elite Limo',
  },
  {
    path: '/florida-car-service',
    pageName: 'Florida Car Service',
    longTitle:
      'Reliable Florida Car Service for Airports and Long Distance Travel | Urban Elite Limo',
  },
  {
    path: '/new-york-car-service',
    pageName: 'New York Car Service',
    longTitle:
      'Reliable New York Car Service for Airports and Long Distance Travel | Urban Elite Limo',
  },
]

function setServicePageMetadata(path, pageName, options = {}) {
  PAGE_METADATA_BY_PATH[path] = {
    title: buildServicePageTitle(pageName, options),
    description: buildServicePageDescription(pageName),
  }
}

for (const page of OTHER_PAGES) {
  setServicePageMetadata(page.pageHome, page.title)
}

Object.assign(PAGE_METADATA_BY_PATH, {
  '/jfk-airport-car-service': {
    title: 'Reliable JFK Airport Car Service | 24/7 Luxury Airport Rides',
    description:
      'Premium JFK airport car service providing luxury transportation to and from JFK Airport, serving Connecticut, New Jersey, Long Island, NYC, and all major cities across the USA.',
  },
  '/lga-airport-car-service': {
    title: 'LaGuardia Chauffeur Service | LGA Airport Car Service',
    description:
      'Fast and easy LaGuardia airport car service booking with instant scheduling and luxury transfers to and from LGA across NYC, NJ, CT and Long Island.',
  },
  '/newark-airport-service': {
    title: 'Newark Limo Service | Airport Car Service to & from Newark',
    description:
      'Book your Newark Airport car service in minutes with easy scheduling, flight tracking, and door-to-door transfers across NYC, CT and NJ.',
  },
  '/bdl-airport-car-service': {
    title: 'BDL Airport Limo Service | Connecticut Chauffeur Airport Rides',
    description:
      'Book Bradley airport car service for smooth, on-time airport transfers across Connecticut and nearby cities.',
  },
})

for (const hub of REGIONAL_HUB_PAGES) {
  setServicePageMetadata(hub.path, hub.pageName, { longTitle: hub.longTitle })
}

for (const page of illinoisPages) {
  PAGE_METADATA_BY_PATH[page.route] = {
    title: page.docTitle,
    description: buildServicePageDescription(page.navLabel),
  }
}

/** @param {string} pathname */
export function getPageMetadata(pathname) {
  const path = pathname.replace(/\/$/, '') || '/'
  return PAGE_METADATA_BY_PATH[path] ?? null
}

export { PAGE_METADATA_BY_PATH, SITE_NAME }
