import React, { useState } from 'react';
import { CheckboxIcon } from './index';
import { HeartIcon } from '../../icons/HeartIcon';
import { Icon } from '../Icon';

export const CheckboxIconExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <CheckboxIcon
      checked={savedData}
      onChange={(event) => {
        setSavedData(event.target.checked);
      }}
    >
      <Icon
        iconSize='30px'
        fill={savedData ? 'red' : 'black'}
        fillOpacity={savedData ? '1' : '0'}
        stroke={savedData ? 'transparent' : 'black'}
      >
        <HeartIcon />
      </Icon>
    </CheckboxIcon>
  );
};
