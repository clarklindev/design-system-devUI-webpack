import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { MODIFIERS } from './modifiers';

const WrapperContainer = styled.div.attrs((props) => ({
  type: props.type,
}))`
  overflow: hidden;
  box-sizing: border-box;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
  outline: none;
  padding: 10px;
  border: ${({theme}) => theme?.Input?.border || 'var()'};
  border-radius: ${({theme}) => theme?.Input?.borderRadius || 'var()'};
  max-height: ${({theme}) => theme?.Input?.inputHeight || 'var()'};
  color: ${({theme}) => theme?.Input?.color || 'var()'};
  background-color: ${({theme}) => theme?.Input?.backgroundColor || 'var()'};

  ${applyStyleModifiers(MODIFIERS)};
`;

const InputElement = styled.input`
  box-sizing: border-box;
  cursor: text;
  outline: none;
  width: 100%;

  padding: 10px;
  border-radius: ${({theme}) => theme?.Input?.borderRadius || 'var()'};
  height: ${({theme}) => theme?.Input?.inputHeight || 'var()'};
  color: ${({theme}) => theme?.Input?.color || 'var()'};
  background-color: ${({theme}) => theme?.Input?.backgroundColor || 'var()'};

  border: ${({theme}) => theme?.Input?.border || 'var()'};

  ${applyStyleModifiers(MODIFIERS)};
`;

export const InputWrapper = ({ modifiers, children }) => {
  return (
    <WrapperContainer modifiers={modifiers}>
      {children}
    </WrapperContainer>
  );
};

export const Input = ({ type = 'text', onChange, modifiers = [], placeholder, className, savedData }) => {
  
  return (
    <InputElement
      onChange={onChange}
      value={savedData}
      placeholder={placeholder}
      type={type}
      modifiers={modifiers}
      readOnly={modifiers.includes('readonly')}
      className={className}
    />
  );
};
