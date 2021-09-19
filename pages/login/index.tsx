import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { SupportedLocales } from '../../@types/types';
import { LoginTemplate } from '../../components/templates/loginTemplate';

const LoginPage: NextPage<{locale: SupportedLocales}> = (props) => (<LoginTemplate { ...props } />);

export const getStaticProps: GetStaticProps<{locale: SupportedLocales}> = async ({ params }) => {
  return {
    props: { ...params, locale: 'en' },
  };
};

export default LoginPage;
