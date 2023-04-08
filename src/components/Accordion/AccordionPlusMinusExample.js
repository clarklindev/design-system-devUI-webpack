import React from 'react';
import Accordion from './index';

const AccordionPlusMinusExample = () => {
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
      multiOpen={true}
      icon={{
        type: 'plusminus',
        stroke: 'black',
      }}
      showSeparator={true}
    />
  );
};

export default AccordionPlusMinusExample;
