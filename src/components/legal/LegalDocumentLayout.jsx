import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/**
 * Sticky document-tabs layout for Privacy Policy and Terms of Service.
 * @param {{
 *   title: string
 *   navItems: import('../../data/legalNav.js').LegalNavItem[]
 *   children: import('react').ReactNode
 * }} props
 */
export default function LegalDocumentLayout({ title, navItems, children }) {
  const bodyRef = useRef(null)
  const [activeId, setActiveId] = useState(navItems[0]?.id ?? '')
  const [mobileOpen, setMobileOpen] = useState(false)

  const flatIds = useMemo(() => {
    const ids = []
    navItems.forEach((item) => {
      ids.push(item.id)
      item.children?.forEach((child) => ids.push(child.id))
    })
    return ids
  }, [navItems])

  const activeLabel = useMemo(() => {
    for (const item of navItems) {
      if (item.id === activeId) return item.label
      const child = item.children?.find((c) => c.id === activeId)
      if (child) return child.label
    }
    return title
  }, [activeId, navItems, title])

  useEffect(() => {
    const root = bodyRef.current
    if (!root || !flatIds.length) return undefined

    const elements = flatIds
      .map((id) => root.querySelector(`#${CSS.escape(id)}`))
      .filter(Boolean)

    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-120px 0px -55% 0px',
        threshold: [0, 0.1, 0.25],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [flatIds])

  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return
    setActiveId(id)
    setMobileOpen(false)
    const headerOffset = 96
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  const onNavClick = useCallback(
    (event, id) => {
      event.preventDefault()
      scrollToId(id)
    },
    [scrollToId],
  )

  return (
    <section className="legal-doc">
      <div className="container legal-doc__container">
        <aside className="legal-doc__sidebar" aria-label="Document tabs">
          <p className="legal-doc__tabs-label">Document tabs</p>
          <div className="legal-doc__doc-tab" aria-current="page">
            <span className="legal-doc__doc-tab-icon" aria-hidden="true" />
            <span className="legal-doc__doc-tab-text">{title}</span>
          </div>
          <nav className="legal-doc__nav" aria-label={`${title} sections`}>
            <ul className="legal-doc__nav-list">
              {navItems.map((item) => {
                const parentActive =
                  activeId === item.id || item.children?.some((c) => c.id === activeId)
                return (
                  <li key={item.id} className="legal-doc__nav-item">
                    <a
                      href={`#${item.id}`}
                      className={`legal-doc__nav-link${parentActive && !item.children?.some((c) => c.id === activeId) ? ' is-active' : ''}${parentActive && item.children?.length ? ' is-section-active' : ''}`}
                      onClick={(e) => onNavClick(e, item.id)}
                    >
                      {item.label}
                    </a>
                    {item.children?.length ? (
                      <ul className="legal-doc__nav-sublist">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <a
                              href={`#${child.id}`}
                              className={`legal-doc__nav-link legal-doc__nav-link--sub${activeId === child.id ? ' is-active' : ''}`}
                              onClick={(e) => onNavClick(e, child.id)}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>

        <div className="legal-doc__main">
          <div className="legal-doc__mobile-nav">
            <button
              type="button"
              className="legal-doc__mobile-toggle"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span className="legal-doc__mobile-toggle-label">On this page</span>
              <span className="legal-doc__mobile-toggle-current">{activeLabel}</span>
            </button>
            {mobileOpen ? (
              <nav className="legal-doc__mobile-panel" aria-label={`${title} sections`}>
                <ul className="legal-doc__nav-list">
                  {navItems.map((item) => (
                    <li key={item.id} className="legal-doc__nav-item">
                      <a
                        href={`#${item.id}`}
                        className={`legal-doc__nav-link${activeId === item.id ? ' is-active' : ''}`}
                        onClick={(e) => onNavClick(e, item.id)}
                      >
                        {item.label}
                      </a>
                      {item.children?.length ? (
                        <ul className="legal-doc__nav-sublist">
                          {item.children.map((child) => (
                            <li key={child.id}>
                              <a
                                href={`#${child.id}`}
                                className={`legal-doc__nav-link legal-doc__nav-link--sub${activeId === child.id ? ' is-active' : ''}`}
                                onClick={(e) => onNavClick(e, child.id)}
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </div>

          <h1 className="privacy-page__title">{title}</h1>
          <div ref={bodyRef} className="privacy-page__body legal-doc__body">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
