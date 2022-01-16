import type { GetStaticProps, NextPage } from 'next';
import { SupportedLocale } from '../@types';
import { TranslationsWrapper } from '../components/page_wrappers/TranslationsWrapper';
import { HomeTemplate } from '../components/templates/home/HomeTemplate';

const HomePage: NextPage<{ locale: SupportedLocale }> = (props) => (
  <TranslationsWrapper locale={ props.locale }>
    <HomeTemplate { ...props }/>
  </TranslationsWrapper>
);

export const getStaticProps: GetStaticProps<{ locale: SupportedLocale }> = ({ params }) => {
  return { props: { ...params, locale: 'en' } };
};

export default HomePage;
