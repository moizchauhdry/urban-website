import Icon from '../../../components/common/Icon.jsx'
import BookNowLink from '../../../components/layout/BookNowLink.jsx'
import { MATCH_DAY_EXPERIENCE_ITEMS } from './matchDayExperienceItems.js'

/** Dark match-day services banner with icon row + CTA. */
export default function MatchDayExperienceSection() {
  return (
    <section className="section fifa-match-day-experience scroll-reveal-section">
      <div className="container">
        <div className="fifa-match-day-experience__head">
          <span className="fifa-match-day-experience__tag">The FIFA Experience</span>
          <h2 className="fifa-match-day-experience__title">Premium Match-Day Services</h2>
          <p className="fifa-match-day-experience__sub">
            Everything you need for a seamless FIFA 2026 experience from touchdown to final whistle.
          </p>
        </div>

        <ul className="fifa-match-day-experience__grid" aria-label="Match-day services">
          {MATCH_DAY_EXPERIENCE_ITEMS.map(({ id, icon, title, description }) => (
            <li className="fifa-match-day-experience__item" key={id}>
              <span className="fifa-match-day-experience__icon" aria-hidden="true">
                <Icon name={icon} size={22} />
              </span>
              <h3 className="fifa-match-day-experience__item-title">{title}</h3>
              <p className="fifa-match-day-experience__item-desc">{description}</p>
            </li>
          ))}
        </ul>

        <div className="fifa-match-day-experience__cta">
          <BookNowLink className="fifa-match-day-experience__btn">Plan My Match Day</BookNowLink>
        </div>
      </div>
    </section>
  )
}
