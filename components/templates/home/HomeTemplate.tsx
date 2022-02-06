import React, { useContext } from 'react';
import { Section } from '../../atoms/Section';
import { TranslatedText } from '../../atoms/TranslatedText';
import { Header } from '../../compounds/Header';
import { TranslationContext } from '../../page_wrappers/TranslationsWrapper';
import { DemoSection } from './_demo_section';
import { FeaturesSection } from './_features_section';
import { HeroSection } from './_hero_section';
import { PricingSection } from './_pricing_section';

export const HomeTemplate = () => {
  const { translation } = useContext(TranslationContext);
  return (
    <div className="h-screen min-h-screen px-2 flex flex-col items-center">
      <main className="flex flex-col justify-start">
        <Header/>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <DemoSection />
      </main>

      <Section>
        <TranslatedText>
          { translation.footer.credits }
        </TranslatedText>
      </Section>
    </div>
  );
};
