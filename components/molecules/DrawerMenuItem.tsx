import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import React from 'react';
import { SupportedLocale } from '../../@types';
import { LocalizedLink } from '../atoms/LocalizedLink';

type Props = {
  icon: React.ReactNode
  label: string
  locale: SupportedLocale
  path: string
};

export const DrawerMenuItem = ({ icon, label, locale, path }: Props) => {
  return (
    <LocalizedLink currentLocale={ locale } path={ path }>
      <MenuItem>
        <ListItemIcon>
          { icon }
        </ListItemIcon>
        <ListItemText>
          { label }
        </ListItemText>
      </MenuItem>
    </LocalizedLink>
  );
};
