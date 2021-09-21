import React, { useContext } from 'react';
import Link from 'next/link';
import { SupportedLocale } from '../../@types';
import { pathFromComponents } from '../../utils/linking';
import { LocaleContext } from '../molecules/TranslationsWrapper';

type Props = {
  path: string
  children: any
  newLocale?: SupportedLocale
};

export const LocalizedLink = ({ path, children, newLocale }: Props) => {
  const { locale: currentLocale } = useContext(LocaleContext);
  return (
    <Link href={ pathFromComponents(currentLocale, path, newLocale) }>
      { children }
    </Link>
  );
};
