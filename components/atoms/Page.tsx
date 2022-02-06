import type { NextPage } from 'next';
import { SupportedLocale } from '../../@types';
import { LanguageSpecificSEO } from '../../utils/translations';
import { ModalWrapper } from '../page_wrappers/ModalWrapper';
import { TranslationsWrapper } from '../page_wrappers/TranslationsWrapper';
import { Seo } from '../Seo';
// each page needs seo rules, and translations wrappers.

export const Page: NextPage<{ locale: SupportedLocale, seoTranslationKey: keyof LanguageSpecificSEO, children: JSX.Element }> = ({ locale, children, seoTranslationKey }) => {
  return (
    <TranslationsWrapper locale={ locale }>
      <Seo seoTranslationKey={ seoTranslationKey }/>
      <ModalWrapper>
        { children }
      </ModalWrapper>
    </TranslationsWrapper>
  );
};
