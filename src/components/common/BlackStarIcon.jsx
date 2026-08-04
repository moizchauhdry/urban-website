import Icon from '../icons/Icon.jsx'

/** Filled star icon for review ratings (replaces heavy PNG). */
export default function BlackStarIcon({ size = 14, className = '' }) {
  return <Icon name="star" size={size} className={className} color="#111111" />
}
