import React from 'react';
import Link from 'next/link';
import { SupportedLocale } from '../../@types';
import { pathFromComponents } from '../../utils/linking';

type Props = {
  currentLocale: SupportedLocale
  path: string
  children: any
  newLocale?: SupportedLocale
};

export const LocalizedLink = ({ currentLocale, path, children, newLocale }: Props) => {
  return (
    <Link href={ pathFromComponents(currentLocale, path, newLocale) }>
      { children }
    </Link>
  );
};
