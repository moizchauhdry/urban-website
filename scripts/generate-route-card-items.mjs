import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

/** @type {{ file: string, importBase: string, railLabel: string, variant?: string }[]} */
const PAGES = [
  { file: 'src/pages/florida/route-cards/routeCardItems.js', importBase: '../../../assets/florida/content-blocks', railLabel: 'FLORIDA CAR SERVICE' },
  { file: 'src/pages/newyork/route-cards/routeCardItems.js', importBase: '../../../assets/newyork/content-blocks', railLabel: 'NEW YORK CAR SERVICE' },
  { file: 'src/pages/illinois/illinois/route-cards/routeCardItems.js', importBase: '../../../../assets/illinois/illinois/content-blocks', railLabel: 'ILLINOIS CAR SERVICE' },
  { file: 'src/pages/illinois/chicago-limo-service/route-cards/routeCardItems.js', importBase: '../../../../assets/illinois/chicago-limo-service/content-blocks', railLabel: 'CHICAGO LIMO SERVICE', variant: 'luxury' },
  { file: 'src/pages/illinois/chicago-chauffeur-service/route-cards/routeCardItems.js', importBase: '../../../../assets/illinois/chicago-chauffeur-service/content-blocks', railLabel: 'CHICAGO CHAUFFEUR SERVICE', variant: 'luxury' },
  { file: 'src/pages/other-pages/atlanta-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/atlanta-car-service/content-blocks', railLabel: 'ATLANTA CAR SERVICE' },
  { file: 'src/pages/other-pages/bdl-airport-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/bdl-airport-car-service/content-blocks', railLabel: 'BDL AIRPORT CAR SERVICE', variant: 'airport' },
  { file: 'src/pages/other-pages/boston-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/boston-car-service/content-blocks', railLabel: 'BOSTON CAR SERVICE' },
  { file: 'src/pages/other-pages/chicago-airport-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/chicago-airport-car-service/content-blocks', railLabel: 'CHICAGO AIRPORT CAR SERVICE', variant: 'airport' },
  { file: 'src/pages/other-pages/connecticut-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/connecticut-car-service/content-blocks', railLabel: 'CONNECTICUT CAR SERVICE' },
  { file: 'src/pages/other-pages/ct-to-jfk-airport-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/ct-to-jfk-airport-car-service/content-blocks', railLabel: 'CT TO JFK AIRPORT CAR SERVICE', variant: 'route' },
  { file: 'src/pages/other-pages/danbury-ct-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/danbury-ct-car-service/content-blocks', railLabel: 'DANBURY CT CAR SERVICE' },
  { file: 'src/pages/other-pages/fairfield-ct-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/fairfield-ct-car-service/content-blocks', railLabel: 'FAIRFIELD CT CAR SERVICE' },
  { file: 'src/pages/other-pages/florida-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/florida-car-service/content-blocks', railLabel: 'FLORIDA CAR SERVICE' },
  { file: 'src/pages/other-pages/greenwich-ct-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/greenwich-ct-car-service/content-blocks', railLabel: 'GREENWICH CT CAR SERVICE' },
  { file: 'src/pages/other-pages/hartford-ct-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/hartford-ct-car-service/content-blocks', railLabel: 'HARTFORD CT CAR SERVICE' },
  { file: 'src/pages/other-pages/illinois-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/illinois-car-service/content-blocks', railLabel: 'ILLINOIS CAR SERVICE' },
  { file: 'src/pages/other-pages/jfk-airport-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/jfk-airport-car-service/content-blocks', railLabel: 'JFK AIRPORT CAR SERVICE', variant: 'airport' },
  { file: 'src/pages/other-pages/lga-airport-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/lga-airport-car-service/content-blocks', railLabel: 'LGA AIRPORT CAR SERVICE', variant: 'airport' },
  { file: 'src/pages/other-pages/luxury-new-jersey-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/luxury-new-jersey-car-service/content-blocks', railLabel: 'LUXURY NEW JERSEY CAR SERVICE', variant: 'luxury' },
  { file: 'src/pages/other-pages/manhattan-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/manhattan-car-service/content-blocks', railLabel: 'MANHATTAN CAR SERVICE' },
  { file: 'src/pages/other-pages/miami-airport-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/miami-airport-car-service/content-blocks', railLabel: 'MIAMI AIRPORT CAR SERVICE', variant: 'airport' },
  { file: 'src/pages/other-pages/miami-airport-limo-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/miami-airport-limo-service/content-blocks', railLabel: 'MIAMI AIRPORT LIMO SERVICE', variant: 'luxury' },
  { file: 'src/pages/other-pages/miami-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/miami-car-service/content-blocks', railLabel: 'MIAMI CAR SERVICE' },
  { file: 'src/pages/other-pages/miami-chauffeur-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/miami-chauffeur-service/content-blocks', railLabel: 'MIAMI CHAUFFEUR SERVICE', variant: 'luxury' },
  { file: 'src/pages/other-pages/miami-to-fort-lauderdale-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/miami-to-fort-lauderdale-car-service/content-blocks', railLabel: 'MIAMI TO FORT LAUDERDALE CAR SERVICE', variant: 'route' },
  { file: 'src/pages/other-pages/miami-to-naples-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/miami-to-naples-car-service/content-blocks', railLabel: 'MIAMI TO NAPLES CAR SERVICE', variant: 'route' },
  { file: 'src/pages/other-pages/miami-to-orlando-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/miami-to-orlando-car-service/content-blocks', railLabel: 'MIAMI TO ORLANDO CAR SERVICE', variant: 'route' },
  { file: 'src/pages/other-pages/milwaukee-airport-limo-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/milwaukee-airport-limo-service/content-blocks', railLabel: 'MILWAUKEE AIRPORT LIMO SERVICE', variant: 'luxury' },
  { file: 'src/pages/other-pages/milwaukee-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/milwaukee-car-service/content-blocks', railLabel: 'MILWAUKEE CAR SERVICE' },
  { file: 'src/pages/other-pages/milwaukee-chauffeur-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/milwaukee-chauffeur-service/content-blocks', railLabel: 'MILWAUKEE CHAUFFEUR SERVICE', variant: 'luxury' },
  { file: 'src/pages/other-pages/milwaukee-limo-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/milwaukee-limo-service/content-blocks', railLabel: 'MILWAUKEE LIMO SERVICE', variant: 'luxury' },
  { file: 'src/pages/other-pages/milwaukee-to-chicago-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/milwaukee-to-chicago-car-service/content-blocks', railLabel: 'MILWAUKEE TO CHICAGO CAR SERVICE', variant: 'route' },
  { file: 'src/pages/other-pages/milwaukee-to-ohare-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/milwaukee-to-ohare-car-service/content-blocks', railLabel: 'MILWAUKEE TO OHARE CAR SERVICE', variant: 'route' },
  { file: 'src/pages/other-pages/new-haven-ct-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/new-haven-ct-car-service/content-blocks', railLabel: 'NEW HAVEN CT CAR SERVICE' },
  { file: 'src/pages/other-pages/new-york-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/new-york-car-service/content-blocks', railLabel: 'NEW YORK CAR SERVICE' },
  { file: 'src/pages/other-pages/newark-airport-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/newark-airport-service/content-blocks', railLabel: 'NEWARK AIRPORT SERVICE', variant: 'airport' },
  { file: 'src/pages/other-pages/norwalk-ct-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/norwalk-ct-car-service/content-blocks', railLabel: 'NORWALK CT CAR SERVICE' },
  { file: 'src/pages/other-pages/nyc-limo-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/nyc-limo-service/content-blocks', railLabel: 'NYC LIMO SERVICE', variant: 'luxury' },
  { file: 'src/pages/other-pages/stamford-ct-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/stamford-ct-car-service/content-blocks', railLabel: 'STAMFORD CT CAR SERVICE' },
  { file: 'src/pages/other-pages/texas-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/texas-car-service/content-blocks', railLabel: 'TEXAS CAR SERVICE' },
  { file: 'src/pages/other-pages/west-palm-beach-to-miami-limo-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/west-palm-beach-to-miami-limo-service/content-blocks', railLabel: 'WEST PALM BEACH TO MIAMI LIMO SERVICE', variant: 'route' },
  { file: 'src/pages/other-pages/westchester-county-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/westchester-county-car-service/content-blocks', railLabel: 'WESTCHESTER COUNTY CAR SERVICE' },
  { file: 'src/pages/other-pages/wisconsin-car-service/route-cards/routeCardItems.js', importBase: '../../../../assets/other-pages/wisconsin-car-service/content-blocks', railLabel: 'WISCONSIN CAR SERVICE' },
]

function utilImportPath(file) {
  const depth = file.split('/').length - 2
  return `${'../'.repeat(depth)}utils/buildLuxuryRouteCards.js`
}

for (const page of PAGES) {
  const utilPath = utilImportPath(page.file)
  const variantLine = page.variant ? `\n  variant: '${page.variant}',` : ''
  const content = `import img1 from '${page.importBase}/car-service1.webp'
import img2 from '${page.importBase}/car-service2.webp'
import img3 from '${page.importBase}/car-service3.webp'
import { buildLuxuryRouteCards } from '${utilPath}'

export const ROUTE_CARDS = buildLuxuryRouteCards({
  railLabel: '${page.railLabel}',
  images: [img1, img2, img3],${variantLine}
})
`

  const target = path.join(root, page.file)
  writeFileSync(target, content, 'utf8')
  console.log('updated', page.file)
}

console.log(`Done. Updated ${PAGES.length} route card files.`)
