const WEBP_AIRPORTS = import.meta.glob('../assets/airports/*.webp', {
  eager: true,
  import: 'default',
})

const JPG_AIRPORTS = import.meta.glob('../assets/airports/*.{jpg,jpeg}', {
  eager: true,
  import: 'default',
})

/** @type {Set<string>} */
export const CENTRAL_AIRPORT_CODES = new Set()

/** @type {Record<string, string>} */
const AIRPORT_IMAGE_BY_CODE = {}

/** @param {string} path */
function codeFromPath(path) {
  return path.split('/').pop().replace(/\.(webp|jpe?g)$/i, '').toLowerCase()
}

/** Prefer .webp over .jpg when both exist for the same code. */
for (const [path, url] of Object.entries(JPG_AIRPORTS)) {
  const code = codeFromPath(path)
  AIRPORT_IMAGE_BY_CODE[code] = url
  CENTRAL_AIRPORT_CODES.add(code)
}

for (const [path, url] of Object.entries(WEBP_AIRPORTS)) {
  const code = codeFromPath(path)
  AIRPORT_IMAGE_BY_CODE[code] = url
  CENTRAL_AIRPORT_CODES.add(code)
}

/** @param {string} code IATA airport code, e.g. "BDL" */
export function getAirportImage(code) {
  return AIRPORT_IMAGE_BY_CODE[code?.trim().toLowerCase()] ?? null
}

/** @param {string} code IATA airport code */
export function hasCentralAirportImage(code) {
  return CENTRAL_AIRPORT_CODES.has(code?.trim().toLowerCase())
}

/** @param {string} code IATA airport code */
export function airportCardBackgroundStyle(code) {
  const image = getAirportImage(code)
  if (!image) return undefined
  return {
    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.2), rgba(0,0,0,.6)), url(${image})`,
  }
}
