import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { SupportedLocale } from '../../@types';
import { LoginTemplate } from '../../components/templates/LoginTemplate';
import { staticEnglishProps } from '../../utils/supportedLocales';

const LoginPage: NextPage<{ locale: SupportedLocale }> = (props) => (<LoginTemplate { ...props } />);

export const getStaticProps: GetStaticProps<{ locale: SupportedLocale }> = staticEnglishProps;

export default LoginPage;
