import React from 'react';
import Head from 'next/head';
import { assetUrls } from '../utils/assetUrls';

type Props = {
  title: string
  description: string
};

export const Seo = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{ title }</title>
      <meta name="description" content={ description }/>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content="npm.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ title } />
      <meta property="og:description" content={ description } />
      <meta property="og:image" content={ assetUrls.ogp } />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="315" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
