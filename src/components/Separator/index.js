import React from 'react';
import styled from 'styled-components';

const SeparatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({theme})=> theme?.separator?.borderColor || 'var()'};
`;

export const Separator = () =>{
  return (
    <SeparatorContainer/>
  );
}