import React from 'react';
import Accordion from './index';

const AccordionMinimalExample = () => {
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
      data={data}
      type='hidden'
      multiOpen={true}
      showSeparator={false}
    />
  );
};

export default AccordionMinimalExample;
