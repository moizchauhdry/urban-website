import Home from './Home.jsx'
import LandingPageShell from '../../../components/layout/LandingPageShell.jsx'
import '../../../styles/other-pages/milwaukee-chauffeur-service.css'

const PAGE_HOME = '/milwaukee-chauffeur-service'

/** Layout for Milwaukee Chauffeur Service. */
export default function PageLayout() {
  return (
    <LandingPageShell homePath={PAGE_HOME} headerVariant="standard" isHome>
      <Home />
    </LandingPageShell>
  )
}
