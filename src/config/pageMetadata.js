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
  '/terms-of-service': {
    title: 'Terms of Service | Urban Elite Limo',
    description:
      'Read the Urban Elite Limo Terms of Service governing bookings, payments, cancellations, refunds, and use of our transportation platform.',
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

const CUSTOM_SERVICE_PAGE_METADATA = [
  {
    path: '/greenwich-ct-car-service',
    title: 'Greenwich CT Car Service | Luxury Airport & Chauffeur Transportation',
    description:
      'Reliable Greenwich CT car service for airport transfers, corporate travel, and long-distance rides. Enjoy luxury vehicles, professional chauffeurs, and 24/7 dependable transportation.',
  },
  {
    path: '/ct-to-jfk-airport-car-service',
    title: 'CT to JFK Airport Car Service | Reliable Car Service to JFK from CT',
    description:
      'Book trusted CT to JFK Airport Car Service for comfortable, on-time airport transportation. Serving Hartford and all of Connecticut with private rides to JFK.',
  },
  {
    path: '/new-haven-ct-car-service',
    title: 'New Haven CT Car Service | New Haven Limo Service to JFK',
    description:
      'Book New Haven CT Car Service for airport transfers, private rides, and professional transportation in New Haven. Enjoy dependable service to JFK and beyond.',
  },
  {
    path: '/hartford-ct-car-service',
    title: 'Hartford CT Car Service | Luxury Airport Transfers to JFK',
    description:
      'Book Hartford CT Car Service for executive airport transfers, private rides, and luxury transportation across Connecticut and to JFK.',
  },
  {
    path: '/stamford-ct-car-service',
    title: 'Stamford CT Car Service | Luxury Airport Transfers to JFK',
    description:
      'Book Stamford CT Car Service for airport rides, corporate travel, and private transportation. Serving Stamford, JFK trips, and luxury limo service in Connecticut.',
  },
  {
    path: '/fairfield-ct-car-service',
    title: 'Fairfield CT Car Service | Private Transfers Across Connecticut and Beyond',
    description:
      'Book Fairfield CT Car Service for private rides, airport transfers, and professional transportation. Serving Fairfield and major travel routes with ease.',
  },
  {
    path: '/danbury-ct-car-service',
    title: 'Danbury CT Car Service | Airport Car Service from Danbury to JFK',
    description:
      'Book Danbury CT Car Service for airport transfers, private rides, and professional transportation. Serving Danbury, JFK trips, Manhattan, and luxury limo service in Connecticut.',
  },
  {
    path: '/boston-chauffeur-service',
    title: 'Boston Chauffeur Service | Professional Black Car & Logan Transfers',
    description:
      'Book Boston chauffeur service for Logan Airport transfers, hourly bookings, and corporate travel. Licensed chauffeurs, luxury vehicles, flight tracking, and 24/7 reliable black-car transportation across Greater Boston.',
  },
  {
    path: '/boston-limo-service',
    title: 'Boston Limo Service | Luxury Limousine & Airport Transfers',
    description:
      'Reserve Boston limo service for Logan Airport, corporate events, and special occasions. Enjoy polished limousine transportation with professional chauffeurs, upfront pricing, and stress-free luxury travel in Boston.',
  },
  {
    path: '/connecticut-to-boston-car-service',
    title: 'Connecticut to Boston Car Service | Private CT to Boston Transfers',
    description:
      'Book Connecticut to Boston car service for private door-to-door transfers from Hartford, Stamford, Greenwich, and across CT to Boston, Cambridge, and Logan Airport. Comfortable long-distance chauffeur travel with punctual pickups.',
  },
  {
    path: '/bos-airport-car-service',
    title: 'BOS Airport Car Service | Boston Logan Airport Limo & Transfers',
    description:
      'Travel to and from Boston Logan International Airport with BOS airport car service. Professional chauffeurs, flight tracking, luxury vehicles, and reliable 24/7 airport limo transfers across Boston and nearby cities.',
  },
]

for (const page of CUSTOM_SERVICE_PAGE_METADATA) {
  PAGE_METADATA_BY_PATH[page.path] = {
    title: page.title,
    description: page.description,
  }
}

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
