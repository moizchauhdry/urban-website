import Home from './Home.jsx'
import LandingPageShell from '../../../components/layout/LandingPageShell.jsx'
import '../../../styles/other-pages/miami-to-fort-lauderdale-car-service.css'

const PAGE_HOME = '/miami-to-fort-lauderdale-car-service'

/** Layout for Miami To Fort Lauderdale Car Service. */
export default function PageLayout() {
  return (
    <LandingPageShell homePath={PAGE_HOME} headerVariant="standard" isHome>
      <Home />
    </LandingPageShell>
  )
}
