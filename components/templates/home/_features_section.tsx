import React from 'react';
import Image from 'next/image';
import { assetUrls } from '../../../utils/assetUrls';
import { Section } from '../../atoms/Section';
import { FeatureSection } from '../../molecules/FeatureSection';

export const FeaturesSection = () => {
  return (
    <>
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
    </>
  );
};
