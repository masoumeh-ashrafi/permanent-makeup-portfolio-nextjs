const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const publicDir = path.join(__dirname, '..', 'public')
const outDir = path.join(publicDir, 'optimized')

const exts = ['.jpg', '.jpeg', '.png', '.webp']

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true })
}

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    const rel = path.relative(publicDir, full)

    // Skip the optimized folder itself
    if (entry.isDirectory() && entry.name === 'optimized') {
      continue
    }

    if (entry.isDirectory()) {
      await walk(full)
    } else {
      const ext = path.extname(entry.name).toLowerCase()
      if (exts.includes(ext)) {
        const outPath = path.join(outDir, rel).replace(/\.[^.]+$/, '.webp')
        await ensureDir(path.dirname(outPath))
        try {
          await sharp(full)
            .resize({ width: 1600, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(outPath)
          console.log(
            'Converted:',
            rel,
            '->',
            path.relative(publicDir, outPath),
          )
        } catch (err) {
          console.error('Failed convert', rel, err.message || err)
        }
      }
    }
  }
}

;(async () => {
  await ensureDir(outDir)
  await walk(publicDir)
  console.log('Optimization complete. WebP files are in public/optimized')
})()
