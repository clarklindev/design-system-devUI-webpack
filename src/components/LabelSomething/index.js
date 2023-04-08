import React from 'react';

import styled from 'styled-components';

const Generic = styled.div`
  display: inline-flex;
  align-items: center;
  justify-items: center;
  flex-direction: ${({ labelPosition }) => labelPosition};
  gap: ${({ gap }) => gap};
`;

const LabelSomething = ({
  label,
  something,
  labelPosition = 'right',
  labelClickable = false,
  gap,
}) => {
  const positionMap = {
    left: 'row-reverse',
    right: 'row',
    top: 'column-reverse',
    bottom: 'column',
  };

  return (
    <Generic
      as={labelClickable ? 'label' : 'div'}
      labelPosition={positionMap[labelPosition]}
      className={['LabelSomething', labelPosition].join(' ')}
      gap={gap}
    >
      {something}
      <div>{label}</div>
    </Generic>
  );
};

export default LabelSomething;
