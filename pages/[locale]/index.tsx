import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { SupportedLocale } from '../../@types';
import { Page } from '../../components/atoms/Page';
import { HomeTemplate } from '../../components/templates/home/HomeTemplate';
import { createNonEnglishPaths } from '../../utils/supportedLocales';

const HomePage: NextPage<{ locale: SupportedLocale }> = ({ locale }) => (
  <Page locale={ locale } seoTranslationKey='homepage'>
    <HomeTemplate />
  </Page>
);

export const getStaticPaths: GetStaticPaths = createNonEnglishPaths;

// pass the params from the path (mainly, the value of [locale]) to the component
export const getStaticProps: GetStaticProps = ({ params }) => ({ props: { ...params } });

export default HomePage;
