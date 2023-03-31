import React from 'react';
import { Accordion } from './index';

export const AccordionExample = () => {
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
      multiOpen={true}
      // renderprop
      renderItem={({ handleClick, indexes, AccordionSection, Separator }) => {
        return data.map((each, index) => {
          return (
            <React.Fragment key={index}>
              <AccordionSection
                data={each}
                onClick={() => handleClick(index)}
                isOpen={indexes.includes(index)}
                index={index}
              />
              {index < data.length - 1 && <Separator />}
            </React.Fragment>
          );
        });
      }}
    />
  );
};
