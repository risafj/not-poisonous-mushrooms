import React, { useContext } from 'react';
import { TopLevelTemplate } from '../../../@types';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { Button, TextField } from '@mui/material';
import { Header } from '../../compounds/Header';
import { TranslationContext } from '../../page_wrappers/TranslationsWrapper';

export const LoginTemplate: TopLevelTemplate = ({ locale }) => {
  const { translation } = useContext(TranslationContext);
  return (
    <div className="h-screen min-h-screen px-2 flex flex-col items-center">
      <Head>
        <title>{ translation.loginSEO.title }</title>
        <meta name="description" content={ translation.loginSEO.description } />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col pt-10 px-4 justify-start">
        <Header/>

        <pre>
          { locale === 'en' ? 'English Login' : '日本語 Baybeeee' }
        </pre>

        <p className="text-3xl py-20">
          Log in to buy even more mushrooms!
        </p>

        <div className="flex flex-col md:flex-row">
          <TextField label="Email address" variant="outlined" className="flex-grow mb-4 md:mr-4 md:mb-0"/>
          <Button variant="contained" className="flex w-40 self-center md:self-auto">Start now</Button>
        </div>
      </main>

      <footer className="pt-10">
        Risa and Rob
      </footer>
    </div>
  );
};
