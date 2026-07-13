import { HERO_MOBILE_BENEFITS } from '../../constants/heroMobileBenefits.js'

/** Inline check mark — avoids pulling the full lucide Icon registry on the hero path. */
function CheckIcon() {
  return (
    <svg
      className="icon hero-mobile-benefits__tick"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export default function HeroMobileBenefits() {
  return (
    <ul className="hero-mobile-benefits" aria-label="Service benefits">
      {HERO_MOBILE_BENEFITS.map((item) => (
        <li key={item}>
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
