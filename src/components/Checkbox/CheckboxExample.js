import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import { Heading } from '../Typography';

export const CheckboxExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>Checkbox</Heading>

      <Checkbox
        savedData={savedData}
        configure={{
          name: 'checkbox',
          label: 'label',
          color: 'darkgrey',
          onChange: (event) => {
            setSavedData(event.target.checked);
          },
        }}
      />
    </div>
  );
};
