import styled from 'styled-components';

const Label = styled.label``;
const Div = styled.div``;

export const LabelSomething = ({
  label,
  labelPosition = 'right',
  something,
  align = 'center',
  spacing = '',
  labelClickable = false,
  ...rest
}) => {
  let containerClasses = 'flex self-start';

  let positionClasses = '';
  switch (labelPosition) {
    case 'top':
      positionClasses = 'flex-col-reverse';
      break;
    case 'bottom':
      positionClasses = 'flex-col';
      break;
    case 'left':
      positionClasses = 'flex-row-reverse';
      break;
    case 'right':
      positionClasses = 'flex-row';
      break;
    default:
      positionClasses = 'flex-row';
  }

  let alignClasses = '';
  switch (align) {
    case 'top':
    case 'start':
      alignClasses = 'items-start';
      break;
    case 'end':
    case 'bottom':
      alignClasses = 'items-end';
      break;
    case 'center':
      alignClasses = 'items-center';
      break;
    default:
      alignClasses = 'items-center';
  }

  let spacingClasses = '';
  switch (labelPosition) {
    case 'left':
      spacingClasses = `space-x-reverse space-x-6`;
      break;
    case 'top':
      spacingClasses = `space-y-reverse space-y-6`;
      break;
    case 'bottom':
      spacingClasses = `space-y-6`;
      break;
    case 'right':
      spacingClasses = `space-x-6`;
      break;
    default:
      spacingClasses = `space-x-6`;
  }

  const Element =
    labelClickable === true || labelClickable === 'true' ? Label : Div;

  return (
    <Element
      className={[
        containerClasses,
        positionClasses,
        alignClasses,
        spacingClasses,
      ].join(' ')}
      {...rest}
    >
      {something}
      {<div>label</div>}
    </Element>
  );
};
