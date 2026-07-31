import Icon from '../icons/Icon.jsx'

const DEFAULT_PHONE = {
  href: 'tel:8888816610',
  label: '(888) 881-6610',
  icon: 'phone',
}

export default function HeaderNavPhone({ phone = DEFAULT_PHONE }) {
  return (
    <a href={phone.href} className="nav-phone">
      <Icon name={phone.icon} size={16} className="nav-phone-icon" />
      <span className="nav-phone-label">{phone.label}</span>
    </a>
  )
}
