import React, { useState } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { Checkbox } from './Checkbox';

import { Heading } from '../Typography';
import { LabelSomething } from '../LabelSomething';

export const CheckboxGroupExample = () => {
  const [savedData, updateSavedData] = useState([false, false, false]);

  const options = [
    { label: 'a', value: 'A' },
    { label: 'b', value: 'B' },
    { label: 'c', value: 'C' },
  ];

  const onChange = (index, newValue) => {
    const newValues = [...savedData];
    newValues[index] = newValue;
    updateSavedData(newValues);
  };

  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>Checkbox Group</Heading>

      <LabelSomething
        label='label'
        labelPosition='top'
        spacing='2'
        align='start'
        something={
          <CheckboxGroup
            configure={{
              direction: 'column',
              spacing: '1rem',
            }}
          >
            {options.map((each, index) => {
              return (
                <Checkbox
                  key={'CheckboxGroup_Checkbox_ABC' + index}
                  savedData={savedData[index]}
                  configure={{
                    label: each.label,
                    name: 'Checkbox_ABC',
                    iconSize: '30px',
                    color: 'darkgrey',

                    onChange: () => onChange(index, !savedData[index]),
                  }}
                />
              );
            })}
          </CheckboxGroup>
        }
      />
    </div>
  );
};
