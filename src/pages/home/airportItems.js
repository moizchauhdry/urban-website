import { getAirportImage } from '../../constants/airportImages.js'

/** @typedef {{ id: string, code: string, image: string }} AirportItem */

const HOME_CENTRAL_ORDER = ['BOS', 'BDL', 'JFK', 'LGA']

/** @type {AirportItem[]} */
export const HOME_AIRPORT_ITEMS = HOME_CENTRAL_ORDER.flatMap((code) => {
  const image = getAirportImage(code)
  if (!image) return []
  return [{ id: code.toLowerCase(), code, image }]
})
