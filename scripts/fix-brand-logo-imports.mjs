/**
 * Fix BrandLogo imports in all regional Header/Footer files.
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const brandLogoTarget = path.join(ROOT, 'src/components/layout/BrandLogo.jsx')
const pagesRoot = path.join(ROOT, 'src/pages')

function brandLogoImportFrom(filePath) {
  const rel = path
    .relative(path.dirname(filePath), brandLogoTarget)
    .replace(/\\/g, '/')
  return rel.startsWith('.') ? rel : `./${rel}`
}

function patchFile(filePath, componentName) {
  let content = fs.readFileSync(filePath, 'utf8')
  const importPath = brandLogoImportFrom(filePath)
  const importLine = `import { ${componentName} } from '${importPath}'\n`

  content = content.replace(/import urbanLogo from ['"][^'"]+['"]\n/g, '')
  content = content.replace(/import urbanFooterLogo from ['"][^'"]+['"]\n/g, '')
  content = content.replace(
    /import \{ (Header|Footer)BrandLogo \} from ['"][^'"]+['"]\n/g,
    '',
  )

  if (!content.includes(`import { ${componentName} }`)) {
    const linkImport = content.indexOf("import { Link }")
    if (linkImport !== -1) {
      const lineEnd = content.indexOf('\n', linkImport) + 1
      content = content.slice(0, lineEnd) + importLine + content.slice(lineEnd)
    } else {
      const firstImportEnd = content.indexOf('\n') + 1
      content = content.slice(0, firstImportEnd) + importLine + content.slice(firstImportEnd)
    }
  }

  fs.writeFileSync(filePath, content)
  console.log('Fixed', path.relative(ROOT, filePath), '->', importPath)
}

function walk(dir, name, componentName) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, name, componentName)
    else if (entry.name === name && full.includes(`${path.sep}layout${path.sep}`)) {
      patchFile(full, componentName)
    }
  }
}

walk(pagesRoot, 'Header.jsx', 'HeaderBrandLogo')
walk(pagesRoot, 'Footer.jsx', 'FooterBrandLogo')
console.log('Done.')
