import React, { useState } from 'react';
import { Input, InputWrapper } from './Input';
import { Heading } from '../Typography';

import { Button } from '../Button';
import { Icon } from '../Icon';

import { ShowIcon } from '../../icons/ShowIcon';
import { HideIcon } from '../../icons/HideIcon';

export const InputPasswordExample = () => {
  const [savedData, setSavedData] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>Password</Heading>
      <InputWrapper>
        <Input
          savedData={savedData}
          configure={{
            modifiers: ['noborder', 'noborderrightradius'],
            placeholder: 'placeholder',
            type: passwordVisible ? 'text' : 'password',
            onChange: (event) => {
              console.log('noborder');
              setSavedData(event.target.value);
            },
          }}
        />
        <Button
          className='mr-4'
          variation='icon'
          onClick={() => setPasswordVisible(!passwordVisible)}
          label={
            <Icon iconSize='30px' color='red'>
              {passwordVisible ? HideIcon : ShowIcon}
            </Icon>
          }
        />
      </InputWrapper>
    </div>
  );
};
