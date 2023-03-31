import React, { useState } from 'react';
import styled from 'styled-components';
import { Separator } from '../Separator';
import { ChevronUpIcon } from '../../icons/ChevronUpIcon';
import { ChevronDownIcon } from '../../icons/ChevronDownIcon';
import { PlusSmallIcon } from '../../icons/PlusSmallIcon';
import { MinusSmallIcon } from '../../icons/MinusSmallIcon';

import { Icon } from '../Icon';

export const Accordion = ({
  multiOpen,
  data,
  iconType = 'plusminus',
  showSeparator = true,
}) => {
  const [indexes, setIndexes] = useState([]);

  //@index - filter-out/add or toggle
  const activeIndexesCheck = (index) => {
    const found = indexes.includes(index);
    if (multiOpen) {
      if (found) {
        // filter-out
        //if index is in the activeIndexes array... remove it
        setIndexes(indexes.filter((item) => item !== index));
      } else {
        //or add
        //add to activeIndexes = Set is unique values
        setIndexes([...new Set([...indexes, index])]);
      }
    } else {
      //toggle
      //only allowed one open at a time
      if (found) {
        //remove it
        setIndexes([]);
      } else {
        //add it
        setIndexes([index]);
      }
    }
  };

  const handleClick = (index) => {
    activeIndexesCheck(index);
  };

  return (
    <div className='Accordion' role='tablist'>
      {data.map((each, index) => {
        return (
          <React.Fragment key={`${index}`}>
            <AccordionSection
              key={index}
              data={each}
              index={index}
              onClick={() => handleClick(index)}
              isOpen={indexes.includes(index)}
              iconType={iconType}
            />
            {index < data.length - 1 && showSeparator && <Separator />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// ---------------------------------------------------------------------------------------------

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

  &[data-expanded='true'] {
    display: block;
    margin-bottom: 1rem;
  }

  &[data-expanded='false'] {
    display: none;
  }
`;

//AccordionSection doesnt know about anything happening on the outside (self contained)
export const AccordionSection = (props) => {
  const { data, isOpen, onClick, index = 0, iconType } = props;

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
            switch (e.key) {
              case 'Enter':
              case ' ':
                onClick(index);
                break;
            }
          }}
        >
          {data.title}
          {iconType !== 'hidden' && (
            <Icon>
              {isOpen ? iconMap[iconType].open : iconMap[iconType].closed}
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
      >
        {data.body}
      </AccordionSectionPanel>
    </div>
  );
};
