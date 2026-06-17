import brandLogo from '../../assets/logo.svg'

const LOGO_ALT = 'Urban Elite Limo'

/** Header logo — 104×38 native artboard, rendered dark on white bar. */
export function HeaderBrandLogo(props) {
  return (
    <img
      src={brandLogo}
      alt={LOGO_ALT}
      className="logo-img logo-img--header brand-logo brand-logo--header"
      width={104}
      height={38}
      decoding="async"
      {...props}
    />
  )
}

/** Footer logo — scaled up on the same 104:38 aspect ratio for dark footer band. */
export function FooterBrandLogo(props) {
  return (
    <img
      src={brandLogo}
      alt={LOGO_ALT}
      className="logo-img logo-img--footer brand-logo brand-logo--footer"
      width={142}
      height={52}
      decoding="async"
      {...props}
    />
  )
}
