import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { SupportedLocale } from '../../@types';
import { Page } from '../../components/atoms/Page';
import { LoginTemplate } from '../../components/templates/login/LoginTemplate';
import { staticEnglishProps } from '../../utils/supportedLocales';

const LoginPage: NextPage<{ locale: SupportedLocale }> = ({ locale }) => (
  <Page locale={ locale } seoTranslationKey='login' >
    <LoginTemplate />
  </Page >
);

export const getStaticProps: GetStaticProps<{ locale: SupportedLocale }> = staticEnglishProps;

export default LoginPage;
