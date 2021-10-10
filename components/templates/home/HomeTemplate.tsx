import Head from 'next/head';
import React, { useContext } from 'react';
import 'tailwindcss/tailwind.css';
import { TopLevelTemplate } from '../../../@types';
import { assetUrls } from '../../../utils/assetUrls';
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
        <title>{ translation.homepageSEO.title }</title>
        <meta name="description" content={ translation.homepageSEO.description }/>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="npm.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Not Poisonous Mushrooms" />
        <meta property="og:description" content="Premium mushroom subscription service" />
        <meta property="og:image" content={ assetUrls.ogp } />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta name="twitter:title" content="Not Poisonous Mushrooms" />
        <meta name="twitter:card" content="summary_large_image" />
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
