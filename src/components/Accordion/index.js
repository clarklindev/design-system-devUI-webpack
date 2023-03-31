import React, { useState, useEffect } from 'react';
import { Separator } from '../Separator';
import { AccordionSection } from './AccordionSection';

export const Accordion = ({ multiOpen, renderItem }) => {
  const [indexes, setIndexes] = useState([]);
  console.log('ACCORDION');

  useEffect(() => {
    console.log('indexes: ', indexes);
  }, [indexes]);

  //@index - filter-out/add or toggle
  const activeIndexesCheck = (index) => {
    const found = indexes.includes(index);

    if (multiOpen) {
      if (found) {
        console.log('found');
        // filter-out
        //if index is in the activeIndexes array... remove it
        setIndexes(indexes.filter((item) => item !== index));
      } else {
        console.log('NOT found');
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
    console.log('handleClick: ', index);
    activeIndexesCheck(index);
  };

  return (
    <div className='Accordion' role='tablist'>
      {renderItem({ handleClick, indexes, AccordionSection, Separator })}
    </div>
  );
};
