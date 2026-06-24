import phoneIcon from '../../assets/connecticut/hero/phone-icon.png'

const DEFAULT_PHONE = {
  href: 'tel:8888816610',
  label: '(888) 881-6610',
  icon: phoneIcon,
}

export default function HeaderNavPhone({ phone = DEFAULT_PHONE }) {
  return (
    <a href={phone.href} className="nav-phone">
      <img
        src={phone.icon}
        alt=""
        className="nav-phone-icon"
        width={16}
        height={16}
        decoding="async"
        draggable={false}
      />
      <span className="nav-phone-label">{phone.label}</span>
    </a>
  )
}
