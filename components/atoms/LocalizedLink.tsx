import React from "react";
import Link from 'next/link';
import { SupportedLocale } from "../../@types";

type Props = {
  currentLocale: SupportedLocale
  path: string
  children: any
  newLocale?: SupportedLocale
};

export const LocalizedLink = ({ currentLocale, path, children, newLocale }: Props) => {
  // if current locale is en, remove from path
  let outgoingLocale = currentLocale === 'en' ? '' : `/${currentLocale}`;
  if (newLocale) {
    // if new locale is en, remove from path
    outgoingLocale = newLocale === 'en' ? '' : `${newLocale}`;
  }
  return (
    <Link href={ `${outgoingLocale}${path}` }>
      { children }
    </Link>
  );
};
