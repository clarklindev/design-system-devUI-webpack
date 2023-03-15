import { LabelSomething } from './LabelSomething';
import { Icon } from '../Icon';
import { SmileyIcon } from '../../icons/SmileyIcon';

export const LabelSomethingExample = () => {
  const icon = SmileyIcon;

  return (
    <div className='flex flex-col gap-10'>
      <LabelSomething
        spacing='2'
        label='label'
        labelPosition='left'
        align='center'
        something={
          <Icon iconSize='30px' color='white'>
            {icon}
          </Icon>
        }
      />
      <LabelSomething
        spacing='2'
        label='label'
        labelPosition='right'
        align='center'
        something={
          <Icon iconSize='30px' color='white'>
            {icon}
          </Icon>
        }
      />
      <LabelSomething
        spacing='5'
        label='label'
        labelPosition='top'
        align='center'
        something={
          <Icon iconSize='30px' color='white'>
            {icon}
          </Icon>
        }
      />
      <LabelSomething
        spacing={10}
        label='label'
        labelPosition='bottom'
        align='center'
        something={
          <Icon iconSize='30px' color='white'>
            {icon}
          </Icon>
        }
      />
    </div>
  );
};
