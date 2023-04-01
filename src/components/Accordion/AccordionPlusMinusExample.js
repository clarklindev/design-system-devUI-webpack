import React from 'react';
import { Accordion } from './index';

export const AccordionPlusMinusExample = () => {
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

  const config = {
    multiOpen: true,
    data,
    icon: { type: 'plusminus', stroke: 'black' },
    showSeparator: true,
  };

  return <Accordion config={config} />;
};
