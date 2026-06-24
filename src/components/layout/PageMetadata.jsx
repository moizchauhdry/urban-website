import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPageMetadata } from '../../config/pageMetadata.js'
import { applyPageMetadata } from '../../utils/pageMetadata.js'

/** Sets document title and meta description from the central page metadata map. */
export default function PageMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getPageMetadata(pathname)
    if (meta) applyPageMetadata(meta)
  }, [pathname])

  return null
}
