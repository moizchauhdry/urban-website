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

    // Scroll reveal → useScrollReveal() in MainLayout (handles lazy-loaded sections)

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
            const heroBg = hero.querySelector('.hero-bg-img')
            if (heroBg) {
              heroBg.style.objectPosition = `center calc(50% + ${sc * 0.25}px)`
            }
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
