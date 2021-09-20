import type { GetStaticProps, NextPage } from 'next';
import 'tailwindcss/tailwind.css';
import { SupportedLocale } from '../@types';
import { HomeTemplate } from '../components/templates/HomeTemplate';

const HomePage: NextPage<{ locale: SupportedLocale }> = (props) => (<HomeTemplate { ...props }/>);

export const getStaticProps: GetStaticProps<{ locale: SupportedLocale }> = ({ params }) => {
  return { props: { ...params, locale: 'en' }, };
};

export default HomePage;
