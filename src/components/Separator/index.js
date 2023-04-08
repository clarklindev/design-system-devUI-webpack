import React from 'react';
import styled from 'styled-components';

const SeparatorContainer = styled.div`
  box-sizing: border-box;
  display: flex;
`;

const SeparatorHorizontal = styled(SeparatorContainer)`
  display: flex;
  width: 100%;
  border-bottom: ${({ theme }) => theme?.Separator?.border};
  margin: ${({ margin }) => margin};
  background: ${({ theme }) => theme?.Separator?.backgroundColor};
`;

const SeparatorVertical = styled(SeparatorContainer)`
  height: ${({ height }) => height};
  width: 1px;
  background: ${({ theme }) => theme?.Separator?.backgroundColor};
  margin: ${({ margin }) => margin};
`;

const SeparatorHorizontalLabelled = styled(SeparatorContainer)`
  span {
    color: ${({ theme }) => theme?.Separator?.color};
    margin: ${({ margin }) => margin};
  }

  &::before {
    display: flex;
    align-self: center;
    content: '';
    border-bottom: ${({ theme }) => theme?.Separator?.border};
    background: ${({ theme }) => theme?.Separator?.backgroundColor};
    width: 100%;
  }
  &::after {
    display: flex;
    align-self: center;
    content: '';
    border-bottom: ${({ theme }) => theme?.Separator?.border};
    background: ${({ theme }) => theme?.Separator?.backgroundColor};
    width: 100%;
  }
`;

const Separator = ({
  variation = 'horizontal',
  margin = '0px',
  height = 'inherit',
  width = 'inherit',
  label = undefined,
}) => {
  switch (variation) {
    case 'horizontal':
      return (
        <SeparatorHorizontal
          data-component='Separator'
          height={height}
          width={width}
          margin={margin}
        />
      );

    case 'vertical':
      return (
        <SeparatorVertical
          data-component='Separator'
          height={height}
          width={width}
          margin={margin}
        />
      );

    case 'horizontal-labelled':
      return (
        <SeparatorHorizontalLabelled
          data-component='Separator'
          height={height}
          width={width}
          margin={margin}
        >
          <span>{label}</span>
        </SeparatorHorizontalLabelled>
      );
  }
};

export default Separator;
