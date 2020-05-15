#! /usr/bin/env node

const snakeToCamel = (str) => {
  const camelStr = str.replace(/([-_][a-z])/gi, s => {
    return s
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  })
  return camelStr.replace(/_/g, '')
}

const path = require('path')
const glob = require('glob')
const fs = require('fs')

const ROOT_DIR = 'kanjiyomoda.com'
const SOURCE = process.env.SOURCE || path.join(__dirname, '..', '..', 'public', 'images', '/**/*.{jpg,jpeg,png}')
const DESTINATION = path.join(__dirname, '..', 'constants', 'images.ts')

let imageFiles = glob.sync(SOURCE)
let exportsStr = ''

imageFiles.forEach(filePath => {
  const filePaths = filePath.split('/')
  const fileName = snakeToCamel(filePaths[filePaths.length - 1].split('.')[0] + '_image')
  const path = '../..' + filePath.split(ROOT_DIR)[1]
  exportsStr += `
export const ${fileName} = {
  src: require('${path}'),
  preSrc: require('${path}?lqip'),
}
`
})

fs.writeFileSync(DESTINATION, exportsStr)

console.log(`Convert ${imageFiles.length} images to constants in ${DESTINATION}`)
