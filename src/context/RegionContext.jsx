import { createContext, useContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { REGIONS } from '../config/regions.js'
import { getCurrentRegionSlug } from '../lib/appBase.js'

const RegionContext = createContext({ slug: null, region: null })

export function RegionProvider({ children }) {
  const { pathname } = useLocation()
  const value = useMemo(() => {
    const slug = getCurrentRegionSlug()
    const region = REGIONS.find((r) => r.slug === slug) ?? null
    return { slug, region }
  }, [pathname])

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>
}

export function useRegion() {
  return useContext(RegionContext)
}
