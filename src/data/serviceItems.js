/** @typedef {{ id: string, title: string, description: string }} ServiceItemDef */
/** @typedef {{ id: string, title: string, description: string, imageClass: string }} ServiceItem */

/** @type {ServiceItemDef[]} */
const SERVICE_ITEM_DEFS = [
  {
    id: 'christmas',
    title: 'Christmas Car Service',
    description:
      'Enjoy premium holiday transportation with professional chauffeurs ensuring comfort, safety, and reliable group travel for festive events, family gatherings, and seasonal celebrations.',
  },
  {
    id: 'prom',
    title: 'Prom & Parties Transfers',
    description:
      'Make prom and parties unforgettable with luxury vehicles, professional chauffeurs, and safe, premium rides ensuring a night full of memories.',
  },
  {
    id: 'cruise',
    title: 'Pier & Cruise Transfers',
    description:
      'Begin your cruise travel stress-free with timely, comfortable port transfers provided by professional, courteous chauffeurs ensuring smooth travel.',
  },
  {
    id: 'events',
    title: 'Events & Entertainment Service',
    description:
      'Premium car service for concerts, events, or shows with chauffeurs delivering luxury, safety, and reliable group travel every time.',
  },
  {
    id: 'night-out',
    title: 'Night Out Service',
    description:
      'Enjoy complete flexibility with night out chauffeur service ensuring safety, comfort, and premium luxury throughout your entire night.',
  },
  {
    id: 'new-year',
    title: 'New Year Car Service',
    description:
      'Begin your New Year celebrations stress-free with our luxury chauffeured rides offering comfort, punctuality, and smooth travel to every destination.',
  },
]

/** @param {number} index */
function serviceImageClass(imagePrefix, index) {
  const n = index + 1
  return imagePrefix ? `${imagePrefix}-s${n}` : `s${n}`
}

/**
 * Landing-page service carousel items. Pass a CSS prefix matching `.service-img.{prefix}-sN` rules.
 * Connecticut uses an empty prefix (`s1`, `s2`, …); other pages use values like `fl`, `ny`, `op-boston-car-service`.
 *
 * @param {string} [imagePrefix]
 * @returns {ServiceItem[]}
 */
export function buildServiceItems(imagePrefix = '') {
  return SERVICE_ITEM_DEFS.map((item, index) => ({
    ...item,
    imageClass: serviceImageClass(imagePrefix, index),
  }))
}
