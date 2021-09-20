import { Button, TextField, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { TopLevelTemplate } from '../../@types';
import { assetUrls } from '../../utils/assetUrls';
import { Section } from '../atoms/Section';
import { Header } from '../compounds/Header';
import { FeatureSection } from '../molecules/FeatureSection';

export const HomeTemplate: TopLevelTemplate = ({ locale }) => {
  return (
    <div className="h-screen min-h-screen px-2 flex flex-col items-center">
      <Head>
        <title>NPM</title>
        <meta name="description" content="Mushroom subscription service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-start">
        <Section>
          <Header locale={ locale } />

          <Typography variant="h4" component="h2" className="py-20">
            Premium { locale === 'en' ? 'mushrooms' : '椎茸' } at your doorstep, every month.
          </Typography>

          <div className="flex flex-col md:flex-row md:justify-center">
            <TextField label="Email address" variant="outlined" className="flex-grow max-w-lg mb-4 md:mr-4 md:mb-0"/>
            <Button variant="contained" className="flex w-40 self-center md:self-auto">Start now</Button>
          </div>
        </Section>
        <Section backgroundColor="primary.background">
          <FeatureSection
            text="Organic, locally sourced, free-range mushrooms."
            imageElement={
              <Image
                src={ assetUrls.happyMushroom }
                alt="happy mushroom"
                width={ 200 }
                height={ 200 }
              />
            }
          />
        </Section>
        <Section>
          <FeatureSection
            text="Our QA teams ensure that the mushrooms are not poisonous."
            imageElement={
              <iframe
                width="560"
                height="315"
                src={ assetUrls.qaTeam }
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            }
            isImageOnLeft
          />
        </Section>
        <Section backgroundColor="primary.background">
          <FeatureSection
            text="Loreming the ipsums. There should be 3 sections."
            imageElement={
              <Image
                src={ assetUrls.happyMushroom }
                alt="dancing mushroom"
                width={ 200 }
                height={ 200 }
              />
            }
          />
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
