import Home from './Home.jsx'
import LandingPageShell from '../../../components/layout/LandingPageShell.jsx'
import '../../../styles/other-pages/fairfield-ct-car-service.css'

const PAGE_HOME = '/fairfield-ct-car-service'

/** Layout for Fairfield Ct Car Service. */
export default function PageLayout() {
  return (
    <LandingPageShell homePath={PAGE_HOME} headerVariant="standard" isHome>
      <Home />
    </LandingPageShell>
  )
}
