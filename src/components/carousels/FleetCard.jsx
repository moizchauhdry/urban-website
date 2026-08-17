import { memo, useEffect, useState } from 'react'
import { FleetImageSlider } from './FleetImageSlider.jsx'
import QuoteLink from '../layout/QuoteLink.jsx'

function FleetCardImage({ image, title, priorityLoad }) {
  const [src, setSrc] = useState(image?.src ?? null)

  useEffect(() => {
    if (image?.src) {
      setSrc(image.src)
      return undefined
    }
    if (!image?.loadSrc) return undefined
    let cancelled = false
    image.loadSrc().then((mod) => {
      if (!cancelled) setSrc(mod.default)
    })
    return () => {
      cancelled = true
    }
  }, [image])

  if (!src) {
    return (
      <span
        className="fleet-slider-skeleton absolute inset-0 z-0 animate-pulse bg-neutral-200"
        aria-hidden="true"
      />
    )
  }

  return (
    <img
      src={src}
      alt={image?.alt ?? title}
      width={800}
      height={640}
      sizes="(max-width: 720px) 100vw, 360px"
      loading={priorityLoad ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
    />
  )
}

function FleetCardInner({ item, priorityLoad = true }) {
  const primaryImage = item.images[0]
  const useSlider = item.images.length > 1

  return (
    <article className="fleet-card">
      <div className={`fleet-img ${item.imgClass}${useSlider ? ' fleet-img--with-slider' : ''}`}>
        {useSlider ? (
          <FleetImageSlider images={item.images} priorityLoad={priorityLoad} />
        ) : (
          <FleetCardImage image={primaryImage} title={item.title} priorityLoad={priorityLoad} />
        )}
      </div>

      <div className="fleet-body">
        <h3 className="fleet-card-title">
          {item.title}
          {item.badge ? (
            <span className="fleet-badge">{item.badge}</span>
          ) : null}
        </h3>
        <p>{item.description}</p>
        <div className="fleet-specs">
          {item.specs.map((s) => (
            <div className="spec" key={s.text}>
              <span className="spec-dot" aria-hidden="true" />
              {s.text}
            </div>
          ))}
        </div>
        <QuoteLink className="btn-quote">Get A Quote</QuoteLink>
      </div>
    </article>
  )
}

export const FleetCard = memo(FleetCardInner)
