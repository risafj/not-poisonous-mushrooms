import { Button, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { Section } from '../../atoms/Section';
import { TranslatedText } from '../../atoms/TranslatedText';
import { TranslationContext } from '../../page_wrappers/TranslationsWrapper';
import { TextWithTypeEffect } from '../../atoms/TextWithTypeEffect';

export const HeroSection = () => {
  const { translation } = useContext(TranslationContext);
  return (
    <Section>

      <TranslatedText variant="h4" component="h2" className="py-20" >
        { translation.heroSection.tagline }
      </TranslatedText>

      <div className='my-8'>
        <TextWithTypeEffect 
          fixedText='For when you need '
          fixedTextClass='font-thin'
          text={ ['Maitake', 'Shiitake', 'Toadstools'] }
          textClass={ 'font-bold' }
        /> 
      </div>

      <div className="flex flex-col md:flex-row md:justify-center">
        <label htmlFor='email-input' className='hidden'>Email Address Input</label>
        <TextField id='email-input' aria-label={ translation.heroSection.emailAddressPlaceholder } label={ translation.heroSection.emailAddressPlaceholder } variant="outlined" className="flex-grow max-w-lg mb-4 md:mr-4 md:mb-0"/>
        <Button variant='contained' className='flex w-40 self-center md:self-auto'>{ translation.heroSection.actionButton }</Button>
      </div>
    </Section>
  );
};
