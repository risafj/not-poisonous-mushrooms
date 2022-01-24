import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { Header } from '../../compounds/Header';
import { TranslationContext } from '../../page_wrappers/TranslationsWrapper';
import { TranslatedText } from '../../atoms/TranslatedText';

export const LoginTemplate = () => {
  const { translation } = useContext(TranslationContext);
  return (
    <div className="h-screen min-h-screen px-2 flex flex-col items-center">

      <main className="flex flex-col pt-10 px-4 justify-start">
        <Header/>
        <p className="text-3xl py-20">
          { translation.loginPage.loginTagline }
        </p>

        <div className="flex flex-col md:flex-row">
          <TextField label={ translation.heroSection.emailAddressPlaceholder } variant="outlined" className="flex-grow mb-4 md:mr-4 md:mb-0"/>
          <Button variant="contained" className="flex w-40 self-center md:self-auto">{ translation.heroSection.actionButton }</Button>
        </div>
      </main>

      <footer className="pt-10">
        <TranslatedText>
          { translation.footer.credits }
        </TranslatedText>
      </footer>
    </div>
  );
};
