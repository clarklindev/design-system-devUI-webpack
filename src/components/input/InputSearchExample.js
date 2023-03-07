import React, { useState } from 'react';
import { Input, InputWrapper } from './Input';
import { Heading } from '../Typography';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { SearchIcon } from '../../icons/SearchIcon';
import { ClearIcon } from '../../icons/ClearIcon';

export const InputSearchExample = () => {
  const [savedData, setSavedData] = useState('');

  const clearHandler = () => {
    setSavedData('');
  };

  const leftIcon = (
    <Button
      className='ml-4'
      modifiers={['nopointer']}
      variation='icon'
      label={
        <Icon iconSize='30px' color='white'>
          {SearchIcon}
        </Icon>
      }
    />
  );
  const rightIcon = (
    <Button
      className='ml-2 mr-4'
      variation='icon'
      modifiers={['noborderrightradius']}
      onClick={clearHandler}
      label={
        <Icon iconSize='30px' color='white'>
          {ClearIcon}
        </Icon>
      }
    />
  );
  return (
    <div className='flex flex-col'>
      <Heading variation='h6'>Search</Heading>
      <InputWrapper>
        {leftIcon}
        <Input
          className='px-25'
          savedData={savedData}
          configure={{
            modifiers: [
              'noborder',
              'noborderleftradius',
              savedData.length && 'noborderrightradius',
            ],
            placeholder: 'placeholder',
            onChange: (event) => {
              console.log('noborder');
              setSavedData(event.target.value);
            },
          }}
        />

        {/* WRONG - {savedData.length && rightIcon} - 0 is a falsy value, so when it is evaluated by &&, it returns 0 */}
        {savedData.length > 0 && rightIcon}
      </InputWrapper>
    </div>
  );
};
