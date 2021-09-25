import { ListItemIcon, ListItemText, MenuItem, MenuItemProps } from '@mui/material';
import React from 'react';

type Props = {
  icon: React.ReactNode
  label: string
  onClick: () => void
} & MenuItemProps;

export const DrawerMenuItem = ({ icon, label, onClick, ...props }: Props) => {
  return (
    <MenuItem onClick={ onClick } { ...props }>
      <ListItemIcon>
        { icon }
      </ListItemIcon>
      <ListItemText>
        { label }
      </ListItemText>
    </MenuItem>
  );
};
