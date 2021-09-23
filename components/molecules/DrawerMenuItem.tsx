import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import React from 'react';

type Props = {
  icon: React.ReactNode
  label: string
  onClick: () => {}
};

export const DrawerMenuItem = ({ icon, label, onClick }: Props) => {
  return (
    <MenuItem onClick={ onClick }>
      <ListItemIcon>
        { icon }
      </ListItemIcon>
      <ListItemText>
        { label }
      </ListItemText>
    </MenuItem>
  );
};
