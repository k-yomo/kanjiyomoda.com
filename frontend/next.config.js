const withPlugins = require("next-compose-plugins");
const mdx = require("@next/mdx")();

/** @type {import('next').NextConfig} */
module.exports = withPlugins([
  [
    mdx,
    {
      pageExtensions: ["ts", "tsx", "mdx"],
    },
  ],
],{
  reactStrictMode: true,
})
