import { createPortal } from 'react-dom'
import { useLoading } from '../../context/LoadingContext.jsx'

/** Full-screen overlay with the site-wide loading animation. */
export default function SiteLoader() {
  const { isLoading } = useLoading()

  if (!isLoading) return null

  return createPortal(
    <div className="site-loader-overlay" role="status" aria-live="polite" aria-label="Loading">
      <div className="loader" />
    </div>,
    document.body,
  )
}
