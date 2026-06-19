import firstClassSedan from '../../assets/fleet/fleet/first-class-sedan.webp'
import luxurySedan from '../../assets/fleet/fleet/luxury-sedan.webp'
import fullSizeSuv from '../../assets/fleet/fleet/full-size-suv.webp'
import limo from '../../assets/fleet/fleet/limo-final.webp'
import sprinter from '../../assets/fleet/fleet/sprinter.webp'
import partyBus from '../../assets/fleet/fleet/party-bus.webp'
import motorCoach from '../../assets/fleet/fleet/moto-coach.webp'

/** @typedef {{ src?: string, loadSrc?: () => Promise<{ default: string }>, alt: string }} FleetImage */

/**
 * Fleet page vehicle grid — order matches the dedicated fleet page design.
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
export const fleetPageItems = [
  {
    id: 'full-size-suv',
    imgClass: 'suv',
    title: 'Full Size SUV',
    badge: 'Popular',
    description: 'Perfect for corporate teams, tours, or larger families.',
    images: [
      { src: fullSizeSuv, alt: 'Full Size SUV — gallery 1 of 3' },
      {
        loadSrc: () => import('../../assets/fleet/fleet/full-size-suv2.webp'),
        alt: 'Full Size SUV — gallery 2 of 3',
      },
      {
        loadSrc: () => import('../../assets/fleet/fleet/full-size-suv3.webp'),
        alt: 'Full Size SUV — gallery 3 of 3',
      },
    ],
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
    images: [
      { src: luxurySedan, alt: 'Luxury Sedan — gallery 1 of 3' },
      {
        loadSrc: () => import('../../assets/fleet/fleet/luxury-sedan2.webp'),
        alt: 'Luxury Sedan — gallery 2 of 3',
      },
      {
        loadSrc: () => import('../../assets/fleet/fleet/luxury-sedan3.webp'),
        alt: 'Luxury Sedan — gallery 3 of 3',
      },
    ],
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
    images: [
      { src: firstClassSedan, alt: 'First Class Sedan — gallery 1 of 3' },
      {
        loadSrc: () => import('../../assets/fleet/fleet/first-class-sedan2.webp'),
        alt: 'First Class Sedan — gallery 2 of 3',
      },
      {
        loadSrc: () => import('../../assets/fleet/fleet/first-class-sedan3.webp'),
        alt: 'First Class Sedan — gallery 3 of 3',
      },
    ],
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
    images: [
      { src: sprinter, alt: 'Sprinter Van — gallery 1 of 3' },
      {
        loadSrc: () => import('../../assets/fleet/fleet/sprinter2.webp'),
        alt: 'Sprinter Van — gallery 2 of 3',
      },
      {
        loadSrc: () => import('../../assets/fleet/fleet/sprinter3.webp'),
        alt: 'Sprinter Van — gallery 3 of 3',
      },
    ],
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
    images: [
      { src: fullSizeSuv, alt: 'Mini SUV — gallery 1 of 3' },
      {
        loadSrc: () => import('../../assets/fleet/fleet/full-size-suv2.webp'),
        alt: 'Mini SUV — gallery 2 of 3',
      },
      {
        loadSrc: () => import('../../assets/fleet/fleet/full-size-suv3.webp'),
        alt: 'Mini SUV — gallery 3 of 3',
      },
    ],
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
    images: [
      { src: motorCoach, alt: 'Motor Coach — gallery 1 of 2' },
      {
        loadSrc: () => import('../../assets/fleet/fleet/moto-coach2.webp'),
        alt: 'Motor Coach — gallery 2 of 2',
      },
    ],
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
    images: [
      { src: partyBus, alt: 'Party Bus — gallery 1 of 3' },
      {
        loadSrc: () => import('../../assets/fleet/fleet/party-bus2.webp'),
        alt: 'Party Bus — gallery 2 of 3',
      },
      {
        loadSrc: () => import('../../assets/fleet/fleet/party-bus3.webp'),
        alt: 'Party Bus — gallery 3 of 3',
      },
    ],
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
    images: [
      { src: limo, alt: 'Limousine — gallery 1 of 3' },
      {
        loadSrc: () => import('../../assets/fleet/fleet/limo2.webp'),
        alt: 'Limousine — gallery 2 of 3',
      },
      {
        loadSrc: () => import('../../assets/fleet/fleet/limo3.webp'),
        alt: 'Limousine — gallery 3 of 3',
      },
    ],
    specs: [
      { icon: 'wine-glass', text: 'Bar Console' },
      { icon: 'lightbulb', text: 'Lighting Cabin' },
      { icon: 'tv', text: 'Media Controls' },
      { icon: 'grip-lines-vertical', text: 'Privacy Divider' },
    ],
  },
]
