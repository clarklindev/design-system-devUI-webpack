import React, { useState } from 'react';
import { CheckboxIcon } from './CheckboxIcon';
import { Heading } from '../Typography';
import { BookmarkIcon } from '../../icons/BookmarkIcon';
import { HeartIcon } from '../../icons/HeartIcon';
import { Icon } from '../Icon';

export const CheckboxIconExample = () => {
  const [savedData1, setSavedData1] = useState(false);
  const [savedData2, setSavedData2] = useState(false);

  const configure1 = {
    onChange: (event) => {
      console.log('checked1: ', event.target.checked);
      setSavedData1(event.target.checked);
    },
  };

  const configure2 = {
    onChange: (event) => {
      console.log('checked2', event.target.checked);
      setSavedData2(event.target.checked);
    },
  };

  return (
    <div className='flex flex-col'>
      <Heading variation='h6'>CheckboxIcon</Heading>
      <div className='flex flex-row'>
        <CheckboxIcon savedData={savedData1} configure={configure1}>
          <Icon
            iconSize='30px'
            color='white'
            fill={savedData1 ? 'blue' : undefined}
            stroke={savedData1 ? 'blue' : undefined}
          >
            {BookmarkIcon}
          </Icon>
        </CheckboxIcon>
        <CheckboxIcon savedData={savedData2} configure={configure2}>
          <Icon
            iconSize='30px'
            color='white'
            fill={savedData2 ? 'red' : undefined}
            stroke={savedData2 ? 'red' : undefined}
          >
            {HeartIcon}
          </Icon>
        </CheckboxIcon>
      </div>
    </div>
  );
};
