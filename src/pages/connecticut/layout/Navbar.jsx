import NavMenuItems from '../../../components/nav/NavMenuItems.jsx'

/**
 * Desktop / tablet horizontal navigation (unchanged layout for &gt;720px).
 */
export default function Navbar() {
  return (
    <nav className="menu" aria-label="Primary">
      <NavMenuItems variant="desktop" />
    </nav>
  )
}
