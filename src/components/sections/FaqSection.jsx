import { useEffect, useRef } from 'react'
import faqImage from '../../assets/faq/faqImage.js'
import { HOME_FAQ_ITEMS, LANDING_FAQ_ITEMS } from '../../data/faqItems.js'
import { gsap } from '../../utils/gsap.js'

const ANSWER_PAD_Y = 18

/** @param {{ variant?: 'landing' | 'home' }} props */
export default function FaqSection({ variant = 'landing' }) {
  const sectionRef = useRef(null)
  const items = variant === 'home' ? HOME_FAQ_ITEMS : LANDING_FAQ_ITEMS
  const sectionClass =
    variant === 'home' ? 'faq-section home-faq-section' : 'faq-section'

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const itemsEls = gsap.utils.toArray('.faq-item', section)
    const title = section.querySelector('.faq-title-heading')
    const image = section.querySelector('.faq-image')
    const listeners = []

    const ctx = gsap.context(() => {
      itemsEls.forEach((details) => {
        const answer = details.querySelector('.faq-answer')
        if (!answer) return
        if (details.open) {
          gsap.set(answer, {
            height: 'auto',
            opacity: 1,
            overflow: 'hidden',
            paddingTop: ANSWER_PAD_Y,
            paddingBottom: ANSWER_PAD_Y,
          })
        } else {
          gsap.set(answer, {
            height: 0,
            opacity: 0,
            overflow: 'hidden',
            paddingTop: 0,
            paddingBottom: 0,
          })
        }
      })

      if (!reduceMotion) {
        const intro = [title, ...itemsEls, image].filter(Boolean)
        gsap.set(intro, { opacity: 0, y: 28 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        })

        if (title) {
          tl.to(title, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, 0)
        }
        tl.to(
          itemsEls,
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
          0.12,
        )
        if (image) {
          tl.to(image, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0.2)
        }
      }

      itemsEls.forEach((details) => {
        const summary = details.querySelector('summary')
        const answer = details.querySelector('.faq-answer')
        if (!summary || !answer) return

        const onClick = (event) => {
          event.preventDefault()
          const closing = details.open

          if (reduceMotion) {
            details.open = !closing
            gsap.set(answer, {
              height: closing ? 0 : 'auto',
              opacity: closing ? 0 : 1,
              paddingTop: closing ? 0 : ANSWER_PAD_Y,
              paddingBottom: closing ? 0 : ANSWER_PAD_Y,
            })
            return
          }

          if (closing) {
            gsap.to(answer, {
              height: 0,
              opacity: 0,
              paddingTop: 0,
              paddingBottom: 0,
              duration: 0.32,
              ease: 'power2.inOut',
              onComplete: () => {
                details.open = false
              },
            })
            return
          }

          details.open = true
          gsap.fromTo(
            answer,
            { height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 },
            {
              height: 'auto',
              opacity: 1,
              paddingTop: ANSWER_PAD_Y,
              paddingBottom: ANSWER_PAD_Y,
              duration: 0.4,
              ease: 'power2.out',
            },
          )
        }

        summary.addEventListener('click', onClick)
        listeners.push([summary, onClick])
      })
    }, section)

    return () => {
      listeners.forEach(([el, handler]) => el.removeEventListener('click', handler))
      ctx.revert()
    }
  }, [variant])

  return (
    <section ref={sectionRef} className={sectionClass}>
      <div className="container">
        <h2 className="section-title faq-title-heading">FAQs</h2>
        <div className="faq-grid">
          <div className="faq-list">
            {items.map((item) => (
              <details
                key={item.question}
                className="faq-item"
                open={item.open ?? false}
              >
                <summary>{item.question}</summary>
                <div className="faq-answer">{item.answer}</div>
              </details>
            ))}
          </div>
          <img
            src={faqImage}
            alt=""
            className="faq-image"
            width={560}
            height={580}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>
      </div>
    </section>
  )
}
