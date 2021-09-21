import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import React, { useContext } from 'react';
import { LocalizedLink } from '../atoms/LocalizedLink';
import { LocaleContext } from './TranslationsWrapper';

type Props = {
  icon: React.ReactNode
  label: string
  path: string
};

export const DrawerMenuItem = ({ icon, label, path }: Props) => {
  const locale = useContext(LocaleContext).locale;
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
