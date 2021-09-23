import React from 'react';
import { SupportedLocale } from '../../@types';
import { LanguageSpecificTranslation, translations } from '../../utils/translations';

type Props = {
  locale: SupportedLocale
  children: JSX.Element
};

export const TranslationContext = React.createContext<{
  locale: SupportedLocale, translation: LanguageSpecificTranslation
}>({ locale: 'en', translation: translations.en });

export const TranslationsWrapper = ({ locale, children }: Props) => {  
  return (
    <TranslationContext.Provider value={ { locale, translation: translations[locale] } } >
      { children } 
    </TranslationContext.Provider>
  );
};
