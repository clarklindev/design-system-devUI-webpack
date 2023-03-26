import React from 'react';

import styled from 'styled-components';


const Generic = styled.div`
  display: grid;

  &.right {
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    align-self: center;
    justify-items: center;
    grid-gap: ${({theme, gap})=> gap ? gap : theme?.LabelSomething?.gap || 'var()'};

    border: 1px solid red;

    > *:first-child {
      grid-row: 1 / span 2; /* Takes up full height of grid */
      grid-column: 1 / span 1; /* Takes up left half of grid */
    }
    > *:last-child {
      grid-row: 1 / span 2; /* Takes up top half of grid */
      grid-column: 2 / span 1; /* Takes up right half of grid */
    }
  }
  
  &.left{
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    align-self: center;
    justify-items: center;
    grid-gap: ${({theme, gap})=> gap ? gap : theme?.LabelSomething?.gap || 'var()'};

    border: 1px solid red;

    > *:first-child {
      grid-row: 1 / span 2; /* Takes up full height of grid */
      grid-column: 2 / span 1; /* Takes up right half of grid */
    }
    > *:last-child {
      grid-row: 1 / span 2; /* Takes up full height of grid */
      grid-column: 1 / span 1; /* Takes up left half of grid */
    }
  } 

  /* 'top' position */
  &.top {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    align-self: center;
    justify-items: center;
    grid-gap: ${({theme, gap})=> gap ? gap : theme?.LabelSomething?.gap || 'var()'};

    border: 1px solid red;

    > *:first-child {
      grid-row: 2 / span 1; /* Takes up bottom half of grid */
      grid-column: 1 / span 2; /* Takes up full width of grid */
    }
    > *:last-child {
      grid-row: 1 / span 1; /* Takes up top half of grid */
      grid-column: 1 / span 2; /* Takes up full width of grid */
    }
  }

  /* 'bottom' position */
  &.bottom {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    align-self: center;
    justify-items: center;

    border: 1px solid red;
    
    grid-gap: ${({theme, gap})=> gap ? gap : theme?.LabelSomething?.gap || 'var()'};

    > *:first-child {
      grid-row: 1 / span 1; /* Takes up top half of grid */
      grid-column: 1 / span 2; /* Takes up full width of grid */
    }
    > *:last-child {
      grid-row: 2 / span 1; /* Takes up bottom half of grid */
      grid-column: 1 / span 2; /* Takes up full width of grid */
    }
  }

  
`;

export const LabelSomething = ({
  label,
  something,
  labelPosition = 'right',
  labelClickable = false,
  gap
}) => {

  return (
    <Generic as={labelClickable ? 'label' : 'div'} className={["LabelSomething", labelPosition].join(' ')} gap={gap}>
      {something}
      <div>{label}</div>
    </Generic>
  );
};
