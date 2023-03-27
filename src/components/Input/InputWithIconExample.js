import React, { useState } from 'react';
import { Input, InputWrapper } from './index';
import { SpeechIcon } from '../../icons/SpeechIcon';
import { Icon } from '../Icon';

export const InputWithIconExample = () => {
  const [savedData, setSavedData] = useState('');

  return (
    <InputWrapper>
      <Icon iconSize='30px'>
        <SpeechIcon/>
      </Icon>
      <Input
        savedData={savedData}
        configure={{
          modifiers: ['noborder', 'noborderleftradius'],
          placeholder: 'placeholder',
          onChange: (event) => {
            setSavedData(event.target.value);
          },
        }}
      />
    </InputWrapper>
  );
};
