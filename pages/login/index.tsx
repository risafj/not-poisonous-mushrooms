import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { SupportedLocales } from '../../@types';
import { LoginTemplate } from '../../components/templates/LoginTemplate';
import { staticEnglishProps } from '../../supportedLocales';

const LoginPage: NextPage<{locale: SupportedLocales}> = (props) => (<LoginTemplate { ...props } />);

export const getStaticProps: GetStaticProps<{locale: SupportedLocales}> = staticEnglishProps;

export default LoginPage;
