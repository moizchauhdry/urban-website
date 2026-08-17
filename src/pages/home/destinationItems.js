import hartford from '../../assets/destinations/hartford.webp'
import newYorkCity from '../../assets/destinations/new-york-city.webp'
import boston from '../../assets/destinations/boston.webp'
import miami from '../../assets/destinations/miami.webp'
import newark from '../../assets/destinations/newark.webp'
import newHaven from '../../assets/destinations/new-haven.webp'

/**
 * @typedef {{
 *   id: string,
 *   city: string,
 *   state: string,
 *   image: string,
 *   blurb: string,
 *   href: string,
 * }} DestinationItem
 */

/** @type {DestinationItem[]} */
export const DESTINATION_ITEMS = [
  {
    id: 'hartford',
    city: 'Hartford',
    state: 'CT',
    image: hartford,
    blurb: 'Private transfers across Connecticut — airport runs, meetings, and city rides.',
    href: '/hartford-ct-car-service',
  },
  {
    id: 'new-york-city',
    city: 'New York',
    state: 'NY',
    image: newYorkCity,
    blurb: 'Black car and limo service for Manhattan, airports, and nights out.',
    href: '/new-york-car-service',
  },
  {
    id: 'boston',
    city: 'Boston',
    state: 'MA',
    image: boston,
    blurb: 'Logan transfers and polished rides across Greater Boston.',
    href: '/boston-car-service',
  },
  {
    id: 'miami',
    city: 'Miami',
    state: 'FL',
    image: miami,
    blurb: 'Airport transfers and private rides across Miami and South Florida.',
    href: '/miami-car-service',
  },
  {
    id: 'newark',
    city: 'Newark',
    state: 'NJ',
    image: newark,
    blurb: 'Reliable Newark airport transfers and city-to-city chauffeur rides.',
    href: '/newark-airport-service',
  },
  {
    id: 'new-haven',
    city: 'New Haven',
    state: 'CT',
    image: newHaven,
    blurb: 'Private New Haven rides for Yale, downtown, and JFK transfers.',
    href: '/new-haven-ct-car-service',
  },
]
