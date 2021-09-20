import type { GetStaticProps, NextPage } from 'next';
import 'tailwindcss/tailwind.css';
import { SupportedLocales } from '../@types';
import { HomeTemplate } from '../components/templates/HomeTemplate';

const HomePage: NextPage<{locale: SupportedLocales}> = (props) => (<HomeTemplate { ...props }/>);

export const getStaticProps: GetStaticProps<{locale: SupportedLocales}> = ({ params }) => {
  return {
    props: { ...params, locale: 'en' },
  };
};

export default HomePage;
