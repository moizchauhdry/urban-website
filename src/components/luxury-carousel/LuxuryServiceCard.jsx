import Icon from '../common/Icon.jsx'
import QuoteLink from '../layout/QuoteLink.jsx'

/**
 * @param {{
 *   railLabel: string,
 *   title: string,
 *   description: import('react').ReactNode,
 *   description2?: import('react').ReactNode,
 *   listItems?: string[],
 *   imageSrc: string,
 *   phase?: 'idle' | 'enter' | 'exit' | 'stack',
 *   style?: import('react').CSSProperties,
 *   showQuoteButton?: boolean,
 * }} props
 */
export default function LuxuryServiceCard({
  railLabel,
  title,
  description,
  description2,
  listItems,
  imageSrc,
  phase = 'idle',
  style,
  showQuoteButton = true,
}) {
  return (
    <article
      className={`luxury-carousel__card route-card route-card--image-right luxury-carousel__card--${phase}`}
      style={style}
    >
      <div className="route-card__media luxury-carousel__media">
        <div
          className="route-card__img luxury-carousel__img"
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="img"
          aria-label=""
        />
      </div>

      <div className="route-card__body luxury-carousel__body">
        <h2 className="route-card__title luxury-carousel__title">{title}</h2>
        <div className="luxury-carousel__accent" aria-hidden="true" />
        <p className="route-card__desc luxury-carousel__desc">{description}</p>
        {listItems?.length ? (
          <ul className="route-card__list luxury-carousel__list">
            {listItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {description2 ? <p className="route-card__desc luxury-carousel__desc">{description2}</p> : null}
        {showQuoteButton ? (
          <QuoteLink className="luxury-carousel__btn">
            Get a free quote
            <Icon name="arrow-right" size={16} />
          </QuoteLink>
        ) : null}
      </div>

      <div className="route-card__rail luxury-carousel__rail" aria-hidden="true">
        <span className="route-card__rail-text">{railLabel}</span>
      </div>
    </article>
  )
}
