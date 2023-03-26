import React, { useState } from 'react';
import { RadioButton } from './index';

export const RadioButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
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
  );
};
