import { Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { DrawerMenuItem } from '../molecules/DrawerMenuItem';
import { DrawerMenu } from './DrawerMenu';
import { AddBoxOutlined, ExitToAppOutlined, LocalOfferOutlined, MailOutlined } from '@mui/icons-material';
import { LanguagePicker } from '../molecules/LanguagePicker';
import { SupportedLocale } from '../../@types';

type MenuProps = {
  locale: SupportedLocale
};
const Menu = React.memo<MenuProps>(({ locale }) => {
  return (
    <>
      <div className="hidden md:flex flex-row justify-between w-128">
        <LanguagePicker locale={ locale }/>
        <Button variant="text" color="secondary">
          Pricing
        </Button>
        <Button variant="text" color="secondary">
          Contact us
        </Button>
        <Button variant="contained" color="secondary">
          Login
        </Button>
      </div>
      <div className="md:hidden flex flex-grow justify-end mr-4" >
        <LanguagePicker locale={ locale }/>
      </div>
      <DrawerMenu className="md:hidden">
        <DrawerMenuItem icon={ <LocalOfferOutlined /> } label="Pricing" />
        <DrawerMenuItem icon={ <MailOutlined /> } label="Contact us" />
        <Divider variant="middle" />
        <DrawerMenuItem icon={ <AddBoxOutlined /> } label="Sign up" />
        <DrawerMenuItem icon={ <ExitToAppOutlined /> } label="Log in" />
      </DrawerMenu>
    </>
  );
});

Menu.displayName = 'Menu';

// TODO: If we end up having menus with different items, we should make that a prop
type HeaderProps = {
  locale: SupportedLocale
};
export const Header = ({ locale }: HeaderProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <Typography variant="h3" component="h1">
        NPM
      </Typography>
      <Menu locale={ locale }/>
    </div>
  );
};
