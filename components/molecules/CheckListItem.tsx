import React from 'react';
import { CheckCircleOutline } from '@mui/icons-material';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { TranslatedText } from '../atoms/TranslatedText';

type Props = {
  text: string
};

export const CheckListItem = ({ text }: Props ) => {
  return (
    <ListItem disablePadding>
      <ListItemIcon sx={ { minWidth: 30 } }>
        <CheckCircleOutline />
      </ListItemIcon>
      <ListItemText disableTypography>
        <TranslatedText>
          { text }
        </TranslatedText>
      </ListItemText>
    </ListItem>
  ); };
