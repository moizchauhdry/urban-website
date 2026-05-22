import { useEffect } from 'react'

/**
 * Ports the original `assets/js/main.js` behavior into React with proper cleanup.
 * Some effects only apply on the home route (`/`).
 */
export function useUrbanEliteInteractions(isHome) {
  useEffect(() => {
    const cleanups = []

    // 1. Tab switching for booking form
    const tabs = document.querySelectorAll('.form-tab')
    const onTabClick = (tab) => () => {
      document.querySelectorAll('.form-tab').forEach((t) => t.classList.remove('active'))
      tab.classList.add('active')
    }
    const tabHandlers = []
    tabs.forEach((tab) => {
      const h = onTabClick(tab)
      tabHandlers.push([tab, h])
      tab.addEventListener('click', h)
    })
    cleanups.push(() => {
      tabHandlers.forEach(([tab, h]) => tab.removeEventListener('click', h))
    })

    // 2. Auto-tag elements for scroll reveal
    const revealMap = [
      ['.center-tag', 'reveal'],
      ['.section-title', 'reveal'],
      ['.section-sub', 'reveal d1'],
      ['.fleet-card', 'reveal scale'],
      ['.why-card', 'reveal'],
      ['.service-card', 'reveal scale'],
      ['.reviews-rating', 'reveal d1'],
      ['.review-card', 'reveal'],
      ['.review-aside', 'reveal d1'],
      ['.trusted-stat', 'reveal scale'],
      ['.step', 'reveal'],
      ['.airport-card', 'reveal scale'],
      ['.faq-item', 'reveal'],
      ['.faq-image', 'reveal d1'],
      ['.planning h2', 'reveal'],
      ['.planning p', 'reveal d1'],
      ['.planning .btn-yellow', 'reveal d2'],
      ['.journey h2', 'reveal'],
      ['.journey p', 'reveal d1'],
      ['.journey .btn-yellow', 'reveal d2'],
      ['.trusted h2', 'reveal'],
      ['.trusted-inner > p', 'reveal d1'],
      ['.how-works-cta', 'reveal d2'],
    ]
    const noStaggerSelectors = new Set([
      '.fleet-card',
      '.why-card',
      '.service-card',
      '.review-card',
      '.trusted-stat',
      '.airport-card',
      '.faq-item',
      '.step',
    ])
    revealMap.forEach(([sel, cls]) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        cls.split(' ').forEach((c) => el.classList.add(c))
        if (noStaggerSelectors.has(sel)) return
        const siblingIdx = i % 6
        if (siblingIdx > 0) el.classList.add('d' + Math.min(siblingIdx, 5))
      })
    })

    document.querySelectorAll('.content-block').forEach((block) => {
      const cols = block.children
      if (cols[0]) cols[0].classList.add('reveal')
      if (cols[1]) cols[1].classList.add('reveal', 'd1')
    })

    // 3. IntersectionObserver — trigger reveals
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    cleanups.push(() => io.disconnect())

    // Trusted stats counter moved to TrustedStats.jsx (React state) — imperative DOM updates fought React and stuck on "0".

    // 4. Booking card tilt (desktop home)
    const bookingTimers = []
    const bookingUnsubs = []
    if (isHome) {
      const bookingCard = document.querySelector('.booking-card')
      if (bookingCard && window.matchMedia('(min-width: 1025px)').matches) {
        const t = window.setTimeout(() => {
          bookingCard.classList.add('tilt-active')
          let rafId
          const onMove = (e) => {
            cancelAnimationFrame(rafId)
            rafId = requestAnimationFrame(() => {
              const rect = bookingCard.getBoundingClientRect()
              const x = (e.clientX - rect.left) / rect.width - 0.5
              const y = (e.clientY - rect.top) / rect.height - 0.5
              bookingCard.style.transform = `perspective(1200px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translate3d(0,0,0)`
            })
          }
          const onLeave = () => {
            cancelAnimationFrame(rafId)
            bookingCard.style.transform = ''
          }
          bookingCard.addEventListener('mousemove', onMove)
          bookingCard.addEventListener('mouseleave', onLeave)
          bookingUnsubs.push(() => bookingCard.removeEventListener('mousemove', onMove))
          bookingUnsubs.push(() => bookingCard.removeEventListener('mouseleave', onLeave))
        }, 1700)
        bookingTimers.push(t)
      }
    }
    cleanups.push(() => {
      bookingTimers.forEach((id) => window.clearTimeout(id))
      bookingUnsubs.forEach((fn) => fn())
    })

    // 5. Hero parallax + sticky header (home hero only; header scroll always)
    const hero = document.querySelector('.hero')
    let heroTicking = false
    const onScroll = () => {
      if (!heroTicking) {
        window.requestAnimationFrame(() => {
          const sc = window.pageYOffset
          if (isHome && hero && sc < 900) {
            hero.style.backgroundPosition = `center calc(50% + ${sc * 0.25}px)`
          }
          const header = document.querySelector('header')
          if (header) header.classList.toggle('scrolled', sc > 30)
          heroTicking = false
        })
        heroTicking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    cleanups.push(() => window.removeEventListener('scroll', onScroll))

    // 6. Card tilt (home)
    const cardCleanups = []
    if (isHome) {
      function attachCardTilt(selector, max = 6) {
        if (!window.matchMedia('(min-width: 1025px)').matches) return
        document.querySelectorAll(selector).forEach((card) => {
          let rafId
          const onMove = (e) => {
            cancelAnimationFrame(rafId)
            rafId = requestAnimationFrame(() => {
              const rect = card.getBoundingClientRect()
              const x = (e.clientX - rect.left) / rect.width - 0.5
              const y = (e.clientY - rect.top) / rect.height - 0.5
              card.style.transform = `perspective(1100px) translate3d(0,-12px,0) rotateY(${x * max}deg) rotateX(${-y * max}deg)`
            })
          }
          const onLeave = () => {
            cancelAnimationFrame(rafId)
            card.style.transform = ''
          }
          card.addEventListener('mousemove', onMove)
          card.addEventListener('mouseleave', onLeave)
          cardCleanups.push(() => {
            card.removeEventListener('mousemove', onMove)
            card.removeEventListener('mouseleave', onLeave)
          })
        })
      }
      attachCardTilt('.fleet-card', 5)
      attachCardTilt('.service-card', 4)
      attachCardTilt('.airport-card', 6)
    }
    cleanups.push(() => cardCleanups.forEach((fn) => fn()))

    return () => {
      cleanups.forEach((fn) => fn())
    }
  }, [isHome])
}
