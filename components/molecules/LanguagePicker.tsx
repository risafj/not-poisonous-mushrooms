import { Language } from '@mui/icons-material';
import { SelectChangeEvent, MenuItem, Select } from '@mui/material';
import React, { useCallback, useContext } from 'react';
import { SupportedLocale } from '../../@types';
import { useRouter } from 'next/router';
import { languageDefinitions } from '../../utils/supportedLocales';
import { pathFromComponents } from '../../utils/linking';
import { TranslationContext } from '../page_wrappers/TranslationsWrapper';
import { TranslatedText } from '../atoms/TranslatedText';

export const LanguagePicker = React.memo(() => {
  const router = useRouter();

  // if we are not en, our current path will have /locale/ at the front, which we should remove
  // if we have /ja, we can just remove ja
  // if we have /ja/page, we should remove the redundant slash
  const { locale } = useContext(TranslationContext);
  const pathWithNoLocale = locale === 'en' ? router.asPath : router.asPath.replace(`${locale}`, '').replace('//', '/');
  const handlePickerChange = (event: SelectChangeEvent<SupportedLocale>) => {
    const newLocale = event.target.value as SupportedLocale;
    const newPath = pathFromComponents(locale, pathWithNoLocale, newLocale);
    router.push(newPath);
  };

  const languageOptions = useCallback(() => {
    return (
      languageDefinitions.map((definition) => (
        <MenuItem key={ definition.code } value={ definition.code } >
          <TranslatedText className='flex flex-grow justify-center'>
            { definition.displayName }
          </TranslatedText>
        </MenuItem>
      ))
    );
  }, []);
  
  return (
    <div>
      <Language className='absolute mt-3 ml-2 pointer-events-none'/>
      <Select
        value={ locale }
        onChange={ handlePickerChange }
        className='w-28 h-12 pl-6'
      >
        { languageOptions() }
      </Select>
    </div>
  );
});

LanguagePicker.displayName = 'LanguagePicker';
