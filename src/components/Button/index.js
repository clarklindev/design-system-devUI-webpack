import React from 'react';

import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import '../../tailwindcss.css';

import { MODIFIERS } from './modifiers';

const BaseButton = styled.button`
  box-sizing: border-box;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  cursor: pointer;
  border: 1px solid ${({theme}) => theme?.button?.base?.borderColor || 'var(--button-base-border)'};
  background-color: ${({theme}) => theme?.button?.base?.backgroundColor || 'var(--button-base-background)'}; 
  color: ${({theme}) => theme?.button?.base?.color || 'var(--button-base-color)'};
  padding: 10px ${({theme}) => theme?.global?.padding || 'var(--padding)'};
  border-radius: ${({theme}) => theme?.global?.borderRadius || 'var(--border-radius)'};
  
  ${applyStyleModifiers(MODIFIERS)};
`;

const ContainedButton = styled(BaseButton)`
  border: none;
  background-color: ${({theme, backgroundColor}) => backgroundColor ? backgroundColor : theme?.button?.contained?.backgroundColor || 'var(--button-contained-background)'};
  color: ${({theme, color}) => color ? color : theme?.button?.contained?.color || 'var(--button-contained-color)'};

  ${applyStyleModifiers(MODIFIERS)};
`;

const OutlinedButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid ${({theme, borderColor}) => borderColor ? borderColor : theme?.button?.outlined?.borderColor || 'var(--button-outlined-border)'};
  color: ${({theme, color}) => color ? color : theme?.button?.outlined?.color || 'var(--button-outlined-color)'};

  ${applyStyleModifiers(MODIFIERS)};
`;

const TextButton = styled(BaseButton)`
  border: none;
  background: none;
  padding: 0px;
  color: ${({theme, color}) => color ? color : theme?.button?.text?.color || 'var(--button-text-color)'};

  ${applyStyleModifiers(MODIFIERS)};
`;

const IconButton = styled(BaseButton)`
  padding: 0px;
  border: 0px;
  background: none;
  ${applyStyleModifiers(MODIFIERS)};
`;

export const Button = ({
  variation = '',
  label = '',
  labelDirection = 'right',
  color = '',
  modifiers = [],
  size = '',
  children = '',
  className = '',
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

  switch (variation) {
    case 'contained':
      return (
        <ContainedButton
          color={color}
          modifiers={[...modifiers, size]}
          className={[labelClasses, className].join(' ')}
          {...rest}
        >
          {label ? label : children}
        </ContainedButton>
      );
    case 'outlined':
      return (
        <OutlinedButton
          color={color}
          modifiers={[...modifiers, size]}
          className={[labelClasses, className].join(' ')}
          {...rest}
        >
          {label ? label : children}
        </OutlinedButton>
      );
    case 'text':
      return (
        <TextButton
          color={color}
          modifiers={[...modifiers, size]}
          className={[labelClasses, className].join(' ')}
          {...rest}
        >
          {label ? label : children}
        </TextButton>
      );
    case 'icon':
      return (
        <IconButton
          color={color}
          modifiers={[...modifiers, size]}
          className={[labelClasses, className].join(' ')}
          {...rest}
        >
          {label ? label : children}
        </IconButton>
      );

    default:
      return (
        <BaseButton
          modifiers={[...modifiers, size]}
          className={[labelClasses, className].join(' ')}
          {...rest}
        >
          {label ? label : children}
        </BaseButton>
      );
  }
};

