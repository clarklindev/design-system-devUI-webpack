import React from 'react';
import { Accordion} from './index';

export const AccordionExample = () => {
  
  const data = [
    {
      title: 'helloworld',
      body: 'this is my first answer',
    },
    {
      title: 'rainbow',
      body: 'rainbows are amazing',
    },
    {
      title: 'sun',
      body: 'the sun is amazing',
    },
  ]; 

  return (
    <Accordion
      multiOpen={true}
      // renderprop
      renderItem={({handleClick, indexes, AccordionItem, Separator})=>{
        return data.map((each, index)=>{
          return <React.Fragment key={index}>
            <AccordionItem data={each} onClick={ ()=>handleClick(index)} isOpen={indexes.includes(index)} />
            { (index < data.length-1) && <Separator/>}
          </React.Fragment>
        });
      }}
    />
  );
};

export default AccordionExample;