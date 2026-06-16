const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..', 'app')
const exts = ['.ts', '.tsx', '.js', '.jsx']

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(d => {
    const full = path.join(dir, d.name)
    if (d.isDirectory()) return walk(full)
    if (exts.includes(path.extname(d.name))) return [full]
    return []
  })
}

const files = walk(root)
let count = 0
files.forEach(file => {
  let src = fs.readFileSync(file, 'utf8')
  const original = src
  // replace /images/... .jpg/.jpeg/.png -> /optimized/images/....webp
  src = src.replace(
    /(["'])\/(images\/)?([^\"']+?)\.(jpe?g|png)\1/gim,
    (m, q, imagesPrefix, name) => {
      const prefix = imagesPrefix ? 'images/' : ''
      return `${q}/optimized/${prefix}${name}.webp${q}`
    },
  )
  // replace root-level /name.jpg -> /optimized/name.webp
  src = src.replace(
    /(["'])\/(?!optimized\/)([^\/\"']+?)\.(jpe?g|png)\1/gim,
    (m, q, name) => {
      return `${q}/optimized/${name}.webp${q}`
    },
  )

  if (src !== original) {
    fs.writeFileSync(file, src, 'utf8')
    console.log('Updated', file)
    count++
  }
})
console.log('Done. Files updated:', count)
