import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronUpIcon } from '../../icons/ChevronUpIcon';
import { ChevronDownIcon } from '../../icons/ChevronDownIcon';
import { Icon } from '../Icon';

//by using theme here you dont need to pass props
//but this way you also only reading from theme.. what if you want to read from props
const AccordionSectionHeader = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme, titleColor }) =>
    titleColor ? titleColor : theme?.Accordion?.title?.color || 'var()'};
`;

const AccordionSectionTitle = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  .Icon {
    width: 30px;
    height: 30px;

    > svg {
      stroke: ${({ theme }) =>
        theme?.Accordion?.componentIcons?.stroke || 'var()'};
      fill: ${({ theme }) => theme?.Accordion?.componentIcons?.fill || 'var()'};
    }
  }
`;

const AccordionSectionPanel = styled.div`
  color: ${({ theme, color }) =>
    color ? color : theme?.Accordion?.content?.color || 'var()'};

  &.show {
    display: block;
    margin-bottom: 1rem;
  }
  &.hide {
    display: none;
  }
`;

//AccordionSection doesnt know about anything happening on the outside (self contained)
export const AccordionSection = (props) => {
  const {
    data,
    isOpen,
    onClick,
    showIcon = true,
    className = 'Accordion',
    index = 0,
  } = props;

  return (
    <div className='AccordionSection'>
      <AccordionSectionHeader
        className={['AccordionSectionHeader'].join(' ')}
        role='heading'
        aria-level='3'
      >
        <AccordionSectionTitle
          role='button'
          aria-expanded={isOpen ? true : false}
          aria-controls={`AccordionSectionPanel_${index}`}
          aria-disabled={false}
          id={`AccordionSectionTitle_${index}`}
          tabIndex={0}
          onClick={(index) => onClick(index)}
          onKeyDown={(e) => {
            console.log(e.key);
            if (e.key === 'Enter') {
              onClick(index);
            }
          }}
        >
          {data.title}
          {showIcon && (
            <Icon>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</Icon>
          )}
        </AccordionSectionTitle>
      </AccordionSectionHeader>

      <AccordionSectionPanel
        role='region'
        aria-labelledby={`AccordionSectionTitle_${index}`}
        id={`AccordionSectionPanel_${index}`}
        className={['AccordionSectionPanel', isOpen ? 'show' : 'hide'].join(
          ' '
        )}
      >
        {data.body}
      </AccordionSectionPanel>
    </div>
  );
};
