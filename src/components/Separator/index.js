import React from 'react';
import styled from 'styled-components';

const SeparatorContainer = styled.div`
  box-sizing: border-box;

  &.horizontal {
    width: ${({ width }) => width};
    border-bottom: 1px solid
      ${({ theme }) => theme?.Separator?.borderColor || 'var()'};
    margin: ${({ theme, margin }) =>
      margin ? margin : theme?.Separator?.margin || 'var()'};
  }

  &.vertical {
    height: ${({ height }) => height};
    border-right: 1px solid
      ${({ theme }) => theme?.Separator?.borderColor || 'var()'};
    margin: ${({ theme, margin }) =>
      margin ? margin : theme?.Separator?.margin || 'var()'};
  }
`;

export const Separator = ({
  direction = 'horizontal',
  margin = '0px 0px',
  height = 'inherit',
  width = 'inherit',
}) => {
  return (
    <SeparatorContainer
      margin={margin}
      width={width}
      height={height}
      className={['Separator', direction].join(' ')}
    />
  );
};
