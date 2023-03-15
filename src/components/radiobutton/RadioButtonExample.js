import React, { useState } from 'react';
import { RadioButton } from './RadioButton';
import { Heading } from '../Typography';
export const RadioButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>RadioButton</Heading>
      <RadioButton
        savedData={savedData}
        configure={{
          name: 'radio',
          label: 'label',
          onChange: (event) => {
            setSavedData(event.target.checked);
          },
        }}
      />
    </div>
  );
};
