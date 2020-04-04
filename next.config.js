const withPlugins = require('next-compose-plugins')
const mdx = require('@next/mdx')()
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
  [
    optimizedImages,
    {
      inlineImageLimit: 8192,
      imagesFolder: 'images',
      imagesName: '[name]-[hash].[ext]',
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
      optimizeImages: true,
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      webp: {
        preset: 'default',
        quality: 75,
      },
    },
  ],
  [
    mdx,
    {
      pageExtensions: ['tsx', 'mdx'],
    },
  ],
])
