import Home from './Home.jsx'
import LandingPageShell from '../../../components/layout/LandingPageShell.jsx'
import '../../../styles/other-pages/illinois-car-service.css'

const PAGE_HOME = '/illinois-car-service'

/** Layout for Illinois Car Service. */
export default function PageLayout() {
  return (
    <LandingPageShell homePath={PAGE_HOME} headerVariant="standard" isHome>
      <Home />
    </LandingPageShell>
  )
}
