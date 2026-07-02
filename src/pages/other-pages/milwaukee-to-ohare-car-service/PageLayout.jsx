import Home from './Home.jsx'
import LandingPageShell from '../../../components/layout/LandingPageShell.jsx'
import '../../../styles/other-pages/milwaukee-to-ohare-car-service.css'

const PAGE_HOME = '/milwaukee-to-ohare-car-service'

/** Layout for Milwaukee To Ohare Car Service. */
export default function PageLayout() {
  return (
    <LandingPageShell homePath={PAGE_HOME} headerVariant="standard" isHome>
      <Home />
    </LandingPageShell>
  )
}
