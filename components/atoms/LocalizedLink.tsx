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
  let outgoingLocale = `/${currentLocale}`;
  if(newLocale) {
    outgoingLocale = newLocale === 'en' ? '' : `${newLocale}`;
  }
  return (
    <Link href={ `${outgoingLocale}/${path}` }>
      { children }
    </Link>
  );
  // else, redirect with the new locale
};
