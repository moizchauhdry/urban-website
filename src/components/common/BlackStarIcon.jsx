import blackStar from '../../assets/icons/black_star.png'

export default function BlackStarIcon({ size = 14, className = '' }) {
  return (
    <img
      src={blackStar}
      alt=""
      className={className}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  )
}
