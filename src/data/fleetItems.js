import firstClassSedan from '../assets/fleet/fleet/first-class-sedan.svg'
import luxurySedan from '../assets/fleet/fleet/luxury-sedan.svg'
import fullSizeSuv from '../assets/fleet/fleet/full-size-suv.svg'
import miniSuv from '../assets/fleet/fleet/mini_suv.webp'
import limo from '../assets/fleet/fleet/limo-final.svg'
import sprinter from '../assets/fleet/fleet/sprinter.svg'
import partyBus from '../assets/fleet/fleet/party-bus.svg'
import motorCoach from '../assets/fleet/fleet/moto-coach.svg'

/** @typedef {{ src?: string, loadSrc?: () => Promise<{ default: string }>, alt: string }} FleetImage */

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
    id: 'first-class',
    imgClass: 'first',
    title: 'First Class Sedan',
    description:
      'Perfect for executives, business travelers, and couples seeking a smooth, private ride.',
    images: [{ src: firstClassSedan, alt: 'First Class Sedan' }],
    specs: [
      { icon: 'user', text: '3 Passengers' },
      { icon: 'suitcase', text: '3 Luggage' },
      { icon: 'chair', text: 'Leather Interior' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'luxury',
    imgClass: 'luxury',
    title: 'Luxury Sedan',
    description:
      'Perfect for solo travelers and airport transfers, meetings, and city travel.',
    images: [{ src: luxurySedan, alt: 'Luxury Sedan' }],
    specs: [
      { icon: 'user', text: '3 Passengers' },
      { icon: 'suitcase', text: '3 Luggage' },
      { icon: 'couch', text: 'Comfortable Seating' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'mini-suv',
    imgClass: 'mini-suv',
    title: 'Mini SUV',
    badge: 'Popular',
    description:
      'Perfect for small families or groups who need comfort and space without going full-size.',
    images: [{ src: miniSuv, alt: 'Mini SUV' }],
    specs: [
      { icon: 'user', text: '4 Passengers' },
      { icon: 'suitcase', text: '4 Luggage' },
      { icon: 'expand', text: 'Extra Legroom' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'full-size-suv',
    imgClass: 'suv',
    title: 'Full Size SUV',
    badge: 'Popular',
    description: 'Perfect for corporate teams, tours, or larger families.',
    images: [{ src: fullSizeSuv, alt: 'Full Size SUV' }],
    specs: [
      { icon: 'user', text: '6 Passengers' },
      { icon: 'suitcase', text: '5 Luggages' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'limousine',
    imgClass: 'limo',
    title: 'Limousine',
    description:
      'Premium choice for weddings, red-carpet events, proms, and VIP nights out.',
    images: [{ src: limo, alt: 'Limousine' }],
    specs: [
      { icon: 'wine-glass', text: 'Bar Console' },
      { icon: 'lightbulb', text: 'Lighting Cabin' },
      { icon: 'tv', text: 'Media Controls' },
      { icon: 'grip-lines-vertical', text: 'Privacy Divider' },
    ],
  },
  {
    id: 'sprinter',
    imgClass: 'sprinter',
    title: 'Sprinter Van',
    description:
      'Perfect for group travel, corporate events, parties, and long-distance trips.',
    images: [{ src: sprinter, alt: 'Sprinter Van' }],
    specs: [
      { icon: 'user', text: '14 Passengers' },
      { icon: 'suitcase', text: '14 Luggage' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'chair', text: 'Leather Seating' },
    ],
  },
  {
    id: 'party-bus',
    imgClass: 'party-bus',
    title: 'Party Bus',
    description:
      'Perfect for large group travel, corporate events, parties and wine tours.',
    images: [{ src: partyBus, alt: 'Party Bus' }],
    specs: [
      { icon: 'user', text: '24 Passengers' },
      { icon: 'suitcase', text: '20 Luggage' },
      { icon: 'users', text: 'Large Seat Capacity' },
      { icon: 'chair', text: 'Leather Seating' },
    ],
  },
  {
    id: 'motor-coach',
    imgClass: 'motor-coach',
    title: 'Motor Coach',
    description:
      'Perfect for large group travel, corporate events, parties and wine tours.',
    images: [{ src: motorCoach, alt: 'Motor Coach' }],
    specs: [
      { icon: 'user', text: '32–55 Passengers' },
      { icon: 'suitcase', text: 'Larger Luggage Space' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'restroom', text: 'Connected Washrooms' },
    ],
  },
]

/** Dedicated fleet page grid — same static SVG artwork, alternate vehicle order. */
export const fleetPageItems = [
  {
    id: 'full-size-suv',
    imgClass: 'suv',
    title: 'Full Size SUV',
    badge: 'Popular',
    description: 'Perfect for corporate teams, tours, or larger families.',
    images: [{ src: fullSizeSuv, alt: 'Full Size SUV' }],
    specs: [
      { icon: 'user', text: '6 Passengers' },
      { icon: 'suitcase', text: '5 Luggage' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'luxury',
    imgClass: 'luxury',
    title: 'Luxury Sedan',
    description:
      'Perfect for solo travelers and airport transfers, meetings, and city travel.',
    images: [{ src: luxurySedan, alt: 'Luxury Sedan' }],
    specs: [
      { icon: 'user', text: '3 Passengers' },
      { icon: 'suitcase', text: '2 Luggage' },
      { icon: 'couch', text: 'Comfortable Seating' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'first-class',
    imgClass: 'first',
    title: 'First Class Sedan',
    description:
      'Perfect for executives, business travelers, and couples seeking a smooth, private ride.',
    images: [{ src: firstClassSedan, alt: 'First Class Sedan' }],
    specs: [
      { icon: 'user', text: '3 Passengers' },
      { icon: 'suitcase', text: '2 Luggage' },
      { icon: 'chair', text: 'Leather Interior' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'sprinter',
    imgClass: 'sprinter',
    title: 'Sprinter Van',
    description:
      'Perfect for group travel, corporate events, parties, and long-distance trips.',
    images: [{ src: sprinter, alt: 'Sprinter Van' }],
    specs: [
      { icon: 'user', text: '14 Passengers' },
      { icon: 'suitcase', text: '14 Luggage' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'chair', text: 'Leather Seating' },
    ],
  },
  {
    id: 'mini-suv',
    imgClass: 'mini-suv',
    title: 'Mini SUV',
    badge: 'Popular',
    description:
      'Perfect for small families or groups who need comfort and space without going full-size.',
    images: [{ src: miniSuv, alt: 'Mini SUV' }],
    specs: [
      { icon: 'user', text: '4 Passengers' },
      { icon: 'suitcase', text: '4 Luggage' },
      { icon: 'expand', text: 'Extra Legroom' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'motor-coach',
    imgClass: 'motor-coach',
    title: 'Motor Coach',
    description:
      'Perfect for large-group travel, corporate events, parties, and wine tours.',
    images: [{ src: motorCoach, alt: 'Motor Coach' }],
    specs: [
      { icon: 'user', text: '30–55 Pass.' },
      { icon: 'suitcase', text: 'Larger Luggage Space' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'restroom', text: 'Connected Washrooms' },
    ],
  },
  {
    id: 'party-bus',
    imgClass: 'party-bus',
    title: 'Party Bus',
    description:
      'Perfect for large-group travel, corporate events, parties, and wine tours.',
    images: [{ src: partyBus, alt: 'Party Bus' }],
    specs: [
      { icon: 'user', text: '24 Passengers' },
      { icon: 'suitcase', text: '20 Luggage' },
      { icon: 'users', text: 'Large Seat Capacity' },
      { icon: 'chair', text: 'Leather Seating' },
    ],
  },
  {
    id: 'limousine',
    imgClass: 'limo',
    title: 'Limousine',
    description:
      'Premium choice for weddings, red-carpet events, proms, and VIP nights out.',
    images: [{ src: limo, alt: 'Limousine' }],
    specs: [
      { icon: 'wine-glass', text: 'Bar Console' },
      { icon: 'lightbulb', text: 'Lighting Cabin' },
      { icon: 'tv', text: 'Media Controls' },
      { icon: 'grip-lines-vertical', text: 'Privacy Divider' },
    ],
  },
]
