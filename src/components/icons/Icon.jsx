import { ICON_MAP } from './iconMap.js'

/**
 * @param {{
 *   name: import('./iconMap.js').IconName | string,
 *   size?: number,
 *   color?: string,
 *   className?: string,
 *   filled?: boolean,
 *   strokeWidth?: number,
 * }} props
 */
export default function Icon({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
  filled = false,
  strokeWidth = 1.75,
  ...rest
}) {
  const LucideIcon = ICON_MAP[name]

  if (!LucideIcon) {
    if (import.meta.env.DEV) {
      console.warn(`[Icon] Unknown icon name: "${name}"`)
    }
    return null
  }

  const svgClass = className ? `icon ${className}` : 'icon'
  const useFill = filled || name === 'star'

  return (
    <LucideIcon
      size={size}
      color={color}
      className={svgClass}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      {...(useFill
        ? { fill: color, stroke: color }
        : {})}
      {...rest}
    />
  )
}
