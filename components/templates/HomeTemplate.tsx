import { Button, TextField, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { TopLevelTemplate } from '../../@types';
import { Section } from '../atoms/Section';
import { Header } from '../compounds/Header';

export const HomeTemplate: TopLevelTemplate = (props) => {
  return (
    <div className="h-screen min-h-screen px-2 flex flex-col items-center">
      <Head>
        <title>NPM</title>
        <meta name="description" content="Mushroom subscription service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-start">
        <Section>
          <Header />

          <Typography variant="h4" component="h2" className="py-20">
            Premium { props.locale === 'en' ? 'mushrooms' : '椎茸' } at your doorstep, every month.
          </Typography>

          <div className="flex flex-col md:flex-row">
            <TextField label="Email address" variant="outlined" className="flex-grow mb-4 md:mr-4 md:mb-0"/>
            <Button variant="contained" className="flex w-40 self-center md:self-auto">Start now</Button>
          </div>
        </Section>

        <Section backgroundColor="primary.background">
          <Typography>Test</Typography>
        </Section>
      </main>

      <Section>
        <Typography>
          Risa and Rob
        </Typography>
      </Section>
    </div>
  );
};
