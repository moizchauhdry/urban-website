import fs from 'fs'
import path from 'path'

const srcRoot = path.resolve('src')
const carouselNames = [
  'FleetCarousel.jsx',
  'FleetCarouselDots.jsx',
  'FleetImageSlider.jsx',
  'FleetCard.jsx',
  'ReviewsCarousel.jsx',
  'ReviewCard.jsx',
  'ServicesCarousel.jsx',
  'WhyMobileCarousel.jsx',
]

const parentImports = [
  {
    file: 'fleet/Fleet.jsx',
    replacements: [
      [/import FleetCarousel from '\.\/FleetCarousel\.jsx'/, "import FleetCarousel from '{PREFIX}components/carousels/FleetCarousel.jsx'"],
    ],
  },
  {
    file: 'reviews/ReviewsSection.jsx',
    replacements: [
      [/import ReviewsCarousel from '\.\/ReviewsCarousel\.jsx'/, "import ReviewsCarousel from '{PREFIX}components/carousels/ReviewsCarousel.jsx'"],
    ],
  },
  {
    file: 'services/Services.jsx',
    replacements: [
      [/import ServicesCarousel from '\.\/ServicesCarousel\.jsx'/, "import ServicesCarousel from '{PREFIX}components/carousels/ServicesCarousel.jsx'"],
    ],
  },
  {
    file: 'why-different/WhyDifferent.jsx',
    replacements: [
      [/import WhyMobileCarousel from '\.\/WhyMobileCarousel\.jsx'/, "import WhyMobileCarousel from '{PREFIX}components/carousels/WhyMobileCarousel.jsx'"],
    ],
  },
]

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, files)
    else if (/\.(jsx?)$/.test(ent.name)) files.push(p)
  }
  return files
}

function upToSrc(filePath) {
  const dir = path.dirname(filePath)
  const rel = path.relative(srcRoot, dir)
  const depth = rel === '' ? 0 : rel.split(path.sep).length
  return '../'.repeat(depth)
}

const regionRoots = walk(path.join(srcRoot, 'pages')).filter((f) => {
  const rel = path.relative(path.join(srcRoot, 'pages'), f).replace(/\\/g, '/')
  return parentImports.some((p) => rel.endsWith(p.file))
})

let updated = 0
for (const file of regionRoots) {
  const rel = path.relative(path.join(srcRoot, 'pages'), file).replace(/\\/g, '/')
  const spec = parentImports.find((p) => rel.endsWith(p.file))
  if (!spec) continue

  const prefix = upToSrc(file)
  let content = fs.readFileSync(file, 'utf8')
  const orig = content
  for (const [re, rep] of spec.replacements) {
    content = content.replace(re, rep.replaceAll('{PREFIX}', prefix))
  }
  if (content !== orig) {
    fs.writeFileSync(file, content)
    updated++
  }
}

// Update pages/fleet/FleetVehicles.jsx
const fleetVehicles = path.join(srcRoot, 'pages/fleet/FleetVehicles.jsx')
let fv = fs.readFileSync(fleetVehicles, 'utf8')
fv = fv.replace(
  /import \{ FleetCard \} from '\.\.\/connecticut\/fleet\/FleetCard\.jsx'/,
  "import { FleetCard } from '../../components/carousels/FleetCard.jsx'",
)
fs.writeFileSync(fleetVehicles, fv)

// Update our-services and fleet review sections
for (const file of [
  path.join(srcRoot, 'pages/our-services/ServicesReviewsSection.jsx'),
  path.join(srcRoot, 'pages/fleet/FleetReviewsSection.jsx'),
]) {
  let content = fs.readFileSync(file, 'utf8')
  content = content.replace(
    /import ReviewsCarousel from '\.\.\/connecticut\/reviews\/ReviewsCarousel\.jsx'/,
    "import ReviewsCarousel from '../../components/carousels/ReviewsCarousel.jsx'",
  )
  fs.writeFileSync(file, content)
}

// Delete duplicate carousel files under pages/
let deleted = 0
for (const ent of walk(path.join(srcRoot, 'pages'))) {
  const base = path.basename(ent)
  if (!carouselNames.includes(base)) continue
  if (ent.includes(`${path.sep}components${path.sep}carousels${path.sep}`)) continue
  fs.unlinkSync(ent)
  deleted++
}

console.log('Updated parents:', updated, 'Deleted duplicates:', deleted)
