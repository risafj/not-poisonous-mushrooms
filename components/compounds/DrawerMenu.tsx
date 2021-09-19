import { Menu } from '@mui/icons-material';
import { Drawer, IconButton } from '@mui/material';
import React, { useCallback, useState } from 'react';

type Props = {
  children: React.ReactNode
}

export const DrawerMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <>
      <IconButton onClick={ toggleDrawer }>
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        variant="temporary"
        open={ isOpen }
        ModalProps={ { onBackdropClick: toggleDrawer } }
      >
        <div className="w-56 mt-6">
          { props.children }
        </div>
      </Drawer>
    </>
  );
};
