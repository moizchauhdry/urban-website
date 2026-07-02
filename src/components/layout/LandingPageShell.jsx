import { useUrbanEliteInteractions } from '../../hooks/useUrbanEliteInteractions.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { useScrollToBookingHash } from '../../hooks/useScrollToBookingHash.js'
import DeferredFooter from './DeferredFooter.jsx'
import LandingHeader from './landing/LandingHeader.jsx'

/**
 * Shared chrome for regional and other landing pages.
 *
 * @param {{
 *   homePath?: string
 *   headerVariant?: 'connecticut' | 'standard'
 *   headerKey?: string
 *   isHome?: boolean
 *   footerLogoPath?: string
 *   wrapperClassName?: string
 *   children: import('react').ReactNode
 * }} props
 */
export default function LandingPageShell({
  homePath = '/',
  headerVariant = 'standard',
  headerKey,
  isHome = true,
  footerLogoPath,
  wrapperClassName,
  children,
}) {
  useUrbanEliteInteractions(isHome)
  useScrollReveal()
  useScrollToBookingHash()

  const content = (
    <>
      <LandingHeader
        key={headerKey}
        homePath={homePath}
        variant={headerVariant}
      />
      {children}
      <DeferredFooter logoPath={footerLogoPath ?? homePath} />
    </>
  )

  if (wrapperClassName) {
    return <div className={wrapperClassName}>{content}</div>
  }

  return content
}
