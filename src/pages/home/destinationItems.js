import hartford from '../../assets/home/destinations/hartford.webp'
import newYorkCity from '../../assets/home/destinations/new-york-city.webp'
import atlanta from '../../assets/home/destinations/atlanta.webp'
import milwaukee from '../../assets/home/destinations/milwaukee.webp'
import chicago from '../../assets/home/destinations/chicago.webp'
import boston from '../../assets/home/destinations/boston.webp'

/** @typedef {{ id: string, city: string, state: string, image: string }} DestinationItem */

/** @type {DestinationItem[]} */
export const DESTINATION_ITEMS = [
  { id: 'hartford', city: 'Hartford', state: 'CT', image: hartford },
  { id: 'new-york-city', city: 'New York City', state: 'NY', image: newYorkCity },
  { id: 'atlanta', city: 'Atlanta', state: 'GA', image: atlanta },
  { id: 'milwaukee', city: 'Milwaukee', state: 'WI', image: milwaukee },
  { id: 'chicago', city: 'Chicago', state: 'IL', image: chicago },
  { id: 'boston', city: 'Boston', state: 'MA', image: boston },
]
