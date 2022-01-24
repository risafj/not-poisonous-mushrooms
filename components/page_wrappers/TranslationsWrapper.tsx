import React, { useEffect } from 'react';
import { SupportedLocale } from '../../@types';
import { LanguageSpecificSEO, LanguageSpecificTranslation, seoTranslations, translations } from '../../utils/translations';

type Props = {
  locale: SupportedLocale
  children: JSX.Element | JSX.Element[]
};

export const TranslationContext = React.createContext<{
  locale: SupportedLocale, translation: LanguageSpecificTranslation, seoTranslation: LanguageSpecificSEO,
}>({ locale: 'en', translation: translations.en, seoTranslation: seoTranslations.en });

export const TranslationsWrapper = ({ locale, children }: Props) => {  
  useEffect(() => {
    document.documentElement.lang = locale;
  });
  return (
    <TranslationContext.Provider value={ { locale, translation: translations[locale], seoTranslation: seoTranslations[locale] } } >
      { children } 
    </TranslationContext.Provider>
  );
};
