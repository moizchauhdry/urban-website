import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/common/Icon.jsx'
import { resolveBookingHome } from '../../config/bookingNav.js'

const PHONE = '(888) 881-6610'
const PHONE_HREF = 'tel:8888816610'
const EMAIL = 'info@urbanelitelimo.com'

/** Post-booking confirmation — shown after a successful hero form submit. */
export default function ThankYouPage() {
  const location = useLocation()
  const returnPath = location.state?.returnPath || resolveBookingHome(location.pathname)

  useEffect(() => {
    document.title = 'Quotation Request Received | Urban Elite Limo'
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="thank-you-page">
      <div className="container thank-you-page__inner">
        <h1 className="thank-you-page__title">Quotation Request Received</h1>
        <h2 className="thank-you-page__subtitle">Your Quotation Has Been Received Successfully!</h2>
        <p className="thank-you-page__lead">
          Thank you for reaching out! We&apos;ve received your quotation request and our team is already on it.
        </p>

        <p className="thank-you-page__estimate">Get your detailed price estimate in just 2–3 minutes</p>

        <p className="thank-you-page__note">
          A pricing estimate will be sent directly to your email. If you have any questions or additional details to
          share, feel free to call us or write to us — we&apos;re available to help you right away.
        </p>

        <div className="thank-you-page__contact">
          <a href={PHONE_HREF} className="thank-you-page__contact-link">
            <Icon name="phone" size={16} aria-hidden />
            {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`} className="thank-you-page__contact-link">
            <Icon name="envelope" size={16} aria-hidden />
            {EMAIL}
          </a>
          <Link to={returnPath} className="btn-yellow thank-you-page__cta">
            Book Ride Again
          </Link>
        </div>
      </div>
    </section>
  )
}
