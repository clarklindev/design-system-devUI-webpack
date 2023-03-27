import React, { useState } from 'react';
import { RadioButton } from './index';

export const RadioButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <RadioButton
      checked={savedData}
      name='radio'
      label='label'
      onChange={(event) => {
        setSavedData(event.target.checked);
      }}
    />
  );
};
