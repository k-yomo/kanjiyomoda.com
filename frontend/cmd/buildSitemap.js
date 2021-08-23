#! /usr/bin/env node
const path = require('path')
const glob = require('glob')
const fs = require('fs')

const SITE_ROOT = process.env.SITE_ROOT || 'https://kanjiyomoda.com'
const SOURCE = process.env.SOURCE || path.join(__dirname, '..', 'src', 'pages', '/**/*')
const DESTINATION = process.env.DESTINATION || path.join(__dirname, '..', 'public', 'sitemap.xml')

let diskPages = glob.sync(SOURCE)

const pageXMLs = []
diskPages.forEach(page => {
    if (!page.match(/.(tsx|mdx)$/)) {
        return
    }
    const modDate = new Date(fs.statSync(page).mtime)
    const lastMod = `${modDate.getFullYear()}-${('0' + (modDate.getMonth() + 1)).slice(-2)}-${(
        '0' + modDate.getDate()
    ).slice(-2)}`

    page = page.replace(path.join(__dirname, '..', 'src', 'pages'), '')
    if (page.match(/^\/_.*$/)) {
        return
    }
    console.log(page)
    page = page.replace(/.(tsx|mdx)$/, '')
    if (page.match(/.*\/index$/)) {
        page = page.replace(/(.*)\/index$/, '$1')
    }
    page = `${SITE_ROOT}${page}`

    pageXMLs.push(`  <url>
    <loc>${page}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>`)
})

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
` + pageXMLs.join("\n") + '\n</urlset>\n'

fs.writeFileSync(DESTINATION, xml)

console.log(`Wrote sitemap for ${pageXMLs.length} pages to ${DESTINATION}`)
