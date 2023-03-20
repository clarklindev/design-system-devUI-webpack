import React from 'react';
import styled from 'styled-components';

const CheckboxIconContainer = styled.div`
  label {
    display: inline-flex;
    cursor: pointer;
  }
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckboxIcon = ({ savedData, configure, children }) => {
  const checked = savedData;
  const { onChange, icon = undefined } = configure;

  return (
    <CheckboxIconContainer className='CheckboxIcon'>
      <label>
        <HiddenCheckbox checked={checked} onChange={onChange} />
        {icon ? icon : children}
      </label>
    </CheckboxIconContainer>
  );
};
