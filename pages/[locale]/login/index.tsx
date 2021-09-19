import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { SupportedLocales } from '../../../@types/types';
import { LoginTemplate } from '../../../components/templates/loginTemplate';
import { createNonEnglishPaths } from '../../../supportedLocales';

const LoginPage: NextPage<{locale: SupportedLocales}> = (props) => (<LoginTemplate { ...props } />);

export const getStaticPaths: GetStaticPaths = () => createNonEnglishPaths();

// pass the params from the path (mainly, the value of [locale]) to the component
export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { ...params },
  };
};

export default LoginPage;
