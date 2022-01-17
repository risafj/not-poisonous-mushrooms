import type { GetStaticProps, NextPage } from 'next';
import { SupportedLocale } from '../@types';
import { Page } from '../components/atoms/Page';
import { HomeTemplate } from '../components/templates/home/HomeTemplate';

const HomePage: NextPage<{ locale: SupportedLocale }> = ({ locale }) => (
  <Page locale={ locale } seoTranslationKey='homepage'>
    <HomeTemplate />
  </Page>
);

export const getStaticProps: GetStaticProps<{ locale: SupportedLocale }> = ({ params }) => {
  return { props: { ...params, locale: 'en' } };
};

export default HomePage;
