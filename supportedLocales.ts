import { GetStaticProps } from "next";
import { SupportedLocale } from "./@types";

const supportedNonEnglishLocales = ['ja'];

export const createNonEnglishPaths = () => {
  // In the filepath, we have [locale].
  // In NextJS, file names with [KEY] means that we expect
  // to fill that data in at compile time.
  // The "getStatic" methods are run at compile time.
  // To fill in the [KEY], we must return an array of objects.
  // In this case the array would look like this:
  // [{ params: { locale: 'en' } }, { params: { locale: 'ja' } }]
  return {
    paths: supportedNonEnglishLocales.map(localeString => ({ params: { locale: localeString } })),
    // Render 404. Rendering anything else is not supported on static sites.
    fallback: false
  };
};

export const staticEnglishProps: GetStaticProps<{ locale: SupportedLocale }> = ({ params }) => (
  { props: { ...params, locale: 'en' } }
);

type LanguageDefinition = { code: SupportedLocale, displayName: string };

export const languageDefinitions: LanguageDefinition[] = [
  {
    code: 'en',
    displayName: 'English'
  },
  {
    code:'ja',
    displayName: '日本語' 
  }
];
