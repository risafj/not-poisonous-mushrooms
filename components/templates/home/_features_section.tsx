import React, { useContext } from 'react';
import Image from 'next/image';
import { assetUrls } from '../../../utils/assetUrls';
import { Section } from '../../atoms/Section';
import { FeatureSection } from '../../molecules/FeatureSection';
import { TranslationContext } from '../../page_wrappers/TranslationsWrapper';

export const FeaturesSection = () => {
  const { translation } = useContext(TranslationContext);

  return (
    <>
      <Section backgroundColor="primary.background">
        <FeatureSection
          text={ translation.featureSection.featureOne }
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
          text={ translation.featureSection.featureTwo }
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
          text={ translation.featureSection.featureThree }
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
    </>
  );
};
