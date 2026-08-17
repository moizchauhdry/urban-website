/**
 * Fleet catalog — metadata only. Images load via dynamic import when a card mounts.
 * Keeps MarketingBelowFold / FleetSection off the critical image graph until viewport.
 */

const fleetImageModules = import.meta.glob('../assets/fleet/*.{webp,jpg,jpeg,png}')

/** @param {string} fileName */
function loadFleetImage(fileName) {
  const key = Object.keys(fleetImageModules).find((path) => path.endsWith(`/${fileName}`))
  if (!key) return null
  return () => fleetImageModules[key]()
}

const KEEP_DETAIL_SLUGS = new Set(['economy-sedan', 'luxury-sedan'])
const SKIP_TRUNK_SLUGS = new Set(['limousine', 'party-bus', 'escalade-limo'])

/** Exterior plus cabin, optional amenity detail, and trunk packed to that vehicle's luggage count. */
function fleetImages(exteriorFile, slug, title) {
  const images = [
    { loadSrc: loadFleetImage(exteriorFile), alt: title },
    { loadSrc: loadFleetImage(`${slug}-interior.webp`), alt: `${title} interior` },
  ]
  if (KEEP_DETAIL_SLUGS.has(slug)) {
    images.push({ loadSrc: loadFleetImage(`${slug}-detail.webp`), alt: `${title} amenities` })
  }
  if (!SKIP_TRUNK_SLUGS.has(slug)) {
    images.push({ loadSrc: loadFleetImage(`${slug}-trunk.webp`), alt: `${title} luggage` })
  }
  return images.filter((image) => image.loadSrc)
}

/** @typedef {{ src?: string, loadSrc?: () => Promise<{ default: string }>, alt: string }} FleetImage */

/**
 * @type {Array<{
 *   id: string
 *   category: 'sedan' | 'suv' | 'sprinter' | 'limousine' | 'buses'
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
    category: 'sedan',
    imgClass: 'economy',
    title: 'Sedan',
    description:
      'A budget-friendly, comfortable option for solo travelers and couples.',
    images: fleetImages('economy-sedan.webp', 'economy-sedan', 'Sedan'),
    specs: [
      { icon: 'user', text: '3 Passengers' },
      { icon: 'suitcase', text: '3 Luggage' },
      { icon: 'snowflake', text: 'Climate Control' },
      { icon: 'couch', text: 'Comfortable Seating' },
    ],
  },
  {
    id: 'luxury',
    category: 'sedan',
    imgClass: 'luxury',
    title: 'Luxury Sedan',
    badge: 'Popular',
    description:
      'Perfect for solo travelers and airport transfers, meetings, and city travel.',
    images: fleetImages('luxury-sedan.webp', 'luxury-sedan', 'Luxury Sedan'),
    specs: [
      { icon: 'user', text: '3 Passengers' },
      { icon: 'suitcase', text: '3 Luggage' },
      { icon: 'couch', text: 'Comfortable Seating' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'first-class',
    category: 'sedan',
    imgClass: 'first',
    title: 'First Class Sedan',
    description:
      'Perfect for executives, business travelers, and couples seeking a smooth, private ride.',
    images: fleetImages('first-class-sedan.webp', 'first-class-sedan', 'First Class Sedan'),
    specs: [
      { icon: 'user', text: '3 Passengers' },
      { icon: 'suitcase', text: '3 Luggage' },
      { icon: 'chair', text: 'Leather Interior' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'mini-suv',
    category: 'suv',
    imgClass: 'mini-suv',
    title: 'Mini SUV',
    badge: 'Popular',
    description:
      'Perfect for small families or groups who need comfort and space without going full-size.',
    images: fleetImages('mini_suv.webp', 'mini-suv', 'Mini SUV'),
    specs: [
      { icon: 'user', text: '4 Passengers' },
      { icon: 'suitcase', text: '4 Luggage' },
      { icon: 'expand', text: 'Extra Legroom' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'premium-suv',
    category: 'suv',
    imgClass: 'premium-suv',
    title: 'Premium SUV',
    description:
      'Elevated SUV comfort for executives and families who want extra space and premium amenities.',
    images: fleetImages('full-size-suv2.webp', 'premium-suv', 'Premium SUV'),
    specs: [
      { icon: 'user', text: '5 Passengers' },
      { icon: 'suitcase', text: '5 Luggage' },
      { icon: 'chair', text: 'Leather Interior' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'full-size-suv',
    category: 'suv',
    imgClass: 'suv',
    title: 'Full Size SUV',
    badge: 'Popular',
    description: 'Perfect for corporate teams, tours, or larger families.',
    images: fleetImages('full-size-suv.webp', 'full-size-suv', 'Full Size SUV'),
    specs: [
      { icon: 'user', text: '6 Passengers' },
      { icon: 'suitcase', text: '5 Luggages' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'limousine',
    category: 'limousine',
    imgClass: 'limo',
    title: 'Limousine',
    description:
      'Premium choice for weddings, red-carpet events, proms, and VIP nights out.',
    images: fleetImages('limo-final.webp', 'limousine', 'Limousine'),
    specs: [
      { icon: 'wine-glass', text: 'Bar Console' },
      { icon: 'lightbulb', text: 'Lighting Cabin' },
      { icon: 'tv', text: 'Media Controls' },
      { icon: 'grip-lines-vertical', text: 'Privacy Divider' },
    ],
  },
  {
    id: 'escalade-limo',
    category: 'limousine',
    imgClass: 'escalade-limo',
    title: 'Escalade Limo',
    description:
      'Spacious Escalade-style stretch limo for larger groups celebrating in style.',
    images: fleetImages('esclade_limo.webp', 'escalade-limo', 'Escalade Limo'),
    specs: [
      { icon: 'user', text: '17 Passengers' },
      { icon: 'wine-glass', text: 'Bar Console' },
      { icon: 'lightbulb', text: 'Lighting Cabin' },
      { icon: 'tv', text: 'Media Controls' },
    ],
  },
  {
    id: 'sprinter',
    category: 'sprinter',
    imgClass: 'sprinter',
    title: 'Sprinter Van',
    description:
      'Perfect for group travel, corporate events, parties, and long-distance trips.',
    images: fleetImages('sprinter.webp', 'sprinter', 'Sprinter Van'),
    specs: [
      { icon: 'user', text: '14 Passengers' },
      { icon: 'suitcase', text: '14 Luggage' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'chair', text: 'Leather Seating' },
    ],
  },
  {
    id: 'jet-sprinter',
    category: 'sprinter',
    imgClass: 'jet-sprinter',
    title: 'Jet Sprinter',
    description:
      'Premium sprinter with jet-style comfort for executive groups and VIP travel.',
    images: fleetImages('jet_sprinter.webp', 'jet-sprinter', 'Jet Sprinter'),
    specs: [
      { icon: 'user', text: '14 Passengers' },
      { icon: 'suitcase', text: '14 Luggage' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'chair', text: 'Leather Seating' },
    ],
  },
  {
    id: 'party-bus',
    category: 'buses',
    imgClass: 'party-bus',
    title: 'Party Bus',
    description:
      'Perfect for large group travel, corporate events, parties and wine tours.',
    images: fleetImages('party-bus.webp', 'party-bus', 'Party Bus'),
    specs: [
      { icon: 'user', text: '24 Passengers' },
      { icon: 'suitcase', text: '20 Luggage' },
      { icon: 'users', text: 'Large Seat Capacity' },
      { icon: 'chair', text: 'Leather Seating' },
    ],
  },
  {
    id: 'motor-coach',
    category: 'buses',
    imgClass: 'motor-coach',
    title: 'Motor Coach',
    description:
      'Perfect for large group travel, corporate events, parties and wine tours.',
    images: fleetImages('moto-coach.webp', 'motor-coach', 'Motor Coach'),
    specs: [
      { icon: 'user', text: '32–55 Passengers' },
      { icon: 'suitcase', text: 'Larger Luggage Space' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'restroom', text: 'Connected Washrooms' },
    ],
  },
]

/** Dedicated fleet page grid — same artwork, alternate vehicle order. */
export const fleetPageItems = [
  {
    id: 'full-size-suv',
    category: 'suv',
    imgClass: 'suv',
    title: 'Full Size SUV',
    badge: 'Popular',
    description: 'Perfect for corporate teams, tours, or larger families.',
    images: fleetImages('full-size-suv.webp', 'full-size-suv', 'Full Size SUV'),
    specs: [
      { icon: 'user', text: '6 Passengers' },
      { icon: 'suitcase', text: '5 Luggage' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'economy',
    category: 'sedan',
    imgClass: 'economy',
    title: 'Sedan',
    description:
      'A budget-friendly, comfortable option for solo travelers and couples.',
    images: fleetImages('economy-sedan.webp', 'economy-sedan', 'Sedan'),
    specs: [
      { icon: 'user', text: '3 Passengers' },
      { icon: 'suitcase', text: '3 Luggage' },
      { icon: 'snowflake', text: 'Climate Control' },
      { icon: 'couch', text: 'Comfortable Seating' },
    ],
  },
  {
    id: 'luxury',
    category: 'sedan',
    imgClass: 'luxury',
    title: 'Luxury Sedan',
    badge: 'Popular',
    description:
      'Perfect for solo travelers and airport transfers, meetings, and city travel.',
    images: fleetImages('luxury-sedan.webp', 'luxury-sedan', 'Luxury Sedan'),
    specs: [
      { icon: 'user', text: '3 Passengers' },
      { icon: 'suitcase', text: '2 Luggage' },
      { icon: 'couch', text: 'Comfortable Seating' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'first-class',
    category: 'sedan',
    imgClass: 'first',
    title: 'First Class Sedan',
    description:
      'Perfect for executives, business travelers, and couples seeking a smooth, private ride.',
    images: fleetImages('first-class-sedan.webp', 'first-class-sedan', 'First Class Sedan'),
    specs: [
      { icon: 'user', text: '3 Passengers' },
      { icon: 'suitcase', text: '2 Luggage' },
      { icon: 'chair', text: 'Leather Interior' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'sprinter',
    category: 'sprinter',
    imgClass: 'sprinter',
    title: 'Sprinter Van',
    description:
      'Perfect for group travel, corporate events, parties, and long-distance trips.',
    images: fleetImages('sprinter.webp', 'sprinter', 'Sprinter Van'),
    specs: [
      { icon: 'user', text: '14 Passengers' },
      { icon: 'suitcase', text: '14 Luggage' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'chair', text: 'Leather Seating' },
    ],
  },
  {
    id: 'jet-sprinter',
    category: 'sprinter',
    imgClass: 'jet-sprinter',
    title: 'Jet Sprinter',
    description:
      'Premium sprinter with jet-style comfort for executive groups and VIP travel.',
    images: fleetImages('jet_sprinter.webp', 'jet-sprinter', 'Jet Sprinter'),
    specs: [
      { icon: 'user', text: '14 Passengers' },
      { icon: 'suitcase', text: '14 Luggage' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'chair', text: 'Leather Seating' },
    ],
  },
  {
    id: 'premium-suv',
    category: 'suv',
    imgClass: 'premium-suv',
    title: 'Premium SUV',
    description:
      'Elevated SUV comfort for executives and families who want extra space and premium amenities.',
    images: fleetImages('full-size-suv2.webp', 'premium-suv', 'Premium SUV'),
    specs: [
      { icon: 'user', text: '5 Passengers' },
      { icon: 'suitcase', text: '5 Luggage' },
      { icon: 'chair', text: 'Leather Interior' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'mini-suv',
    category: 'suv',
    imgClass: 'mini-suv',
    title: 'Mini SUV',
    badge: 'Popular',
    description:
      'Perfect for small families or groups who need comfort and space without going full-size.',
    images: fleetImages('mini_suv.webp', 'mini-suv', 'Mini SUV'),
    specs: [
      { icon: 'user', text: '4 Passengers' },
      { icon: 'suitcase', text: '4 Luggage' },
      { icon: 'expand', text: 'Extra Legroom' },
      { icon: 'snowflake', text: 'Climate Control' },
    ],
  },
  {
    id: 'motor-coach',
    category: 'buses',
    imgClass: 'motor-coach',
    title: 'Motor Coach',
    description:
      'Perfect for large-group travel, corporate events, parties, and wine tours.',
    images: fleetImages('moto-coach.webp', 'motor-coach', 'Motor Coach'),
    specs: [
      { icon: 'user', text: '30–55 Pass.' },
      { icon: 'suitcase', text: 'Larger Luggage Space' },
      { icon: 'expand', text: 'Ample Space' },
      { icon: 'restroom', text: 'Connected Washrooms' },
    ],
  },
  {
    id: 'party-bus',
    category: 'buses',
    imgClass: 'party-bus',
    title: 'Party Bus',
    description:
      'Perfect for large-group travel, corporate events, parties, and wine tours.',
    images: fleetImages('party-bus.webp', 'party-bus', 'Party Bus'),
    specs: [
      { icon: 'user', text: '24 Passengers' },
      { icon: 'suitcase', text: '20 Luggage' },
      { icon: 'users', text: 'Large Seat Capacity' },
      { icon: 'chair', text: 'Leather Seating' },
    ],
  },
  {
    id: 'limousine',
    category: 'limousine',
    imgClass: 'limo',
    title: 'Limousine',
    description:
      'Premium choice for weddings, red-carpet events, proms, and VIP nights out.',
    images: fleetImages('limo-final.webp', 'limousine', 'Limousine'),
    specs: [
      { icon: 'wine-glass', text: 'Bar Console' },
      { icon: 'lightbulb', text: 'Lighting Cabin' },
      { icon: 'tv', text: 'Media Controls' },
      { icon: 'grip-lines-vertical', text: 'Privacy Divider' },
    ],
  },
  {
    id: 'escalade-limo',
    category: 'limousine',
    imgClass: 'escalade-limo',
    title: 'Escalade Limo',
    description:
      'Spacious Escalade-style stretch limo for larger groups celebrating in style.',
    images: fleetImages('esclade_limo.webp', 'escalade-limo', 'Escalade Limo'),
    specs: [
      { icon: 'user', text: '17 Passengers' },
      { icon: 'wine-glass', text: 'Bar Console' },
      { icon: 'lightbulb', text: 'Lighting Cabin' },
      { icon: 'tv', text: 'Media Controls' },
    ],
  },
]
