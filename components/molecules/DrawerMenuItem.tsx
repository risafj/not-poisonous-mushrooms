import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import React from 'react';
import { LocalizedLink } from '../atoms/LocalizedLink';

type Props = {
  icon: React.ReactNode
  label: string
  path: string
};

export const DrawerMenuItem = ({ icon, label, path }: Props) => {
  return (
    <LocalizedLink path={ path }>
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
