import React, { useState } from 'react';
import RadioButton from './index';

const RadioButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <RadioButton
      checked={savedData}
      name='radio'
      label='label'
      iconSize='20px'
      onChange={(event) => {
        setSavedData(event.target.checked);
      }}
    />
  );
};

export default RadioButtonExample;
