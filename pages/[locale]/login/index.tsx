import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { SupportedLocale } from '../../../@types/';
import { TranslationsWrapper } from '../../../components/page_wrappers/TranslationsWrapper';
<<<<<<< HEAD
import { LoginTemplate } from '../../../components/templates/LoginTemplate';
import { createNonEnglishPaths } from '../../../utils/supportedLocales';
=======
import { LoginTemplate } from '../../../components/templates/login/LoginTemplate';
import { createNonEnglishPaths } from '../../../supportedLocales';
>>>>>>> f2eca06 (refactor: Move LoginTemplate into /templates/login folder)

const LoginPage: NextPage<{ locale: SupportedLocale }> = (props) => (
  <TranslationsWrapper locale={ props.locale }>
    <LoginTemplate { ...props } />
  </TranslationsWrapper>
);

export const getStaticPaths: GetStaticPaths = createNonEnglishPaths;

// pass the params from the path (mainly, the value of [locale]) to the component
export const getStaticProps: GetStaticProps = ({ params }) => ({ props: { ...params } });

export default LoginPage;
