import React from 'react';
import styled from 'styled-components';
import { Input } from '../Input';
import { MinusIcon } from '../../icons/MinusIcon';
import { PlusIcon } from '../../icons/PlusIcon';
import { Button } from '../Button';
import { Icon } from '../Icon';

const CounterContainer = styled.div`
  display: flex;

  min-width: 130px;
  max-width: 150px;
  height: ${({theme}) => theme?.global?.inputHeight};
  color: ${({theme}) => theme?.Counter?.borderColor};

  Button {
    background: ${({theme}) => theme?.Counter?.backgroundColor};
  }
  Input {
    border-color: inherit;
    background: ${({theme}) => theme?.Counter?.backgroundColor};
  }
`;

export const Counter = ({ savedData, onChange }) => {
  const decrement = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('decrement');
    onChange(parseInt(savedData || 0) - 1);
  };

  const increment = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('increment');
    onChange(parseInt(savedData || 0) + 1);
  };

  return (
    <CounterContainer>
      <Button
        onClick={decrement}
        variation='outlined'
        modifiers={['noborderrightradius']}
      >
        <Icon iconSize='20px'><MinusIcon/></Icon>
      </Button>

      <Input
        placeholder=''
        onChange={(event) => !isNaN(event.target.value)}
        modifiers={[
          'nonselectable',
          'noborderradius',
          'textcenter',
          'noborderleft',
          'noborderright',
          'nopadding',
        ]}
        className='border-l-0 border-r-0'
        savedData={savedData}
      />

      <Button
        onClick={increment}
        variation='outlined'
        modifiers={['noborderleftradius']}
      >
        <Icon iconSize='20px'><PlusIcon/></Icon>
      </Button>
    </CounterContainer>
  );
};
