import React from 'react';
import { SupportedLocale } from '../../@types';

type Props = {
  locale: SupportedLocale
  children: JSX.Element
};

export const TranslationContext = React.createContext<{ locale: SupportedLocale }>({ locale: 'en' });
export const TranslationsWrapper = ({ locale, children }: Props) => {  
  return (
    <TranslationContext.Provider value={ { locale } } >
      { children } 
    </TranslationContext.Provider>
  );
};
