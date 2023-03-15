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
  max-height: ${(props) => props.theme.global.inputHeight};
  width: 100%;
  display: flex;
  flex-grow: 1;
  outline: none;
  color: ${(props) => props.theme.input.color};
  border-radius: ${(props) => props.theme.global.borderRadius};
  border: ${(props) => props.theme.global.borderWidth} solid
    ${(props) => props.theme.input.borderColor};
  background-color: ${(props) => props.theme.input.backgroundColor};
  ${applyStyleModifiers(MODIFIERS)};
`;

const InputElement = styled.input`
  box-sizing: border-box;
  max-height: ${(props) => props.theme.global.inputHeight};
  cursor: text;
  color: ${(props) => props.theme.input.color};
  border-radius: ${(props) => props.theme.global.borderRadius};
  border: ${(props) => props.theme.global.borderWidth} solid
    ${(props) => props.theme.input.borderColor};
  background-color: ${(props) => props.theme.input.backgroundColor};
  outline: none;
  width: 100%;
  padding: ${(props) => props.theme.global.padding};
  ${applyStyleModifiers(MODIFIERS)};
`;

export const InputWrapper = ({ configure = undefined, children }) => {
  return (
    <WrapperContainer modifiers={configure?.modifiers}>
      {children}
    </WrapperContainer>
  );
};

export const Input = ({ configure, savedData }) => {
  const {
    type = 'text',
    onChange,
    modifiers = [],
    placeholder,
    className,
  } = configure;

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
