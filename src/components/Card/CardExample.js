import { Heading } from '../Typography';
import { Card } from './Card';

export const CardExample = () => {
  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>no drop shadow</Heading>
      <Card
        color='white'
        borderColor='#DDD'
        borderRadius='10px'
        width='550px'
        height='100px'
      ></Card>
    </div>
  );
};

export const CardWithDropshadowExample = () => {
  return (
    <div className='flex flex-col'>
      <Heading variation='h6'>drop shadow</Heading>
      <Card
        color='white'
        borderColor='#DDD'
        borderRadius='10px'
        width='550px'
        height='100px'
        modifiers='shadow'
      ></Card>
    </div>
  );
};
