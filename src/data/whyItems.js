/**
 * @typedef {'icon' | 'clean-fleet'} WhyIconKind
 * @typedef {{
 *   id: string
 *   icon: WhyIconKind | string
 *   title: string
 *   description: string
 * }} WhyItem
 */

/** @type {WhyItem[]} */
export const whyItems = [
  {
    id: 'fleet-models',
    icon: 'fa-solid fa-car',
    title: 'Latest Fleet Models',
    description:
      'Complete protection with comprehensive insurance coverage for all our vehicles.',
  },
  {
    id: 'availability',
    icon: 'fa-solid fa-clock',
    title: '24/7 Availability',
    description:
      'Round-the-clock service with flexible pickup and drop-off times.',
  },
  {
    id: 'pickups',
    icon: 'fa-solid fa-location-dot',
    title: 'on time pickups',
    description:
      'Convenient pickup service on time across major cities and airports.',
  },
  {
    id: 'support',
    icon: 'fa-solid fa-headset',
    title: 'Customer Support',
    description:
      'Dedicated support team ready to assist you throughout your journey.',
  },
  {
    id: 'chauffeurs',
    icon: 'fa-solid fa-id-badge',
    title: 'Licensed Chauffeurs',
    description: 'Fully Licensed and Professional Chauffeurs for Ride Coverage',
  },
  {
    id: 'clean-fleet',
    icon: 'clean-fleet',
    title: 'Luxury Clean Fleet',
    description:
      'Well-maintained vehicles from top brands, regularly serviced and cleaned.',
  },
]
