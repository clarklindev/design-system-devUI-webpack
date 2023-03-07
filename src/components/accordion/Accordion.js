import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  display: block;
`;

export const Accordion = ({
  render,
  multiOpen = true,
  startActiveItems = [],
}) => {
  const [activeItems, setActiveItems] = useState(startActiveItems); //set initial active items // activeItems holds item indexs to show
  const [allowMultiOpen, setAllowMultiOpen] = useState(multiOpen);

  useEffect(() => {
    console.log('Accordion is rendered');
  });

  useEffect(() => {
    startActiveItems.forEach((item) => {
      activeItemsCheck(item);
    });
  }, [startActiveItems]);

  useEffect(() => {
    setAllowMultiOpen(multiOpen);
  }, [multiOpen]);

  const activeItemsCheck = useCallback(
    (index) => {
      const found = activeItems.some((item) => item === index);

      if (allowMultiOpen) {
        if (found) {
          //if index is in the activeItems array... remove it
          setActiveItems(activeItems.filter((item) => item !== index));
        } else {
          //add to activeItems
          setActiveItems([...activeItems, index]);
        }
      } else {
        //only allowed one open at a time
        if (found) {
          //remove it
          setActiveItems([]);
        } else {
          //add it
          setActiveItems([index]);
        }
      }
    },
    [allowMultiOpen, activeItems]
  );

  const handleClick = (index) => {
    activeItemsCheck(index);
  };

  return (
    <AccordionContainer className={'Accordion'}>
      {render({ activeItems, handleClick })}
    </AccordionContainer>
  );
};
