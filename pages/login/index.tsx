import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { SupportedLocale } from '../../@types';
import { TranslationsWrapper } from '../../components/page_wrappers/TranslationsWrapper';
import { LoginTemplate } from '../../components/templates/LoginTemplate';
import { staticEnglishProps } from '../../supportedLocales';

const LoginPage: NextPage<{ locale: SupportedLocale }> = (props) => (
  <TranslationsWrapper locale={ props.locale }>
    <LoginTemplate { ...props } />
  </TranslationsWrapper>
);

export const getStaticProps: GetStaticProps<{ locale: SupportedLocale }> = staticEnglishProps;

export default LoginPage;
