import economySedan from '../assets/icons/economy-sedan.svg'
import firstClassSedan from '../assets/icons/first-class-sedan.svg'
import luxurySedan from '../assets/icons/luxury-sedan.svg'

/** @typedef {{ src: string; alt: string }} FleetImage */

/**
 * Each fleet card owns a gallery of images (same asset repeated until more photos exist).
 * @type {Array<{
 *   id: string
 *   imgClass: string
 *   title: string
 *   description: string
 *   images: FleetImage[]
 *   specs: Array<{ icon: string; text: string }>
 * }>}
 */
export const fleetItems = [
  {
    id: 'economy',
    imgClass: 'economy',
    title: 'Economy Sedan',
    description:
      'A budget-friendly, comfortable option for solo travelers and couples.',
    images: [
      { src: economySedan, alt: 'Economy Sedan — gallery 1 of 3' },
      { src: economySedan, alt: 'Economy Sedan — gallery 2 of 3' },
      { src: economySedan, alt: 'Economy Sedan — gallery 3 of 3' },
    ],
    specs: [
      { icon: 'fa-solid fa-user', text: '3 Passengers' },
      { icon: 'fa-solid fa-suitcase', text: '3 Luggage' },
      { icon: 'fa-solid fa-snowflake', text: 'Climate Control' },
      { icon: 'fa-solid fa-couch', text: 'Comfortable Seating' },
    ],
  },
  {
    id: 'first-class',
    imgClass: 'first',
    title: 'First Class Sedan',
    description:
      'Perfect for executives, business travelers, and couples seeking a smooth, private ride.',
    images: [
      { src: firstClassSedan, alt: 'First Class Sedan — gallery 1 of 3' },
      { src: firstClassSedan, alt: 'First Class Sedan — gallery 2 of 3' },
      { src: firstClassSedan, alt: 'First Class Sedan — gallery 3 of 3' },
    ],
    specs: [
      { icon: 'fa-solid fa-user', text: '3 Passengers' },
      { icon: 'fa-solid fa-suitcase', text: '3 Luggage' },
      { icon: 'fa-solid fa-chair', text: 'Leather Interior' },
      { icon: 'fa-solid fa-snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'luxury',
    imgClass: 'luxury',
    title: 'Luxury Sedan',
    description:
      'Perfect for solo travelers and airport transfers, meetings, and city travel.',
    images: [
      { src: luxurySedan, alt: 'Luxury Sedan — gallery 1 of 3' },
      { src: luxurySedan, alt: 'Luxury Sedan — gallery 2 of 3' },
      { src: luxurySedan, alt: 'Luxury Sedan — gallery 3 of 3' },
    ],
    specs: [
      { icon: 'fa-solid fa-user', text: '3 Passengers' },
      { icon: 'fa-solid fa-suitcase', text: '3 Luggage' },
      { icon: 'fa-solid fa-couch', text: 'Comfortable Seating' },
      { icon: 'fa-solid fa-snowflake', text: 'Climate Control' },
    ],
  },
]
