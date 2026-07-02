import Home from './Home.jsx'
import LandingPageShell from '../../../components/layout/LandingPageShell.jsx'
import '../../../styles/other-pages/ct-to-jfk-airport-car-service.css'

const PAGE_HOME = '/ct-to-jfk-airport-car-service'

/** Layout for Ct To Jfk Airport Car Service. */
export default function PageLayout() {
  return (
    <LandingPageShell homePath={PAGE_HOME} headerVariant="standard" isHome>
      <Home />
    </LandingPageShell>
  )
}
