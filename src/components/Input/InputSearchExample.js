import React, { useState } from 'react';
import { Input, InputWrapper } from './index';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { SearchIcon } from '../../icons/SearchIcon';
import { ClearIcon } from '../../icons/ClearIcon';

export const InputSearchExample = () => {
  const [savedData, setSavedData] = useState('');

  const clearHandler = () => {
    setSavedData('');
  };

  return (
    <InputWrapper>
      <Icon iconSize='30px'>
        <SearchIcon/>
      </Icon>
      <Input
        className='px-25'
        savedData={savedData}
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

      {/* WRONG WAY {savedData.length && rightIcon} - 0 is a falsy value, so when it is evaluated by &&, it returns 0 */}
      { savedData.length > 0 && 
        <Button
          variation='icon'
          modifiers={['noborderrightradius']}
          onClick={clearHandler}
          label={
            <Icon iconSize='30px'>
              <ClearIcon/>
            </Icon>
          }
        />
      }
    </InputWrapper>
  );
};
