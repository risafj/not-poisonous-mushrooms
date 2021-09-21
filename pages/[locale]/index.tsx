import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { SupportedLocale } from '../../@types';
import { TranslationsWrapper } from '../../components/page_wrappers/TranslationsWrapper';
import { HomeTemplate } from '../../components/templates/home/HomeTemplate';
import { createNonEnglishPaths } from '../../supportedLocales';

const HomePage: NextPage<{ locale: SupportedLocale }> = (props) => (
  <TranslationsWrapper locale={ props.locale }>
    <HomeTemplate { ...props } />
  </TranslationsWrapper>
);

export const getStaticPaths: GetStaticPaths = createNonEnglishPaths;

// pass the params from the path (mainly, the value of [locale]) to the component
export const getStaticProps: GetStaticProps = ({ params }) => ({ props: { ...params } });

export default HomePage;
