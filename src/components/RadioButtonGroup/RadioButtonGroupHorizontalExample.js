import React, { useState } from 'react';
import { RadioButtonGroup } from './index';
import { RadioButton } from '../RadioButton';
import { LabelSomething } from '../LabelSomething';

export const RadioButtonGroupHorizontalExample = () => {
  const options = [
    { label: 'a', value: 'A' },
    { label: 'b', value: 'B' },
    { label: 'c', value: 'C' },
    { label: 'd', value: 'D' },
  ];

  const [savedData, updateSavedData] = useState(
    Array(options.length).fill(false)
  );

  const onChange = (index, newValue) => {
    let newValues = [...savedData].fill(false);
    newValues[index] = newValue;
    updateSavedData(newValues);
  };

  return (
    <RadioButtonGroup direction='row' spacing='20px'>
      {options.map((each, index) => {
        return (
          <LabelSomething
            key={'RadioButtonGroup' + index}
            label={each.label}
            labelPosition='bottom'
            gap='10px'
            something={
              <RadioButton
                checked={savedData[index]}
                name='Radio'
                iconSize='30px'
                onChange={() => onChange(index, !savedData[index])}
              />
            }
          />
        );
      })}
    </RadioButtonGroup>
  );
};
