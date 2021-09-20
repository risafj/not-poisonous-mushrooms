import { Typography } from '@mui/material';
import React from 'react';

type Props = {
  text: string
  imageElement: React.ReactNode
  isImageOnLeft?: boolean
};

const TextSection = ({ text, }: Pick<Props, 'text'> ) => {
  return (
    <div className={ "flex flex-row items-center justify-center md:w-6/12 md:px-4" }>
      <Typography variant="h4">
        { text }
      </Typography>
    </div>
  );
};

const ImageSection = ({ imageElement }: Pick<Props, 'imageElement'>) => {
  return (
    <div className="flex flex-row items-center justify-center md:w-6/12 md:px-4">
      { imageElement }
    </div>
  );
};

export const FeatureSection = ({ text, imageElement, isImageOnLeft = false }: Props) => {
  return (
    <div className="md:my-10">
      <div className="flex flex-col md:hidden">
        <TextSection text={ text }/>
        <div className="h-4" />
        <ImageSection imageElement={ imageElement } />
      </div>

      <div className="hidden md:flex md:flex-row">
        { !isImageOnLeft && (
          <TextSection text={ text } />

        ) }
        <ImageSection imageElement={ imageElement } />
        { isImageOnLeft && <TextSection text={ text } /> }
      </div>
    </div>
  );
};
