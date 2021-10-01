import React from 'react';
import { Options as TypewriterOptions } from 'typewriter-effect';
import { TranslatedText } from './TranslatedText';
import Typewriter from 'typewriter-effect';

type Props = {
  text: string[]
  textClass?: string
  fixedText?: string
  fixedTextClass?: string
} & TypewriterOptions; 

export const TextWithTypeEffect = ({ fixedText, fixedTextClass, text, textClass, ...props }:Props) => {
  // typewriter with any classes
  // then loop over the add/delete
  const strings = text.map(item => (
    `<span class=${textClass}>${item}</span>`
  ));
  return (
    <span>
      { fixedText && <TranslatedText component='span' className={ fixedTextClass } >
        { fixedText }
      </TranslatedText> }
      <Typewriter
        component='span'
        options={ {
          autoStart: true,
          loop: true,
          deleteSpeed: 8,
          strings,
          ...props
        } }
      />        
    </span>
  );
};
