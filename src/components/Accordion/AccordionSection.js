import React, { useRef } from 'react';

import { ChevronUpIcon } from '../../icons/ChevronUpIcon';
import { ChevronDownIcon } from '../../icons/ChevronDownIcon';
import { PlusSmallIcon } from '../../icons/PlusSmallIcon';
import { MinusSmallIcon } from '../../icons/MinusSmallIcon';
import styled from 'styled-components';
import { Icon } from '../Icon';

//by using theme here you dont need to pass props
//but this way you also only reading from theme.. what if you want to read from props
const AccordionSectionHeader = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme, titleColor }) =>
    titleColor ? titleColor : theme?.Accordion?.title?.color || 'var()'};
  margin-bottom: ${({ showSeparator }) => (showSeparator ? '15px' : '0px')};
  margin-top: ${({ showSeparator }) => (showSeparator ? '15px' : '0px')};
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
      stroke: ${({ stroke, theme }) =>
        stroke ? stroke : theme?.Accordion?.componentIcons?.stroke || 'var()'};
      fill: ${({ fill, theme }) =>
        fill ? fill : theme?.Accordion?.componentIcons?.fill || 'var()'};
    }
  }
`;

const AccordionSectionPanel = styled.div`
  overflow: hidden;
  color: ${({ theme, color }) =>
    color ? color : theme?.Accordion?.content?.color || 'var()'};

  &[data-expanded='false'] {
    visibility: hidden;
    opacity: 0;
    max-height: 0px;
    transition: all 0.1s ease-in-out;
  }

  &[data-expanded='true'] {
    visibility: visible;
    opacity: 1;
    max-height: ${({ scrollHeight }) => scrollHeight + 'px'};
    transition: all 0.1s ease-in-out;
  }
`;

const AccordionSectionPanelContent = styled.div`
  padding: ${({ showSeparator }) => (showSeparator ? '0 0 20px 0' : '20px 0')};
`;

//AccordionSection doesnt know about anything happening on the outside (self contained)
export const AccordionSection = ({
  data,
  isOpen,
  onClick,
  index = 0,
  icon,
  showSeparator,
}) => {
  const panelRef = useRef(null);

  const iconMap = {
    chevron: { open: <ChevronUpIcon />, closed: <ChevronDownIcon /> },
    plusminus: { open: <MinusSmallIcon />, closed: <PlusSmallIcon /> },
    hidden: {},
  };

  return (
    <div className='AccordionSection'>
      <AccordionSectionHeader
        className={['AccordionSectionHeader'].join(' ')}
        role='heading'
        aria-level='3'
        showSeparator={showSeparator}
      >
        <AccordionSectionTitle
          role='button'
          aria-expanded={isOpen ? true : false}
          aria-controls={`AccordionSectionPanel_${index}`}
          aria-disabled={false}
          id={`AccordionSectionTitle_${index}`}
          tabIndex={0}
          stroke={icon.stroke}
          fill={icon.fill}
          onClick={(index) => onClick(index)}
          onKeyDown={(e) => {
            console.log(e.key);
            switch (e.key) {
              case 'Enter':
              case ' ':
                onClick(index);
                break;
            }
          }}
        >
          {data.title}
          {icon.type !== 'hidden' && (
            <Icon>
              {isOpen ? iconMap[icon.type].open : iconMap[icon.type].closed}
            </Icon>
          )}
        </AccordionSectionTitle>
      </AccordionSectionHeader>

      <AccordionSectionPanel
        role='region'
        aria-labelledby={`AccordionSectionTitle_${index}`}
        id={`AccordionSectionPanel_${index}`}
        className='AccordionSectionPanel'
        data-expanded={isOpen ? 'true' : 'false'}
        ref={panelRef}
        scrollHeight={panelRef?.current?.scrollHeight}
      >
        <AccordionSectionPanelContent showSeparator={showSeparator}>
          {data.body}
        </AccordionSectionPanelContent>
      </AccordionSectionPanel>
    </div>
  );
};
