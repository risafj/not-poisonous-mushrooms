import { Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import { DrawerMenuItem } from '../molecules/DrawerMenuItem';
import { DrawerMenu } from './DrawerMenu';
import { AddBoxOutlined, ExitToAppOutlined, LocalOfferOutlined, MailOutlined } from '@mui/icons-material';
import { LanguagePicker } from '../molecules/LanguagePicker';
import { SupportedLocale } from '../../@types';
import { pathFromComponents } from '../../utils/linking';

type MenuProps = {
  locale: SupportedLocale
};
const Menu = React.memo<MenuProps>(({ locale }) => {
  const router = useRouter();

  // consider extracting to generic routing function
  const handleButtonPress = (path: string) => {
    router.push(pathFromComponents(locale, path));
  };

  return (
    <>
      <div className="hidden md:flex flex-row justify-between w-128">
        <LanguagePicker locale={ locale }/>
        <Button variant="text" color="secondary" onClick={ () => handleButtonPress('/login') }>
          Pricing
        </Button>
        <Button variant="text" color="secondary" onClick={ () => handleButtonPress('/login') }>
          Contact us
        </Button>
        <Button variant="contained" color="secondary" onClick={ () => handleButtonPress('/login') }>
          Login
        </Button>
      </div>
      <div className="md:hidden flex flex-grow justify-end mr-4" >
        <LanguagePicker locale={ locale }/>
      </div>
      <DrawerMenu className="md:hidden">
        <DrawerMenuItem icon={ <LocalOfferOutlined /> } label="Pricing" locale={ locale } path='/'/>
        <DrawerMenuItem icon={ <MailOutlined /> } label="Contact us" locale={ locale } path='/'/>
        <Divider variant="middle" />
        <DrawerMenuItem icon={ <AddBoxOutlined /> } label="Sign up" locale={ locale } path='/'/>
        <DrawerMenuItem icon={ <ExitToAppOutlined /> } label="Log in" locale={ locale } path='/login'/>
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
