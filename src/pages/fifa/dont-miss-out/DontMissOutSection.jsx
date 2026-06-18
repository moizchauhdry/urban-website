import Icon from '../../../components/common/Icon.jsx'
import BookNowLink from '../../../components/layout/BookNowLink.jsx'
import { FIFA_HERO_FEATURES } from '../hero/heroHighlights.js'

const PHONE_HREF = 'tel:8888816610'
const WHATSAPP_HREF = 'https://wa.me/18888816610'

/** Final CTA banner — rides filling fast. */
export default function DontMissOutSection() {
  return (
    <section className="section fifa-dont-miss-out scroll-reveal-section" aria-labelledby="fifa-dont-miss-out-title">
      <div className="container">
        <span className="fifa-dont-miss-out__tag">Don&apos;t Miss Out</span>
        <h2 id="fifa-dont-miss-out-title" className="fifa-dont-miss-out__title">
          Rides Are Filling Fast Secure Yours Now
        </h2>
        <p className="fifa-dont-miss-out__sub">
          Match-Day Slots Are Limited. Book Early For Guaranteed Availability And The Best Rates.
        </p>

        <div className="fifa-dont-miss-out__actions">
          <BookNowLink className="fifa-dont-miss-out__btn">Get a Quote</BookNowLink>
          <a
            href={WHATSAPP_HREF}
            className="fifa-dont-miss-out__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whats App
          </a>
          <a href={PHONE_HREF} className="fifa-dont-miss-out__btn">
            Call Us Now
          </a>
        </div>

        <ul className="fifa-dont-miss-out__features" aria-label="Service highlights">
          {FIFA_HERO_FEATURES.map((feat) => (
            <li className="fifa-dont-miss-out__feature" key={feat.label}>
              <span className="fifa-dont-miss-out__feature-icon" aria-hidden="true">
                {feat.icon === 'dollar' ? (
                  <span className="fifa-dont-miss-out__feature-dollar">$</span>
                ) : (
                  <Icon name={feat.icon} size={14} />
                )}
              </span>
              {feat.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
