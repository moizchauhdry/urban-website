import Home from './Home.jsx'
import LandingPageShell from '../../../components/layout/LandingPageShell.jsx'
import '../../../styles/other-pages/luxury-new-jersey-car-service.css'

const PAGE_HOME = '/luxury-new-jersey-car-service'

/** Layout for Luxury New Jersey Car Service. */
export default function PageLayout() {
  return (
    <LandingPageShell homePath={PAGE_HOME} headerVariant="standard" isHome>
      <Home />
    </LandingPageShell>
  )
}
