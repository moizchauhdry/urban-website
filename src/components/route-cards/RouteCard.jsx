import Icon from '../common/Icon.jsx'
import routeCardImage from '../../assets/connecticut/content-blocks/car-service3.webp'
import QuoteLink from '../layout/QuoteLink.jsx'

/**
 * @param {{
 *   layout: 'image-left' | 'image-right',
 *   railLabel: string,
 *   title: string,
 *   description: string,
 *   description2: string,
 *   imageSrc?: string,
 *   buttonVariant?: 'dark' | 'accent',
 * }} props
 */
export default function RouteCard({
  layout,
  railLabel,
  title,
  description,
  description2,
  imageSrc,
  buttonVariant = 'accent',
}) {
  const layoutClass =
    layout === 'image-right' ? 'route-card--image-right' : 'route-card--image-left'
  const image = imageSrc || routeCardImage

  return (
    <article className={`route-card ${layoutClass}`}>
      <div className="route-card__media">
        <div
          className="route-card__img"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-hidden="true"
        />
      </div>

      <div className="route-card__body">
        <h2 className="route-card__title">{title}</h2>
        <div className="route-card__accent" aria-hidden="true" />
        <p className="route-card__desc">{description}</p>
        <p className="route-card__desc">{description2}</p>
        <QuoteLink className={`route-card__btn route-card__btn--${buttonVariant}`}>
          Get a free quote
          <Icon name="arrow-right" size={16} />
        </QuoteLink>
      </div>

      <div className="route-card__rail" aria-hidden="true">
        <span className="route-card__rail-text">{railLabel}</span>
      </div>
    </article>
  )
}
