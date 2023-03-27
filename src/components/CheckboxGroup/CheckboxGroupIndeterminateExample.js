import React, { useState, useEffect } from 'react';
import { CheckboxGroup } from './index';
import { Checkbox } from '../Checkbox';

import { LabelSomething } from '../LabelSomething';

export const CheckboxGroupIndeterminateExample = () => {

  const options = [
    { label: 'a', value: 'A' },
    { label: 'b', value: 'B' },
    { label: 'c', value: 'C' },
  ];

  const [savedData, updateSavedData] = useState(Array(options.length).fill(false));

  const onChange = (index, newValue) => {
    const newValues = [...savedData];
    newValues[index] = newValue;
    updateSavedData(newValues);
  };

  return (
  <div className="flex flex-col justify-items-start items-start space-y-10">
    <Checkbox
      checked={savedData.every(item=> item === true)} 
      indeterminate={!savedData.every(item=> item === true) && savedData.some(item => item === true)}
      name='checkbox'
      label='label'
      onChange={(event) => {
        //update group
        updateSavedData(savedData.slice().fill(event.target.checked));
      }}
    />

    <CheckboxGroup direction='column' spacing='20px'>
    {
      options.map((each, index) => {
        return (
        <LabelSomething
          key={'CheckboxGroup_Checkbox' + index}
          label={each.label}
          labelPosition='right'
          gap='10px'
          something={
          <Checkbox
            checked={savedData[index]}
            name='Checkbox_ABC'
            iconSize='30px'
            onChange={() => onChange(index, !savedData[index])}
          />
          }
        />
        );
      })
    }
    </CheckboxGroup>
  </div>
  );
};
