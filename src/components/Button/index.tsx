import React from 'react';

import tw from 'tw-tailwind';

const BaseButton = tw.button(() => ['border border-blue-500']);

const CustomButton = tw(BaseButton)``;

const ContainedButton = tw(BaseButton)``;

const OutlinedButton = tw(BaseButton)``;

const TextButton = tw(BaseButton)``;

const IconButton = tw(BaseButton)``;

type ButtonVariation = 'contained' | 'outlined' | 'text' | 'icon' | 'custom';
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
    custom: CustomButton,
  };

  const Component = buttonMap[variation];

  return <Component>{label ? label : children}</Component>;
};

export default Button;
