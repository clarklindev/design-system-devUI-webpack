import React from 'react';

import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { MODIFIERS } from './modifiers';

const BaseButton = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  cursor: pointer;
  border: ${({ theme }) => theme?.Button?.base?.border || 'var()'};
  background-color: ${({ theme }) =>
    theme?.Button?.base?.backgroundColor || 'var()'};
  color: ${({ theme }) => theme?.Button?.base?.color || 'var()'};
  padding: ${({ theme }) => theme?.Button?.base?.padding || 'var()'};
  border-radius: ${({ theme }) => theme?.Button?.base?.borderRadius || 'var()'};

  ${applyStyleModifiers(MODIFIERS)};
`;

const ContainedButton = styled(BaseButton)`
  border: none;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor
      ? backgroundColor
      : theme?.Button?.contained?.backgroundColor || 'var()'};
  color: ${({ theme, color }) =>
    color ? color : theme?.Button?.contained?.color || 'var()'};

  ${applyStyleModifiers(MODIFIERS)};
`;

const OutlinedButton = styled(BaseButton)`
  background-color: ${({ theme, borderColor }) =>
    borderColor
      ? borderColor
      : theme?.Button?.outlined?.backgroundColor || 'var()'};
  border: ${({ theme, borderColor }) =>
    borderColor
      ? borderColor
      : theme?.Button?.outlined?.borderColor || 'var()'};
  color: ${({ theme, color }) =>
    color ? color : theme?.Button?.outlined?.color || 'var()'};

  ${applyStyleModifiers(MODIFIERS)};
`;

const TextButton = styled(BaseButton)`
  border: none;
  background: none;
  padding: 0px;
  color: ${({ theme, color }) =>
    color ? color : theme?.Button?.text?.color || 'var()'};

  ${applyStyleModifiers(MODIFIERS)};
`;

const IconButton = styled(BaseButton)`
  padding: 0px;
  border: 0px;
  background: none;
  ${applyStyleModifiers(MODIFIERS)};
`;

export const Button = ({
  variation,
  label,
  labelDirection = 'right',
  color,
  backgroundColor,
  borderColor,
  modifiers = [],
  size,
  children,
  ...rest
}) => {
  let labelClasses = '';
  switch (labelDirection) {
    case 'top':
      labelClasses = 'flex flex-col';
      break;
    case 'bottom':
      labelClasses = 'flex flex-col-reverse';
      break;
    case 'left':
      labelClasses = 'flex flex-row-reverse';
      break;
    default:
    case 'right':
      labelClasses = 'flex flex-row';
      break;
  }

  const buttonMap = {
    contained: ContainedButton,
    outlined: OutlinedButton,
    text: TextButton,
    icon: IconButton,
  };

  const Component = buttonMap[variation];
  if (Component) {
    return (
      <Component
        className={['Button', labelClasses].join(' ')}
        color={color}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        modifiers={[...modifiers, size]}
        {...rest}
      >
        {label ? label : children}
      </Component>
    );
  }
  return (
    <BaseButton className='Button' {...rest}>
      {label ? label : children}
    </BaseButton>
  );
};
