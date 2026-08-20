const DEFAULT_PHONE = {
  href: 'tel:8888816610',
  label: '(888) 881-6610',
}

function PhoneGlyph() {
  return (
    <svg
      className="icon nav-phone-icon"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  )
}

export default function HeaderNavPhone({ phone = DEFAULT_PHONE }) {
  return (
    <a href={phone.href} className="nav-phone">
      <PhoneGlyph />
      <span className="nav-phone-label">{phone.label}</span>
    </a>
  )
}
