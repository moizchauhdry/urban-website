import {
  BEAUTIFUL_GAME_BG_DEFAULT,
  BEAUTIFUL_GAME_BG_HEIGHT,
  BEAUTIFUL_GAME_BG_SIZES,
  BEAUTIFUL_GAME_BG_SRCSET,
  BEAUTIFUL_GAME_BG_WIDTH,
} from './beautifulGameBg.js'

/** Full-width stadium banner — "The Beautiful Game". */
export default function BeautifulGameSection() {
  return (
    <section className="section fifa-beautiful-game scroll-reveal-section" aria-labelledby="fifa-beautiful-game-title">
      <img
        src={BEAUTIFUL_GAME_BG_DEFAULT}
        srcSet={BEAUTIFUL_GAME_BG_SRCSET}
        sizes={BEAUTIFUL_GAME_BG_SIZES}
        alt=""
        className="fifa-beautiful-game__bg"
        width={BEAUTIFUL_GAME_BG_WIDTH}
        height={BEAUTIFUL_GAME_BG_HEIGHT}
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <div className="fifa-beautiful-game__overlay" aria-hidden="true" />
      <div className="container fifa-beautiful-game__content">
        <span className="fifa-beautiful-game__tag">The Beautiful Game</span>
        <h2 id="fifa-beautiful-game-title" className="fifa-beautiful-game__title">
          Experience The World&apos;s Greatest Football Event In Ultimate Style
        </h2>
        <p className="fifa-beautiful-game__sub">
          80,000 Fans. Three Countries. One Unforgettable Ride. Arrive In Every Match With Confidence, Luxury, And
          Zero Stress.
        </p>
      </div>
    </section>
  )
}
