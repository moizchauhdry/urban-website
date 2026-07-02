import Home from './Home.jsx'
import LandingPageShell from '../../../components/layout/LandingPageShell.jsx'
import '../../../styles/other-pages/milwaukee-airport-limo-service.css'

const PAGE_HOME = '/milwaukee-airport-limo-service'

/** Layout for Milwaukee Airport Limo Service. */
export default function PageLayout() {
  return (
    <LandingPageShell homePath={PAGE_HOME} headerVariant="standard" isHome>
      <Home />
    </LandingPageShell>
  )
}
