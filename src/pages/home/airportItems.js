import bos from '../../assets/home/airports/bos.webp'
import bdl from '../../assets/home/airports/bdl.webp'
import mdw from '../../assets/home/airports/mdw.webp'
import ord from '../../assets/home/airports/ord.webp'

/** @typedef {{ id: string, code: string, image: string }} AirportItem */

/** @type {AirportItem[]} */
export const HOME_AIRPORT_ITEMS = [
  { id: 'bos', code: 'BOS', image: bos },
  { id: 'bdl', code: 'BDL', image: bdl },
  { id: 'mdw', code: 'MDW', image: mdw },
  { id: 'ord', code: 'ORD', image: ord },
  { id: 'jfk', code: 'JFK', image: bos },
  { id: 'lga', code: 'LGA', image: mdw },
]
