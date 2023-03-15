import React, { useState } from 'react';
import { Input, InputWrapper } from './Input';
import { Heading } from '../Typography';
import { SpeechIcon } from '../../icons/SpeechIcon';
import { Button } from '../Button';
import { Icon } from '../Icon';

export const InputWithIconExample = () => {
  const [savedData, setSavedData] = useState('');

  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>With icon</Heading>
      <InputWrapper>
        <Button
          modifiers={['nopointer']}
          className='ml-4'
          variation='icon'
          label={
            <Icon iconSize='30px' color='white'>
              {SpeechIcon}
            </Icon>
          }
        />
        <Input
          savedData={savedData}
          configure={{
            modifiers: ['noborder', 'noborderleftradius'],
            placeholder: 'placeholder',
            onChange: (event) => {
              console.log('noborder');
              setSavedData(event.target.value);
            },
          }}
        />
      </InputWrapper>
    </div>
  );
};
