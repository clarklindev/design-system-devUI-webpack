import React, { useState } from 'react';
import { CheckboxIcon } from './index';
import { HeartIcon } from '../../icons/HeartIcon';
import { Icon } from '../Icon';

export const CheckboxIconExample = () => {
  const [savedData, setSavedData] = useState(false);

  const configure = {
    onChange: (event) => {
      console.log('checked', event.target.checked);
      setSavedData(event.target.checked);
    },
  };

  return (
    <CheckboxIcon savedData={savedData} configure={configure}>
      <Icon
        iconSize='30px'
        color='white'
        fill={savedData ? 'red' : undefined}
        stroke={savedData ? 'red' : undefined}
      >
        <HeartIcon/>
      </Icon>
    </CheckboxIcon>
  );
};
