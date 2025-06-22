const fs = require('fs')
const path = require('path')

const contentDir = path.resolve(__dirname, '../content/projects')

function getRoutes() {
  const files = fs.readdirSync(contentDir)
  return files.map(f => `/projects/${f.replace(/\.md$/, '')}`)
}

const routes = getRoutes()

fs.writeFileSync(path.resolve(__dirname, '../prerender-routes.json'), JSON.stringify(routes, null, 2))
console.log('✅ Routes générées :', routes)
