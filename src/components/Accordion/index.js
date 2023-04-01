import React, { useState } from 'react';
import { Separator } from '../Separator';
import { AccordionSection } from './AccordionSection';

export const Accordion = ({
  multiOpen,
  data,
  icon = {
    type: 'plusminus',
    size: '30px',
    fill,
    stroke,
  },
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
          <React.Fragment key={index}>
            <AccordionSection
              data={each}
              index={index}
              icon={icon}
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
