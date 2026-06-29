import { airportCardBackgroundStyle, hasCentralAirportImage } from '../../constants/airportImages.js'

/**
 * @param {{ code: string, imageClass: string }} props
 */
export default function PageAirportCard({ code, imageClass }) {
  const useCentralImage = hasCentralAirportImage(code)
  const style = useCentralImage ? airportCardBackgroundStyle(code) : undefined
  const className = useCentralImage ? 'airport-card' : `airport-card ${imageClass}`

  return (
    <div className={className} style={style}>
      <div className="airport-card-body">
        <h3>{code}</h3>
        <p>Airport</p>
      </div>
    </div>
  )
}
