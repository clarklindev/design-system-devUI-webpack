import React, { useState } from 'react';
import styled from 'styled-components';
import { Separator } from '../Separator';
import { AccordionItem} from './AccordionItem';

import "../../css/default.css";

const AccordionContainer = styled.div`
  display:block;
`;

export const Accordion = ({
  multiOpen,
  renderItem,
}) => {

  const [indexes, setIndexes] = useState([]);

  //@index - filter-out/add or toggle
  const activeIndexesCheck = (index)=>{
    const found = indexes.includes(index);

    if (multiOpen) {
      if (found) {
        // filter-out
        //if index is in the activeIndexes array... remove it
        setIndexes(indexes.filter((item) => item !== index));
      } else {
        //or add
        //add to activeIndexes
        setIndexes([...indexes, index]);
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
  }

  const handleClick = (index) => {
    activeIndexesCheck(index);
  };
  
  return (
    <AccordionContainer className='Accordion'>
      {renderItem({handleClick, indexes, AccordionItem, Separator})}
    </AccordionContainer>
  )
};
