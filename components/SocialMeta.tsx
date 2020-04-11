import React from 'react'
import Head from 'next/head'
import { siteRootUrl, siteTitle } from '../constants/site'
import { twitterUsername } from '../constants/sns'

interface Props {
  title: string
  description: string
  image: string
  isIndex?: boolean
}

export default function SocialMeta({ title, description, image, isIndex }: Props) {
  return (
    <Head>
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta property="og:type" content={isIndex ? 'website' : 'article'} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteRootUrl}${image}`} />
    </Head>
  )
}
