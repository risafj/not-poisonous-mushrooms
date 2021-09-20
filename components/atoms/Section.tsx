import { Box } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode
  backgroundColor?: string
};

export const Section = ({ children, backgroundColor }: Props) => {
  return (
    <Box
      className="w-screen"
      sx={ { backgroundColor } }
    >
      <div className="container mx-auto text-center px-4 py-8 md:px-8">
        { children }
      </div>
    </Box>
  );
};
