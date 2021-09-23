import { Button, Divider } from '@mui/material';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { DrawerMenuItem } from '../molecules/DrawerMenuItem';
import { DrawerMenu } from './DrawerMenu';
import { AddBoxOutlined, ExitToAppOutlined, LocalOfferOutlined, MailOutlined } from '@mui/icons-material';
import { LanguagePicker } from '../molecules/LanguagePicker';
import { pathFromComponents } from '../../utils/linking';
import { TranslationContext } from '../page_wrappers/TranslationsWrapper';
import { TranslatedText } from '../atoms/TranslatedText';

const Menu = React.memo(() => {
  const router = useRouter();
  const { locale, translation } = useContext(TranslationContext);
  // consider extracting to generic routing function
  const handleButtonPress = (path: string, hash?: string) => {
    router.push({
      pathname: pathFromComponents(locale, path),
      hash: hash
    });
  };

  return (
    <>
      <div className="hidden md:flex flex-row justify-between w-128">
        <LanguagePicker />
        <Button variant="text" color="secondary" onClick={ () => handleButtonPress('/', 'pricing') }>
          { translation.header.pricing }
        </Button>
        <Button variant="text" color="secondary" onClick={ () => handleButtonPress('/login') }>
          { translation.header.contactUs }
        </Button>
        <Button variant="contained" color="secondary" onClick={ () => handleButtonPress('/login') }>
          { translation.header.login }
        </Button>
      </div>
      <div className="md:hidden flex flex-grow justify-end mr-4" >
        <LanguagePicker/>
      </div>
      <DrawerMenu className="md:hidden">
        <DrawerMenuItem icon={ <LocalOfferOutlined /> } label={ translation.header.pricing } onClick={ async () => handleButtonPress('/', 'pricing') } />
        <DrawerMenuItem icon={ <MailOutlined /> } label={ translation.header.contactUs } onClick={ async () => handleButtonPress('/login') } />
        <Divider variant="middle" />
        <DrawerMenuItem icon={ <AddBoxOutlined /> } label={ translation.header.signUp } onClick={ async () => handleButtonPress('/login') } />
        <DrawerMenuItem icon={ <ExitToAppOutlined /> } label={ translation.header.login } onClick={ async () => handleButtonPress('/login') } />
      </DrawerMenu>
    </>
  );
});

Menu.displayName = 'Menu';

// TODO: If we end up having menus with different items, we should make that a prop
export const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <TranslatedText variant="h3" component="h1">
        NPM
      </TranslatedText>
      <Menu/>
    </div>
  );
};
