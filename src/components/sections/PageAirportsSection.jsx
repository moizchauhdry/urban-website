import PageAirportCard from './PageAirportCard.jsx'
import { usePageSwapAnimation } from '../../hooks/usePageSwapAnimation.js'

const DEFAULT_SUBTITLE =
  'Whether you\'re catching an early flight or arriving after a long journey, our airport transportation ensures a smooth and reliable ride. Travel in comfort with professional chauffeurs, punctual pickups, and luxury vehicles tailored for business travelers, families, and frequent flyers.'

const SHORT_SUBTITLE =
  'Whether you\'re catching an early flight or arriving after a long journey, our airport transportation ensures a smooth and reliable ride with professional chauffeurs and luxury vehicles.'

/**
 * @param {{
 *   airports: Array<{ code: string, imageClass: string }>,
 *   subtitle?: string,
 *   variant?: 'default' | 'short',
 *   pageKey?: string,
 * }} props
 */
export default function PageAirportsSection({
  airports,
  subtitle,
  variant = 'default',
  pageKey,
}) {
  const swapKey = pageKey || airports.map((item) => item.code).join(',')
  const swap = usePageSwapAnimation(swapKey)
  const resolvedSubtitle =
    subtitle ?? (variant === 'short' ? SHORT_SUBTITLE : DEFAULT_SUBTITLE)

  return (
    <section className={swap ? 'airports page-swap' : 'airports'}>
      <div key={swapKey} className="container">
        <h2 className="section-title">Top Airports</h2>
        <p className="section-sub">{resolvedSubtitle}</p>
        <div className="airports-grid">
          {airports.map(({ code, imageClass }) => (
            <PageAirportCard key={code} code={code} imageClass={imageClass} />
          ))}
        </div>
      </div>
    </section>
  )
}
