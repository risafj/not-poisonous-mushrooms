import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { SupportedLocales } from '../../@types';
import { HomeTemplate } from '../../components/templates/HomeTemplate';
import { createNonEnglishPaths } from '../../supportedLocales';

const HomePage: NextPage<{locale: SupportedLocales}> = (props) => (<HomeTemplate { ...props } />);

export const getStaticPaths: GetStaticPaths = createNonEnglishPaths;

// pass the params from the path (mainly, the value of [locale]) to the component
export const getStaticProps: GetStaticProps = ({ params }) => ({ props: { ...params } });

export default HomePage;
