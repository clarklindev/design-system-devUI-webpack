import React, { useState, useEffect } from 'react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';



export const AccordionExample = () => {
  
  const [data, setData] = useState(); //savedData is when we are saving data, 'data' is presented data that is not updated, we 'setData' on init with useEffect()
  
  useEffect(()=>{
    setData([
      {
        title: 'helloworld',
        body: 'this is my first post',
      },
      {
        title: 'rainbow',
        body: 'rainbows are amazing',
      },
    ]);
  }, [])

  return (
    <Accordion
      multiOpen={true}
      startActiveItems={[0, 1]}//indexes
      data={data}
      childClass={AccordionItem}
    />
  );
};
