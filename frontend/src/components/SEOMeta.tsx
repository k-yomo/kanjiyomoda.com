import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  SITE_ROOT_URL,
  SITE_TITLE,
  TWITTER_USERNAME,
} from '@src/config/constant';

interface Props {
  title: string;
  excludeSiteTitle?: boolean;
  description: string;
  ogpDescription?: string;
  img?: { srcPath: string; src?: string } | { srcPath?: string; src: string };
}

export default function SEOMeta({
  title,
  excludeSiteTitle,
  description,
  ogpDescription,
  img,
}: Props) {
  const router = useRouter();
  return (
    <Head>
      <title>
        {title}
        {excludeSiteTitle || ` - ${SITE_TITLE}`}
      </title>
      <meta name="description" content={description} />
      <meta name="twitter:site" content={TWITTER_USERNAME} />
      <meta name="twitter:card" content={'summary_large_image'} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={SITE_TITLE} />
      <meta property="og:url" content={SITE_ROOT_URL + router.asPath} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={ogpDescription || description} />
      {img && (
        <meta
          property="og:image"
          content={img.srcPath ? `${SITE_ROOT_URL}${img.srcPath}` : img.src}
        />
      )}
    </Head>
  );
}
