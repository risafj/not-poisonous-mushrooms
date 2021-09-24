import { Menu } from '@mui/icons-material';
import { Drawer, IconButton } from '@mui/material';
import React, { useCallback, useState } from 'react';

type Props = {
  children: React.ReactNode
  className?: string
};

export const DrawerMenu = ({ children, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <div className={ className }>
      <IconButton onClick={ toggleDrawer } aria-label='Toggle Menu'>
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        variant="temporary"
        open={ isOpen }
        ModalProps={ { onBackdropClick: toggleDrawer, disableRestoreFocus: true } }
      >
        <div className="w-56 mt-6">
          { children }
        </div>
      </Drawer>
    </div>
  );
};
