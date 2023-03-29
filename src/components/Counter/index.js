import React from 'react';
import styled from 'styled-components';
import { Input } from '../Input';
import { MinusIcon } from '../../icons/MinusIcon';
import { PlusIcon } from '../../icons/PlusIcon';
import { Button } from '../Button';
import { Icon } from '../Icon';

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 130px;
  width: 130px;
  color: ${({ theme }) => theme?.Counter?.borderColor};
  border: ${({ theme }) => theme?.Counter?.border};
  border-radius: ${({ theme }) => theme?.Counter?.borderRadius};
  height: ${({ theme }) => theme?.Counter?.height};
  Button {
    border: 0px;
    background: ${({ theme }) => theme?.Counter?.backgroundColor};
    &.left {
      border-right: ${({ theme }) => theme?.Counter?.border};
    }
    &.right {
      border-left: ${({ theme }) => theme?.Counter?.border};
    }
  }
  Input {
    border-top: 0px;
    border-bottom: 0px;
    background: ${({ theme }) => theme?.Counter?.backgroundColor};
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
        className={['Button', 'left'].join(' ')}
        onClick={decrement}
        variation='outlined'
        modifiers={['noborderrightradius', 'noborder']}
      >
        <Icon size='20px' stroke='transparent'>
          <MinusIcon />
        </Icon>
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
        className={['Button', 'right'].join(' ')}
        onClick={increment}
        variation='outlined'
        modifiers={['noborderleftradius', 'noborder']}
      >
        <Icon size='20px' stroke='transparent'>
          <PlusIcon />
        </Icon>
      </Button>
    </CounterContainer>
  );
};
