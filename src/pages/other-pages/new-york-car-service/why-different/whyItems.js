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
    icon: 'car',
    title: 'Latest Fleet Models',
    description:
      'Complete protection with comprehensive insurance coverage for all our vehicles.',
  },
  {
    id: 'availability',
    icon: 'clock',
    title: '24/7 Availability',
    description:
      'Round-the-clock service with flexible pickup and drop-off times.',
  },
  {
    id: 'pickups',
    icon: 'location-dot',
    title: 'On Time Pickups',
    description:
      'Convenient pickup service on time across major cities and airports.',
  },
  {
    id: 'support',
    icon: 'headset',
    title: 'Customer Support',
    description:
      'Dedicated support team ready to assist you throughout your journey.',
  },
  {
    id: 'chauffeurs',
    icon: 'id-badge',
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
