import React from 'react';

type Props = {
  firstElement: React.ReactNode
  secondElement: React.ReactNode
};

export const FeatureSection = ({ firstElement, secondElement }: Props) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-row items-center justify-center md:w-5/12">
        { firstElement }
      </div>
      <div className="h-4 md:w-2/12" />
      <div className="flex flex-row items-center justify-center md:w-5/12">
        { secondElement }
      </div>
    </div>
  );
};
