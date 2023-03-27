import React, { useState } from 'react';
import { CheckboxGroup } from './index';
import { Checkbox } from '../Checkbox';

import { LabelSomething } from '../LabelSomething';

export const CheckboxGroupHorizontalExample = () => {

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
    <CheckboxGroup direction='row' spacing='20px'>
      {options.map((each, index) => {
        return (
          <LabelSomething
            key={'CheckboxGroup_Checkbox' + index}
            label={each.label}
            labelPosition='bottom'
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
      })}
    </CheckboxGroup>
  );
};
