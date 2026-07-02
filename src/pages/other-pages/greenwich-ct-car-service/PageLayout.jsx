import Home from './Home.jsx'
import LandingPageShell from '../../../components/layout/LandingPageShell.jsx'
import '../../../styles/other-pages/greenwich-ct-car-service.css'

const PAGE_HOME = '/greenwich-ct-car-service'

/** Layout for Greenwich Ct Car Service. */
export default function PageLayout() {
  return (
    <LandingPageShell homePath={PAGE_HOME} headerVariant="standard" isHome>
      <Home />
    </LandingPageShell>
  )
}
