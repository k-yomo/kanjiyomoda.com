import React from 'react'
import Head from 'next/head'
import SocialMeta from './SocialMeta'

interface Props {
  title: string
  description: string
  image: string
  isIndex?: boolean
}

export default function SeoMeta(props: Props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <SocialMeta {...props} />
    </>
  )
}
