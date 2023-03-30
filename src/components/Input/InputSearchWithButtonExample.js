import React, { useState, useRef } from 'react';
import { Input, InputWrapper } from './index';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { SearchIcon } from '../../icons/SearchIcon';

export const InputSearchWithButtonExample = () => {
  const [savedData, setSavedData] = useState('');

  const ref = useRef(null);

  const clickHandler = () => {
    console.log('value: ', ref.current.value);
  };

  return (
    <InputWrapper>
      <Input
        className='px-25'
        savedData={savedData}
        ref={ref}
        modifiers={[
          'noborder',
          'noborderleftradius',
          savedData.length && 'noborderrightradius',
        ]}
        placeholder='placeholder'
        onChange={(event) => {
          setSavedData(event.target.value);
        }}
      />

      <Button
        variation='icon'
        modifiers={['noborderrightradius']}
        onClick={clickHandler}
        label={
          <Icon size='25px'>
            <SearchIcon />
          </Icon>
        }
      />
    </InputWrapper>
  );
};
