import { Button, Divider, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { DrawerMenuItem } from '../molecules/DrawerMenuItem';
import { DrawerMenu } from './DrawerMenu';
import { AddBoxOutlined, ExitToAppOutlined, LocalOfferOutlined, MailOutlined } from '@mui/icons-material';
import { LanguagePicker } from '../molecules/LanguagePicker';
import { pathFromComponents } from '../../utils/linking';
import { LocaleContext } from '../molecules/TranslationsWrapper';

const Menu = React.memo(() => {
  const router = useRouter();
  const { locale } = useContext(LocaleContext);
  // consider extracting to generic routing function
  const handleButtonPress = (path: string) => {
    router.push(pathFromComponents(locale, path));
  };

  return (
    <>
      <div className="hidden md:flex flex-row justify-between w-128">
        <LanguagePicker />
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
        <LanguagePicker/>
      </div>
      <DrawerMenu className="md:hidden">
        <DrawerMenuItem icon={ <LocalOfferOutlined /> } label="Pricing" path='/'/>
        <DrawerMenuItem icon={ <MailOutlined /> } label="Contact us" path='/'/>
        <Divider variant="middle" />
        <DrawerMenuItem icon={ <AddBoxOutlined /> } label="Sign up" path='/'/>
        <DrawerMenuItem icon={ <ExitToAppOutlined /> } label="Log in" path='/login'/>
      </DrawerMenu>
    </>
  );
});

Menu.displayName = 'Menu';

// TODO: If we end up having menus with different items, we should make that a prop
export const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <Typography variant="h3" component="h1">
        NPM
      </Typography>
      <Menu/>
    </div>
  );
};
