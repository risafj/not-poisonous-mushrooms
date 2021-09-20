import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { SupportedLocale } from '../../../@types/';
import { LoginTemplate } from '../../../components/templates/LoginTemplate';
import { createNonEnglishPaths } from '../../../supportedLocales';

const LoginPage: NextPage<{ locale: SupportedLocale }> = (props) => (<LoginTemplate { ...props } />);

export const getStaticPaths: GetStaticPaths = createNonEnglishPaths;

// pass the params from the path (mainly, the value of [locale]) to the component
export const getStaticProps: GetStaticProps = ({ params }) => ({ props: { ...params } });

export default LoginPage;
