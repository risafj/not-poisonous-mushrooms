import { Button, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Section } from '../../atoms/Section';
import { Header } from '../../compounds/Header';
import { TranslationContext } from '../../page_wrappers/TranslationsWrapper';

export const HeroSection = () => {
  const { locale } = useContext(TranslationContext);

  return (
    <Section>
      <Header/>

      <Typography variant="h4" component="h2" className="py-20">
        Premium { locale === 'en' ? 'mushrooms' : '椎茸' } at your doorstep, every month.
      </Typography>

      <div className="flex flex-col md:flex-row md:justify-center">
        <TextField label="Email address" variant="outlined" className="flex-grow max-w-lg mb-4 md:mr-4 md:mb-0"/>
        <Button variant="contained" className="flex w-40 self-center md:self-auto">Start now</Button>
      </div>
    </Section>
  );
};
