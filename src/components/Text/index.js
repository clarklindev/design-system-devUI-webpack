import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.p`
  color: ${({theme})=> theme?.Text?.marginBottom || 'var()'};
  margin-bottom: ${({theme})=> theme?.Text?.marginBottom || 'var()'};
  
  border: 1px solid red;
`;

export const Text = ({children})=>{
  return <TextContainer>{children}</TextContainer>
}