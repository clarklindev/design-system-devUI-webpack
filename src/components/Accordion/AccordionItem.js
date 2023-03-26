import React from 'react';
import styled from 'styled-components';
import {ChevronUpIcon} from '../../icons/ChevronUpIcon';
import {ChevronDownIcon} from '../../icons/ChevronDownIcon';
import { Icon } from '../Icon';

//by using theme here you dont need to pass props
//but this way you also only reading from theme.. what if you want to read from props
const AccordionItemTitle = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  max-height: 50px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 500;

  color:${({theme, titleColor})=> titleColor? titleColor : theme?.Accordion?.tile?.color || 'var()'};
  
  .Icon {
    width: 30px;
    height: 30px;

    > svg {
      stroke: ${({theme})=> theme?.Accordion?.componentIcons?.stroke || 'var()'};
      fill: ${({theme})=> theme?.Accordion?.componentIcons?.fill || 'var()'};
    }
  }
`;

const AccordionItemContent = styled.div`
  color: ${({theme, color})=> color ? color : theme?.Accordion?.content?.color || 'var()'};
  
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
  const { data, isOpen, onClick, showIcon=true} = props;

  return (
    <div className="AccordionItem">
      <AccordionItemTitle
        onClick={(index) => onClick(index)}
        className="AccordionItemTitle"
      >
        {data.title}

        {showIcon && <Icon>{isOpen ? <ChevronUpIcon/> : <ChevronDownIcon/>}</Icon>}

      </AccordionItemTitle>

      <AccordionItemContent className={["AccordionItemContent", isOpen ? "show":"hide"].join(' ')}>
        {data.body}
      </AccordionItemContent>
    </div>
  );
};

