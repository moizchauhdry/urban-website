import { getPageAirportItems, getPageAirportVariant } from '../../constants/pageAirports.js'
import PageAirportsSection from './PageAirportsSection.jsx'

/**
 * @param {{ pageKey: string, subtitle?: string, variant?: 'default' | 'short' }} props
 */
export default function RegionalAirportsSection({ pageKey, subtitle, variant }) {
  const airports = getPageAirportItems(pageKey)
  const resolvedVariant = variant ?? getPageAirportVariant(pageKey)

  return (
    <PageAirportsSection
      airports={airports}
      subtitle={subtitle}
      variant={resolvedVariant}
    />
  )
}
