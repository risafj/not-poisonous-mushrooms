import Head from 'next/head';
import React, { useContext } from 'react';
import 'tailwindcss/tailwind.css';
import { TopLevelTemplate } from '../../../@types';
import { Section } from '../../atoms/Section';
import { TranslatedText } from '../../atoms/TranslatedText';
import { TranslationContext } from '../../page_wrappers/TranslationsWrapper';
import { FeaturesSection } from './_features_section';
import { HeroSection } from './_hero_section';
import { PricingSection } from './_pricing_section';

export const HomeTemplate: TopLevelTemplate = () => {
  const { translation } = useContext(TranslationContext);
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
        <PricingSection />
      </main>

      <Section>
        <TranslatedText>
          { translation.footer.credits }
        </TranslatedText>
      </Section>
    </div>
  );
};
