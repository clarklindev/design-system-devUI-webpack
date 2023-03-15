import { Button } from './Button';
import { Heading } from '../Typography';
import { LabelSomething } from '../LabelSomething';
import { Icon } from '../Icon';
import { ThumbsUpIcon } from '../../icons/ThumbsUpIcon';

export const ButtonWithLabelSomethingExample = () => {
  const icon = ThumbsUpIcon;

  return (
    <div className='flex flex-col'>
      <Heading variation='h6'>Button + LabelSomething</Heading>

      {/* aligned with tailwindcss - flex-row items are height auto-stretch so for them to be variable height, need to use items-end or items-start */}
      {/*------------------------------------------------------------------------------------------------------- */}
      <div className='flex flex-row mb-10 gap-x-5 items-end'>
        {/* contained */}
        <Button
          variation='contained'
          backgroundColor='red'
          color='white'
          label={
            <LabelSomething
              spacing='2'
              label='left'
              labelPosition='left'
              something={
                <Icon iconSize='30px' color='white'>
                  {icon}
                </Icon>
              }
            />
          }
        />

        <Button
          variation='contained'
          backgroundColor='red'
          color='white'
          label={
            <LabelSomething
              spacing='2'
              label='top'
              labelPosition='top'
              something={
                <Icon iconSize='30px' color='white'>
                  {icon}
                </Icon>
              }
            />
          }
        />

        <Button
          variation='contained'
          backgroundColor='red'
          color='white'
          label={
            <LabelSomething
              spacing='2'
              label='bottom'
              labelPosition='bottom'
              something={
                <Icon iconSize='30px' color='white'>
                  {icon}
                </Icon>
              }
            />
          }
        />

        <Button
          variation='contained'
          backgroundColor='red'
          color='white'
          label={
            <LabelSomething
              spacing='2'
              label='right'
              labelPosition='right'
              something={
                <Icon iconSize='30px' color='white'>
                  {icon}
                </Icon>
              }
            />
          }
        />
      </div>
      {/*------------------------------------------------------------------------------------------------------- */}

      {/* outlined */}
      <div className='flex flex-row mb-10 gap-x-5 items-end'>
        <Button
          variation='outlined'
          borderColor='red'
          color='red'
          label={
            <LabelSomething
              spacing='2'
              label='left'
              labelPosition='left'
              something={
                <Icon iconSize='30px' color='red'>
                  {icon}
                </Icon>
              }
            />
          }
        />

        <Button
          variation='outlined'
          borderColor='red'
          color='red'
          label={
            <LabelSomething
              spacing='2'
              label='top'
              labelPosition='top'
              something={
                <Icon iconSize='30px' color='red'>
                  {icon}
                </Icon>
              }
            />
          }
        />

        <Button
          variation='outlined'
          borderColor='red'
          color='red'
          label={
            <LabelSomething
              spacing='2'
              label='bottom'
              labelPosition='bottom'
              something={
                <Icon iconSize='30px' color='red'>
                  {icon}
                </Icon>
              }
            />
          }
        />

        <Button
          variation='outlined'
          borderColor='red'
          color='red'
          label={
            <LabelSomething
              spacing='2'
              label='right'
              labelPosition='right'
              something={
                <Icon iconSize='30px' color='red'>
                  {icon}
                </Icon>
              }
            />
          }
        />
      </div>
      {/*------------------------------------------------------------------------------------------------------- */}

      {/* text */}
      <div className='flex flex-row gap-x-5 items-end'>
        <Button
          variation='text'
          color='grey'
          label={
            <LabelSomething
              spacing='2'
              label='left'
              labelPosition='left'
              something={
                <Icon iconSize='30px' color='white'>
                  {icon}
                </Icon>
              }
            />
          }
        />

        <Button
          variation='text'
          color='grey'
          label={
            <LabelSomething
              spacing='2'
              label='top'
              labelPosition='top'
              something={
                <Icon iconSize='30px' color='white'>
                  {icon}
                </Icon>
              }
            />
          }
        />

        <Button
          variation='text'
          color='grey'
          label={
            <LabelSomething
              spacing='2'
              label='bottom'
              labelPosition='bottom'
              something={
                <Icon iconSize='30px' color='white'>
                  {icon}
                </Icon>
              }
            />
          }
        />

        <Button
          variation='text'
          color='grey'
          label={
            <LabelSomething
              spacing='2'
              label='right'
              labelPosition='right'
              something={
                <Icon iconSize='30px' color='white'>
                  {icon}
                </Icon>
              }
            />
          }
        />
      </div>
    </div>
  );
};
