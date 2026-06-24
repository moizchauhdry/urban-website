import Icon from '../common/Icon.jsx'
import { HERO_MOBILE_BENEFITS } from '../../constants/heroMobileBenefits.js'

export default function HeroMobileBenefits() {
  return (
    <ul className="hero-mobile-benefits" aria-label="Service benefits">
      {HERO_MOBILE_BENEFITS.map((item) => (
        <li key={item}>
          <Icon
            name="check"
            size={16}
            strokeWidth={2.75}
            className="hero-mobile-benefits__tick"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
