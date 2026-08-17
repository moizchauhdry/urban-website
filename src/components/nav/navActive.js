/** Shared NavLink class helpers for primary + nested nav active states. */

export function desktopMenuLinkClass({ isActive }) {
  return isActive ? 'menu-link menu-link--active' : 'menu-link'
}

export function desktopSubmenuLinkClass({ isActive }) {
  return isActive ? 'menu-link--active' : undefined
}

export function mobileMenuLinkClass({ isActive }) {
  return `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
}

export function mobileSubmenuLinkClass({ isActive }) {
  return `mobile-menu__sublink${isActive ? ' mobile-menu__link--active' : ''}`
}
