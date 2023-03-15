import React, { useState } from 'react';
import { RadioButton } from './RadioButton';
import { Heading } from '../Typography';
import { LabelSomething } from '../LabelSomething';
export const RadioButtonAndLabelSomethingExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>RadioButton + LabelSomething</Heading>
      <LabelSomething
        label='label'
        labelPosition='bottom'
        labelClickable='true'
        spacing='2'
        something={
          <RadioButton
            savedData={savedData}
            configure={{
              name: 'radio',
              onChange: (event) => {
                setSavedData(event.target.checked);
              },
            }}
          />
        }
      />
    </div>
  );
};
