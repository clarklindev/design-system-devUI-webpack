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
  max-height: ${({theme}) => theme?.Counter?.height};
  height: auto;
  color: ${({theme}) => theme?.Counter?.borderColor};
  border: ${({theme}) => theme?.Counter?.border};
  border-radius: ${({theme}) => theme?.Counter?.borderRadius};
  
  Button {
    border: 0px;
    background: ${({theme}) => theme?.Counter?.backgroundColor};
  }
  Input {
    border-top: 0px;
    border-bottom: 0px;
    border-left: ${({theme}) => theme?.Counter?.border};
    border-right: ${({theme}) => theme?.Counter?.border};
    background: ${({theme}) => theme?.Counter?.backgroundColor};
    height: auto;
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
        modifiers={['noborderrightradius', 'noborder']}
      >
        <Icon iconSize='20px' stroke="transparent"><MinusIcon/></Icon>
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
        savedData={savedData}
      />

      <Button
        onClick={increment}
        variation='outlined'
        modifiers={['noborderleftradius', 'noborder']}
      >
        <Icon iconSize='20px' stroke="transparent"><PlusIcon/></Icon>
      </Button>
    </CounterContainer>
  );
};
