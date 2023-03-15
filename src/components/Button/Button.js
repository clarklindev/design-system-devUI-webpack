import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { MODIFIERS } from './modifiers';

const BaseButton = styled.button`
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.button.base.borderColor};
  background-color: ${(props) => props.theme.button.base.backgroundColor};
  color: ${(props) => props.theme.button.base.color};
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  cursor: pointer;
  padding: 10px ${(props) => props.theme.global.padding};
  border-radius: ${(props) => props.theme.global.borderRadius};
  ${applyStyleModifiers(MODIFIERS)};
`;

const ContainedButton = styled(BaseButton)`
  border: none;
  background-color: ${(props) =>
    props.theme.color[props.backgroundColor]
      ? props.theme.color[props.backgroundColor]
      : props.backgroundColor
      ? props.backgroundColor
      : props.theme.button.contained.backgroundColor};

  color: ${(props) =>
    props.theme.color[props.color]
      ? props.theme.color[props.color]
      : props.color
      ? props.color
      : props.theme.button.contained.color};
  ${applyStyleModifiers(MODIFIERS)};
`;

const OutlinedButton = styled(BaseButton)`
  border: 1px solid
    ${(props) =>
      props.theme.color[props.borderColor]
        ? props.theme.color[props.borderColor]
        : props.borderColor
        ? props.borderColor
        : props.theme.button.outlined.borderColor};
  background-color: transparent;

  color: ${(props) =>
    props.theme.color[props.color]
      ? props.theme.color[props.color]
      : props.color
      ? props.color
      : props.theme.button.outlined.color};

  ${applyStyleModifiers(MODIFIERS)};
`;

const TextButton = styled(BaseButton)`
  border: none;
  background: none;
  color: ${(props) =>
    props.theme.color[props.color]
      ? props.theme.color[props.color]
      : props.color
      ? props.color
      : props.theme.button.text.color};
  padding: 0px;

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
