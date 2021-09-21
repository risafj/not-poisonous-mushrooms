import React from 'react';
import { SupportedLocale } from '../../@types';

type Props = {
  locale: SupportedLocale
  children: JSX.Element
};

export const LocaleContext = React.createContext<{ locale: SupportedLocale }>({ locale: 'en' });
export const TranslationsWrapper = ({ locale, children }: Props) => {  
  return (
    <LocaleContext.Provider value={ { locale } } >
      { children } 
    </LocaleContext.Provider>
  );
};
