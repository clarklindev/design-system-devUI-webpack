import React, { useState } from 'react';
import { Input, InputWrapper } from './index';

import { Button } from '../Button';
import { Icon } from '../Icon';

import { ShowIcon } from '../../icons/ShowIcon';
import { HideIcon } from '../../icons/HideIcon';

export const InputPasswordExample = () => {
  const [savedData, setSavedData] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <InputWrapper>
      <Input
        savedData={savedData}
        modifiers={['noborder', 'noborderrightradius', 'noleftpadding']}
        placeholder={'placeholder'}
        type={ passwordVisible ? 'text' : 'password'}
        onChange={ (event) => {
          setSavedData(event.target.value);
        }}
      />
      <Button
        variation='icon'
        onClick={() => setPasswordVisible(!passwordVisible)}
        label={
          <Icon iconSize='30px'>
            {passwordVisible ? <HideIcon/> : <ShowIcon/>}
          </Icon>
        }
      />
    </InputWrapper>
  );
};
