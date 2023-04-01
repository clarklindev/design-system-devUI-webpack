import React from 'react';
import { Accordion } from './index';

export const AccordionMinimalExample = () => {
  const data = [
    {
      title: 'helloworld',
      body: 'this is my first answer',
    },
    {
      title: 'rainbow',
      body: 'rainbows are amazing',
    },
    {
      title: 'sun',
      body: 'the sun is amazing',
    },
  ];

  return (
    <Accordion
      config={{
        multiOpen: true,
        data,
        icon: { type: 'hidden' },
        showSeparator: false,
      }}
    />
  );
};
