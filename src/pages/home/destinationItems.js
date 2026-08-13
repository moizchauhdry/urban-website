import hartford from '../../assets/destinations/hartford.webp'
import newYorkCity from '../../assets/destinations/new-york-city.webp'
import atlanta from '../../assets/destinations/atlanta.webp'
import milwaukee from '../../assets/destinations/milwaukee.webp'
import chicago from '../../assets/destinations/chicago.webp'
import boston from '../../assets/destinations/boston.webp'

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
    city: 'New York City',
    state: 'NY',
    image: newYorkCity,
    blurb: 'Black car and limo service for Manhattan, airports, and nights out.',
    href: '/new-york-car-service',
  },
  {
    id: 'atlanta',
    city: 'Atlanta',
    state: 'GA',
    image: atlanta,
    blurb: 'Executive rides for ATL, downtown, and metro Atlanta travel.',
    href: '/atlanta-car-service',
  },
  {
    id: 'milwaukee',
    city: 'Milwaukee',
    state: 'WI',
    image: milwaukee,
    blurb: 'Chauffeured service for the city, lakefront, and regional trips.',
    href: '/milwaukee-car-service',
  },
  {
    id: 'chicago',
    city: 'Chicago',
    state: 'IL',
    image: chicago,
    blurb: 'Premium car service for Loop meetings, O’Hare, and Midway.',
    href: '/illinois-car-service',
  },
  {
    id: 'boston',
    city: 'Boston',
    state: 'MA',
    image: boston,
    blurb: 'Logan transfers and polished rides across Greater Boston.',
    href: '/boston-car-service',
  },
]
