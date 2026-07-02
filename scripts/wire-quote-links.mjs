import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const SRC = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src')
const QUOTE_LINK = path.join(SRC, 'components', 'layout', 'QuoteLink.jsx')

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(full, out)
    else if (ent.name.endsWith('.jsx')) out.push(full)
  }
  return out
}

function quoteImportFor(file) {
  let rel = path.relative(path.dirname(file), QUOTE_LINK).replace(/\\/g, '/')
  if (!rel.startsWith('.')) rel = `./${rel}`
  return `import QuoteLink from '${rel}'`
}

function addImport(content, importLine) {
  if (content.includes(importLine) || content.includes("from './QuoteLink") || content.includes('QuoteLink.jsx')) {
    return content
  }
  const lines = content.split(/\r?\n/)
  let lastImport = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImport = i
  }
  if (lastImport >= 0) {
    lines.splice(lastImport + 1, 0, importLine)
    return lines.join('\n')
  }
  return `${importLine}\n\n${content}`
}

const REPLACEMENTS = [
  [
    /<a href="#" className="btn-yellow">\s*\n\s*Get a Free Quote\s*\n\s*<\/a>/g,
    '<QuoteLink className="btn-yellow" />',
  ],
  [
    /<a href="#" className="btn-yellow service-page-cta">\s*\n\s*Get a Free Quote\s*\n\s*<\/a>/g,
    '<QuoteLink className="btn-yellow service-page-cta" />',
  ],
  [
    /<a href="#" className="btn-quote">\s*\n\s*Get A Quote\s*\n\s*<\/a>/g,
    '<QuoteLink className="btn-quote">Get A Quote</QuoteLink>',
  ],
  [
    /<a href="#hero-booking" className="luxury-carousel__btn">\s*\n\s*Get a free quote\s*\n\s*(<Icon[^>]+\/>)\s*\n\s*<\/a>/g,
    '<QuoteLink className="luxury-carousel__btn">\n            Get a free quote\n            $1\n          </QuoteLink>',
  ],
  [
    /<a\s+href="#hero-booking"\s+className=\{`route-card__btn route-card__btn--\$\{buttonVariant\}`\}\s*>\s*\n\s*Get a free quote\s*\n\s*(<Icon[^>]+\/>)\s*\n\s*<\/a>/g,
    '<QuoteLink className={`route-card__btn route-card__btn--${buttonVariant}`}>\n          Get a free quote\n          $1\n        </QuoteLink>',
  ],
]

let updated = 0
for (const file of walk(SRC)) {
  if (file === QUOTE_LINK) continue
  if (file.endsWith(`${path.sep}contact-us${path.sep}ContactForm.jsx`)) continue

  let content = fs.readFileSync(file, 'utf8')
  const original = content

  for (const [pattern, replacement] of REPLACEMENTS) {
    content = content.replace(pattern, replacement)
  }

  if (content !== original) {
    content = addImport(content, quoteImportFor(file))
    fs.writeFileSync(file, content)
    updated += 1
    console.log(path.relative(SRC, file))
  }
}

console.log(`Updated ${updated} files.`)
