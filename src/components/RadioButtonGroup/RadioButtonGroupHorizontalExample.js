import React, { useState } from 'react';
import { RadioButtonGroup } from './index';
import { RadioButton } from '../RadioButton';
import { LabelSomething } from '../LabelSomething';


export const RadioButtonGroupHorizontalExample = () => {
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
            gap='10px'
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
  );
};
