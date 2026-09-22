import fs from 'fs'
import path from 'path'

const root = process.cwd()

const walk = (dir, acc = []) => {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules' || name === 'dist' || name === '.git') continue
    const full = path.join(dir, name)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) walk(full, acc)
    else if (/\.(vue|ts)$/.test(name)) acc.push(full)
  }
  return acc
}

const files = walk(path.join(root, 'src'))
const ui = fs.readFileSync(path.join(root, 'src/i18n/ui.ts'), 'utf8')
const keys = new Set([...ui.matchAll(/'([a-zA-Z0-9_.]+)':\s*\{/g)].map((match) => match[1]))

const used = new Set()
const missingKeys = []
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8')
  for (const match of text.matchAll(/\bt\(\s*'([^']+)'/g)) {
    used.add(match[1])
    if (!keys.has(match[1])) missingKeys.push(`${path.relative(root, file)} -> ${match[1]}`)
  }
}

const imageRefs = new Set()
const imagePattern = /['"](gallery\/[^'"]+\.(?:jpg|jpeg|png|webp|svg))['"]/g
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8')
  for (const match of text.matchAll(imagePattern)) imageRefs.add(match[1])
}

const missingImages = [...imageRefs].filter(
  (rel) => !fs.existsSync(path.join(root, 'public', rel))
)

const incomplete = []
for (const block of ui.matchAll(/'([^']+)':\s*\{([^}]+)\}/g)) {
  for (const lang of ['ru', 'en', 'cs', 'de']) {
    if (!new RegExp(`\\b${lang}\\s*:`).test(block[2])) {
      incomplete.push(`${block[1]} missing ${lang}`)
    }
  }
}

const big = []
const walkPublic = (dir) => {
  if (!fs.existsSync(dir)) return
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) walkPublic(full)
    else if (stat.size > 10 * 1024 * 1024) {
      big.push(`${(stat.size / 1024 / 1024).toFixed(1)}MB ${path.relative(root, full)}`)
    }
  }
}
walkPublic(path.join(root, 'public'))

const failures = []
if (missingKeys.length) failures.push(`missing i18n keys:\n${missingKeys.join('\n')}`)
if (missingImages.length) failures.push(`missing images:\n${missingImages.join('\n')}`)
if (incomplete.length) failures.push(`incomplete translations:\n${incomplete.join('\n')}`)
if (big.length) failures.push(`files over 10MB:\n${big.join('\n')}`)

console.log(`i18n keys: ${keys.size} defined, ${used.size} used`)
console.log(`gallery images referenced: ${imageRefs.size}`)

if (failures.length) {
  console.error(failures.join('\n\n'))
  process.exit(1)
}

console.log('content checks passed')
