import img1 from '../../../../assets/other-pages/miami-chauffeur-service/content-blocks/car-service1.webp'
import img2 from '../../../../assets/other-pages/miami-chauffeur-service/content-blocks/car-service2.webp'
import img3 from '../../../../assets/other-pages/miami-chauffeur-service/content-blocks/car-service3.webp'
import { buildLuxuryRouteCards } from '../../../../utils/buildLuxuryRouteCards.js'

export const ROUTE_CARDS = buildLuxuryRouteCards({
  railLabel: 'MIAMI CHAUFFEUR SERVICE',
  images: [img1, img2, img3],
  variant: 'luxury',
})
