import { Card, CardContent, List, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useContext, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Section } from '../../atoms/Section';
import { TranslatedText } from '../../atoms/TranslatedText';
import { CheckListItem } from '../../molecules/CheckListItem';
import { TranslationContext } from '../../page_wrappers/TranslationsWrapper';

export const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const { translation } = useContext(TranslationContext);

  return (
    <Section className='js-show-on-scroll'>
      <div className="flex flex-col justify-center items-center" id="pricing">
        <TranslatedText variant="h4" className="pb-8" component='h2'>
          { translation.header.pricing }
        </TranslatedText>
        <ToggleButtonGroup
          value={ isMonthly ? 'monthly' : 'yearly' }
          exclusive
          onChange={ () => setIsMonthly(!isMonthly) }
          className="pb-4"
        >
          <ToggleButton value="monthly">
            <TranslatedText>
              { translation.pricingSection.monthlyBilling }
            </TranslatedText>
          </ToggleButton>
          <ToggleButton value="yearly">
            <TranslatedText>
              { translation.pricingSection.annualBilling }
            </TranslatedText>
          </ToggleButton>
        </ToggleButtonGroup>
        <Card raised className="max-w-lg">
          <CardContent>
            <TranslatedText variant="h4" className="pb-4" color="secondary.main">
              { isMonthly
                ? translation.pricingSection.monthlyPrice
                : translation.pricingSection.annualPrice
              }
            </TranslatedText>
            <List>
              { !isMonthly && (
                <CheckListItem text={ translation.pricingSection.taglineAnnual } />
              ) }
              <CheckListItem text={ translation.pricingSection.taglineMonthlyDelivery } />
              <CheckListItem text={ translation.pricingSection.taglineBirthdayPackage } />
              <CheckListItem text={ translation.pricingSection.taglineRecipeWebsite } />
            </List>
          </CardContent>
        </Card>
      </div>
    </Section>

  );
};
