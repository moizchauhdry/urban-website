/** @typedef {'sedan' | 'suv' | 'sprinter' | 'limousine' | 'buses'} FleetCategoryId */

/** @type {Array<{ id: FleetCategoryId, label: string }>} */
export const FLEET_CATEGORIES = [
  { id: 'sedan', label: 'Sedan' },
  { id: 'suv', label: 'SUV' },
  { id: 'sprinter', label: 'Sprinter Van' },
  { id: 'limousine', label: 'Limousine' },
  { id: 'buses', label: 'Buses' },
]

/** @param {Array<{ category?: FleetCategoryId }>} items @param {FleetCategoryId} categoryId */
export function filterFleetByCategory(items, categoryId) {
  return items.filter((item) => item.category === categoryId)
}
