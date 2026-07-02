import Home from './Home.jsx'
import LandingPageShell from '../../../components/layout/LandingPageShell.jsx'
import '../../../styles/other-pages/west-palm-beach-to-miami-limo-service.css'

const PAGE_HOME = '/west-palm-beach-to-miami-limo-service'

/** Layout for West Palm Beach To Miami Limo Service. */
export default function PageLayout() {
  return (
    <LandingPageShell homePath={PAGE_HOME} headerVariant="standard" isHome>
      <Home />
    </LandingPageShell>
  )
}
