import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import React from 'react';

type Props = {
  icon: React.ReactNode
  label: string
}

export const DrawerMenuItem = ({ icon, label }: Props) => {
  return (
    <>
      <MenuItem>
        <ListItemIcon>
          { icon }
        </ListItemIcon>
        <ListItemText>{ label }</ListItemText>
      </MenuItem>
    </>
  );
};
