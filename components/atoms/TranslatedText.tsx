import { Typography, TypographyProps  } from '@mui/material';
import React from 'react';

// TS error for components
// https://github.com/mui-org/material-ui/issues/19512#issue-558587710

type Props =  TypographyProps & { children: string, component?: any };
export const TranslatedText = ({ children, ...props } : Props) => {
  return (
    <Typography dangerouslySetInnerHTML={ { __html: children } } { ...props }/>
  );
};
