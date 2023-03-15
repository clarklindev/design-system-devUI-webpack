import React, { useState } from 'react';
import { RadioButtonGroup } from './RadioButtonGroup';
import { RadioButton } from './RadioButton';

import { Heading } from '../Typography';
import { LabelSomething } from '../LabelSomething';

export const RadioButtonGroupAndLabelSomethingExample = () => {
  // radioOptions: moved outside of configure object - possibility that savedData is pulled, eg. questions from backend async call
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
    let tempArr = [...savedData].fill(false);
    tempArr[index] = newValue;
    updateSavedData(tempArr);
  };

  return (
    <div className='flex flex-col'>
      <Heading variation='h6'>RadioButton Group + LabelSomething</Heading>
      <LabelSomething
        label='Label'
        labelPosition='top'
        spacing='2'
        align='start'
        something={
          <RadioButtonGroup
            configure={{
              direction: 'row',
              spacing: '16px', //space between radios
            }}
          >
            {options.map((each, index) => {
              return (
                <LabelSomething
                  key={`RadioButtonGroup_Radio_ABC` + index}
                  label={each.label}
                  labelPosition='bottom'
                  spacing='2'
                  align='center'
                  something={
                    <RadioButton
                      savedData={savedData[index]}
                      configure={{
                        name: 'Radio_ABC',
                        iconSize: '30px',
                        color: 'darkgrey',
                        onChange: () => onChange(index, !savedData[index]),
                      }}
                    />
                  }
                />
              );
            })}
          </RadioButtonGroup>
        }
      />
    </div>
  );
};
