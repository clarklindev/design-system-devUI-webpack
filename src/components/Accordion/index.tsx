import React, { useState } from 'react';
import Separator from '../Separator';
import AccordionSection from './AccordionSection';

import { IconType } from '../Icon';

type AccordionData = {
  title: string;
  body: string;
};

export type AccordionIconType = 'plusminus' | 'hidden' | 'chevron';

type AccordionProps = {
  iconType?: AccordionIconType;
  multiOpen?: boolean;
  data: AccordionData[];
  icon?: IconType;
  showSeparator?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({
  multiOpen = 'true',
  iconType = 'plusminus',
  icon = {
    size: '30px',
  },
  showSeparator = true,
  data,
}) => {
  const [indexes, setIndexes] = useState<number[]>([]);

  //@index - filter-out/add or toggle
  const activeIndexesCheck = (index: number) => {
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

  const handleClick = (index: number) => {
    activeIndexesCheck(index);
  };

  return (
    <div className='Accordion' role='tablist'>
      {data.map((each: AccordionData, index: number) => {
        return (
          <React.Fragment key={index}>
            <AccordionSection
              data={each}
              index={index}
              icon={icon}
              iconType={iconType}
              showSeparator={showSeparator}
              onClick={() => handleClick(index)}
              isOpen={indexes.includes(index)}
            />
            {showSeparator && <Separator />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Accordion;
