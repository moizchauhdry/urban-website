import economySedan from '../assets/icons/economy-sedan.svg'
import economySedan2 from '../assets/icons/economy-sedan2.jpg'
import economySedan3 from '../assets/icons/economy-sedan3.jpg'
import firstClassSedan from '../assets/icons/first-class-sedan.svg'
import firstClassSedan2 from '../assets/icons/first-class-sedan2.jpeg'
import firstClassSedan3 from '../assets/icons/first-class-sedan3.jpeg'
import luxurySedan from '../assets/icons/luxury-sedan.svg'
import luxurySedan2 from '../assets/icons/luxury-sedan2.jpg'
import luxurySedan3 from '../assets/icons/luxury-sedan3.jpg'
import fullSizeSuv from '../assets/icons/full-size-suv.svg'
import fullSizeSuv2 from '../assets/icons/full-size-suv2.jpg'
import fullSizeSuv3 from '../assets/icons/full-size-suv3.png'
import limo from '../assets/icons/limo.svg'
import limo2 from '../assets/icons/limo2.jpg'
import limo3 from '../assets/icons/limo3.jpg'
import sprinter from '../assets/icons/sprinter.svg'
import sprinter2 from '../assets/icons/sprinter2.png'
import sprinter3 from '../assets/icons/sprinter3.jpg'
import partyBus from '../assets/icons/party-bus.svg'
import partyBus2 from '../assets/icons/party-bus2.jpg'
import partyBus3 from '../assets/icons/party-bus3.jpg'
import motorCoach from '../assets/icons/moto-coach.svg'
import motorCoach2 from '../assets/icons/moto-coach2.jpg'

/** @typedef {{ src: string; alt: string }} FleetImage */

/**
 * @type {Array<{
 *   id: string
 *   imgClass: string
 *   title: string
 *   description: string
 *   badge?: string
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
      { src: economySedan2, alt: 'Economy Sedan — gallery 2 of 3' },
      { src: economySedan3, alt: 'Economy Sedan — gallery 3 of 3' },
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
      { src: firstClassSedan2, alt: 'First Class Sedan — gallery 2 of 3' },
      { src: firstClassSedan3, alt: 'First Class Sedan — gallery 3 of 3' },
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
      { src: luxurySedan2, alt: 'Luxury Sedan — gallery 2 of 3' },
      { src: luxurySedan3, alt: 'Luxury Sedan — gallery 3 of 3' },
    ],
    specs: [
      { icon: 'fa-solid fa-user', text: '3 Passengers' },
      { icon: 'fa-solid fa-suitcase', text: '3 Luggage' },
      { icon: 'fa-solid fa-couch', text: 'Comfortable Seating' },
      { icon: 'fa-solid fa-snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'full-size-suv',
    imgClass: 'suv',
    title: 'Full Size SUV',
    badge: 'Popular',
    description:
      'Perfect for corporate teams, tours, or larger families.',
    images: [
      { src: fullSizeSuv, alt: 'Full Size SUV — gallery 1 of 3' },
      { src: fullSizeSuv2, alt: 'Full Size SUV — gallery 2 of 3' },
      { src: fullSizeSuv3, alt: 'Full Size SUV — gallery 3 of 3' },
    ],
    specs: [
      { icon: 'fa-solid fa-user', text: '6 Passengers' },
      { icon: 'fa-solid fa-suitcase', text: '5 Luggages' },
      { icon: 'fa-solid fa-expand', text: 'Ample Space' },
      { icon: 'fa-solid fa-snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'limousine',
    imgClass: 'limo',
    title: 'Limousine',
    description:
      'Premium choice for weddings, red-carpet events, proms, and VIP nights out.',
    images: [
      { src: limo, alt: 'Limousine — gallery 1 of 3' },
      { src: limo2, alt: 'Limousine — gallery 2 of 3' },
      { src: limo3, alt: 'Limousine — gallery 3 of 3' },
    ],
    specs: [
      { icon: 'fa-solid fa-wine-glass', text: 'Bar Console' },
      { icon: 'fa-solid fa-lightbulb', text: 'Lighting Cabin' },
      { icon: 'fa-solid fa-tv', text: 'Media Controls' },
      { icon: 'fa-solid fa-grip-lines-vertical', text: 'Privacy Divider' },
    ],
  },
  {
    id: 'sprinter',
    imgClass: 'sprinter',
    title: 'Sprinter Van',
    description:
      'Perfect for group travel, corporate events, parties, and long-distance trips.',
    images: [
      { src: sprinter, alt: 'Sprinter Van — gallery 1 of 3' },
      { src: sprinter2, alt: 'Sprinter Van — gallery 2 of 3' },
      { src: sprinter3, alt: 'Sprinter Van — gallery 3 of 3' },
    ],
    specs: [
      { icon: 'fa-solid fa-user', text: '14 Passengers' },
      { icon: 'fa-solid fa-suitcase', text: '14 Luggage' },
      { icon: 'fa-solid fa-expand', text: 'Ample Space' },
      { icon: 'fa-solid fa-chair', text: 'Leather Seating' },
    ],
  },
  {
    id: 'party-bus',
    imgClass: 'party-bus',
    title: 'Party Bus',
    description:
      'Perfect for large group travel, corporate events, parties and wine tours.',
    images: [
      { src: partyBus, alt: 'Party Bus — gallery 1 of 3' },
      { src: partyBus2, alt: 'Party Bus — gallery 2 of 3' },
      { src: partyBus3, alt: 'Party Bus — gallery 3 of 3' },
    ],
    specs: [
      { icon: 'fa-solid fa-user', text: '24 Passengers' },
      { icon: 'fa-solid fa-suitcase', text: '20 Luggage' },
      { icon: 'fa-solid fa-users', text: 'Large Seat Capacity' },
      { icon: 'fa-solid fa-chair', text: 'Leather Seating' },
    ],
  },
  {
    id: 'motor-coach',
    imgClass: 'motor-coach',
    title: 'Motor Coach',
    description:
      'Perfect for large group travel, corporate events, parties and wine tours.',
    images: [
      { src: motorCoach, alt: 'Motor Coach — gallery 1 of 2' },
      { src: motorCoach2, alt: 'Motor Coach — gallery 2 of 2' },
    ],
    specs: [
      { icon: 'fa-solid fa-user', text: '32–55 Passengers' },
      { icon: 'fa-solid fa-suitcase', text: 'Larger Luggage Space' },
      { icon: 'fa-solid fa-expand', text: 'Ample Space' },
      { icon: 'fa-solid fa-restroom', text: 'Connected Washrooms' },
    ],
  },
]
