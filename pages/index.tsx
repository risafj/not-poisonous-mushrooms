import type { GetStaticProps, NextPage } from 'next';
import 'tailwindcss/tailwind.css';
import { SupportedLocales } from '../@types/types';
import { HomeTemplate } from '../components/templates/homeTemplate';

const HomePage: NextPage<{locale: SupportedLocales}> = (props) => (<HomeTemplate { ...props }/>);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { ...params, locale: 'en' },
  };
};

export default HomePage;
