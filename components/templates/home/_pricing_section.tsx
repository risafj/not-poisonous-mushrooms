import { CheckCircleOutline } from '@mui/icons-material';
import { Card, CardContent, List, ListItem, ListItemIcon, ListItemText, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Section } from '../../atoms/Section';

export const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <Section>
      <div className="flex flex-col justify-center items-center">
        <Typography variant="h4" className="pb-8">
          Pricing
        </Typography>
        <ToggleButtonGroup
          value={ isMonthly ? 'monthly' : 'yearly' }
          exclusive
          onChange={ () => setIsMonthly(!isMonthly) }
          className="pb-4"
        >
          <ToggleButton value="monthly">
            Monthly billing
          </ToggleButton>
          <ToggleButton value="yearly">
            Yearly billing
          </ToggleButton>
        </ToggleButtonGroup>
        <Card raised className="max-w-lg">
          <CardContent>
            <Typography variant="h5" className="pb-4">
              { isMonthly ? '$9.99 / month ' : '$99.99 / year' }
            </Typography>
            <Typography variant="body1" className="pb-4">
              Includes:
            </Typography>
            <List>
              { !isMonthly && (
                <ListItem disablePadding>
                  <ListItemIcon>
                    <CheckCircleOutline />
                  </ListItemIcon>
                  <ListItemText>Save 20%!</ListItemText>
                </ListItem>
              ) }
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircleOutline />
                </ListItemIcon>
                <ListItemText>Monthly delivery of fresh mushrooms</ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircleOutline />
                </ListItemIcon>
                <ListItemText>Special birthday package in your birth month</ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircleOutline />
                </ListItemIcon>
                <ListItemText>Free access to an exclusive mushroom recipe website</ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
    </Section>

  );
};
