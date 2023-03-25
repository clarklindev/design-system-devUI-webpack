import React from 'react';
import styled from 'styled-components';
import {ChevronUpIcon} from '../../icons/ChevronUpIcon';
import {ChevronDownIcon} from '../../icons/ChevronDownIcon';
import { Icon } from '../Icon';

const AccordionItemContainer = styled.div`
  display: block;
  margin-bottom: 0.5rem;
`;

//by using theme here you dont need to pass props
//but this way you also only reading from theme.. what if you want to read from props
const AccordionItemTitle = styled.div`
  box-sizing: border-box;
  max-height: 50px;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color:${({theme, titleColor})=> titleColor? titleColor : theme?.accordion?.headingColor || 'red'};
  
  .Icon {
    width: 30px;
    height: 30px;

    > svg {
      stroke: red;
      stroke: ${({theme})=> theme?.accordion?.componentIcons?.stroke};
      fill: ${({theme})=> theme?.accordion?.componentIcons?.fill};
    }
  }
`;

const AccordionItemContent = styled.div`
  color: ${({theme, color})=> color ? color : theme?.accordion?.color || 'var(--color-text-white)'};
  
  &.show {
    display: block;
    margin-bottom: 1rem;
  }
  &.hide {
    display: none;
  }
`;

//AccordionItem doesnt know about anything happening on the outside (self contained)
export const AccordionItem = (props) => {
  const { data, isOpen, onClick} = props;

  return (
    <AccordionItemContainer className="AccordionItem">
      <AccordionItemTitle
        onClick={(index) => onClick(index)}
        className="AccordionItemTitle"
      >
        {data.title}

        <Icon>{isOpen ? <ChevronUpIcon/> : <ChevronDownIcon/>}</Icon>

      </AccordionItemTitle>

      <AccordionItemContent className={["AccordionItemContent", isOpen ? "show":"hide"].join(' ')}>
        {data.body}
      </AccordionItemContent>
    </AccordionItemContainer>
  );
};

