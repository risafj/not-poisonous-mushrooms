import { Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { TopLevelTemplate } from '../../../@types';
import { Section } from '../../atoms/Section';
import { FeaturesSection } from './_features_section';
import { HeroSection } from './_hero_section';

export const HomeTemplate: TopLevelTemplate = () => {
  return (
    <div className="h-screen min-h-screen px-2 flex flex-col items-center">
      <Head>
        <title>NPM</title>
        <meta name="description" content="Mushroom subscription service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-start">
        <HeroSection />
        <FeaturesSection />
      </main>

      <Section>
        <Typography>
          Risa and Rob
        </Typography>
      </Section>
    </div>
  );
};
