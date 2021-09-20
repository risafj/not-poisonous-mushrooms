import { SupportedLocale } from "../@types";

export const pathFromComponents = (currentLocale: SupportedLocale, path: string, newLocale?: SupportedLocale) => {
  // if current locale is en, remove from path
  let outgoingLocale = currentLocale === 'en' ? '' : `/${currentLocale}`;
  if (newLocale) {
  // if new locale is en, remove from path
    outgoingLocale = newLocale === 'en' ? '' : `${newLocale}`;
  }
  return `${outgoingLocale}${path}`;
};
