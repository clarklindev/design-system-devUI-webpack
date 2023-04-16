import React from 'react';

import styled from 'styled-components';

const BaseButton = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  cursor: pointer;
`;

const ContainedButton = styled(BaseButton)``;

const OutlinedButton = styled(BaseButton)``;

const TextButton = styled(BaseButton)``;

const IconButton = styled(BaseButton)``;

type ButtonVariation = 'contained' | 'outlined' | 'text' | 'icon';
type LabelType = string | number | React.ReactNode;

interface ButtonProps {
  variation: ButtonVariation;
  label?: LabelType;
  children?: LabelType;
}

const Button: React.FC<ButtonProps> = ({ variation, label, children }) => {
  const buttonMap = {
    contained: ContainedButton,
    outlined: OutlinedButton,
    text: TextButton,
    icon: IconButton,
  };

  const Component = buttonMap[variation];

  return <Component>{label ? label : children}</Component>;
};

export default Button;
