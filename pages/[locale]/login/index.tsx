import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { SupportedLocale } from '../../../@types/';
import { Page } from '../../../components/atoms/Page';
import { LoginTemplate } from '../../../components/templates/login/LoginTemplate';
import { createNonEnglishPaths } from '../../../utils/supportedLocales';

const LoginPage: NextPage<{ locale: SupportedLocale }> = ({ locale }) => (
  <Page locale={ locale } seoTranslationKey='login'>
    <LoginTemplate/>
  </Page>
);

export const getStaticPaths: GetStaticPaths = createNonEnglishPaths;

// pass the params from the path (mainly, the value of [locale]) to the component
export const getStaticProps: GetStaticProps = ({ params }) => ({ props: { ...params } });

export default LoginPage;
