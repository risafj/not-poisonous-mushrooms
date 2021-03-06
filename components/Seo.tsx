import React, { useContext } from 'react';
import Head from 'next/head';
import { assetUrls } from '../utils/assetUrls';
import { LanguageSpecificSEO } from '../utils/translations';
import { TranslationContext } from './page_wrappers/TranslationsWrapper';

type Props = {
  seoTranslationKey: keyof LanguageSpecificSEO
};

export const Seo = ({ seoTranslationKey }: Props) => {
  const { seoTranslation } = useContext(TranslationContext);
  return (
    <Head>
      <title>{ seoTranslation[seoTranslationKey].title }</title>
      <meta name="description" content={ seoTranslation[seoTranslationKey].description }/>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content="learnkichi.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ seoTranslation[seoTranslationKey].title } />
      <meta property="og:description" content={ seoTranslation[seoTranslationKey].description } />
      <meta property="og:image" content={ assetUrls.ogp } />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="315" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
