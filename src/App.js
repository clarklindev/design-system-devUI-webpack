import React, { useEffect, useState } from 'react';

//styling
import "./default.css";

//theming
import { darkTheme } from './themes/DarkTheme';
import { ThemeProvider } from 'styled-components';

//layout
import { Layout } from './components/Layout';

//Heading
import { Heading } from './components/Heading';
import { HeadingExample} from './components/Heading/HeadingExample';

//-----------------------------------------------------------------------------------

import { AccordionExample } from './components/Accordion/AccordionExample';

import {ButtonExample } from './components/Button/ButtonExample';
import {ButtonVariationExample} from './components/Button/ButtonVariationExample';
import {ButtonModifiersExample} from './components/Button/ButtonModifiersExample';
import {ButtonWithLabelSomethingExample} from './components/Button/ButtonWithLabelSomethingExample';

import { LabelSomethingExample } from './components/LabelSomething/LabelSomethingExample';

// import { SnackbarExample } from './components/Snackbar';
// import {
//   InputExample,
//   InputNoBorderExample,
//   InputPasswordExample,
//   InputReadOnlyExample,
//   InputSearchExample,
//   InputWithIconExample,
// } from './components/Input';
// import {
//   RadioButtonExample,
//   RadioButtonGroupExample,
//   RadioButtonGroupAndLabelSomethingExample,
//   RadioButtonAndLabelSomethingExample,
// } from './components/RadioButton';
// import {
//   CheckboxExample,
//   CheckboxGroupExample,
//   CheckboxAndLabelSomethingExample,
//   CheckboxGroupAndLabelSomethingExample,
//   CheckboxIconExample,
// } from './components/Checkbox';
// import { CounterExample } from './components/Counter';

// import { SelectExample } from './components/Select';
// import { ToggleSwitchExample } from './components/Switch';
// import { ListExample } from './components/List';
// import { CardExample, CardWithDropshadowExample } from './components/Card';
// import { TableExample } from './components/Table';
// import { SliderExample, MultiRangeSliderExample } from './components/Slider';
// import { UseHoverExample, UseFocusExample } from './customhooks';

const App = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(darkTheme);
  }, []);

  return (
    <ThemeProvider theme={theme ? theme : {}}>
      <div className='App'>
        
        {/* theme */}
        <Layout variation="section">
          <Heading variation='h4'>01. Theme</Heading> 
          <div className='flex flex-col items-start gap-2'>
          <button onClick={() => setTheme(lightTheme)}>light theme</button>
          <button onClick={() => setTheme(darkTheme)}>dark theme</button>
          </div>
        </Layout>

        {/* typography */}
        <Layout variation="section">
          <Heading variation='h4'>02. Typography</Heading>
          <HeadingExample />
        </Layout>

        {/* labelsomething */}
        <Layout variation="section">
          <Heading variation='h4'>04. LabelSomething</Heading>
          <LabelSomethingExample />
        </Layout>
      
        {/* buttons */}
        <Layout variation="section">
          <Heading variation='h4'>05. Buttons</Heading>
          <ButtonExample />
          <ButtonVariationExample />
          <ButtonModifiersExample />
          <ButtonWithLabelSomethingExample /> 
        </Layout>

        {/* accordion */}
        <Layout variation="section">
          <Heading variation='h4'>15. Accordion</Heading> 
          <AccordionExample />
        </Layout>

      </div>
    </ThemeProvider>
  );
};

export default App;
  
        //   <Block>
        //     <Heading variation='h4'>03. Helper hooks</Heading>
        //     <UseHoverExample />
        //     <UseFocusExample />
        //   </Block>

       
        //   <Block>
        //     <Heading variation='h4'>06. Snackbar</Heading>
        //     <div className='flex flex-col'>
        //       <SnackbarExample />
        //     </div>
        //   </Block>

        //   <Block>
        //     <Heading variation='h4'>07. Input</Heading>
        //     <div className='flex flex-col'>
        //       <InputExample />
        //       <InputReadOnlyExample />
        //       <InputNoBorderExample />
        //       <InputWithIconExample />
        //       <InputPasswordExample />
        //       <InputSearchExample />
        //     </div>
        //   </Block>

        //   <Block>
        //     <Heading variation='h4'>08. Select</Heading>
        //     <SelectExample />
        //   </Block>

        //   <Block>
        //     <Heading variation='h4'>09. Counter</Heading>
        //     <CounterExample />
        //   </Block>

        //   <Block>
        //     <Heading variation='h4'>10. Radio Button</Heading>
        //     <div className='flex flex-col'>
        //       <RadioButtonExample />
        //       <RadioButtonGroupExample />
        //       <RadioButtonAndLabelSomethingExample />
        //       <RadioButtonGroupAndLabelSomethingExample />
        //     </div>
        //   </Block>

        //   <Block>
        //     <Heading variation='h4'>11. Checkbox</Heading>
        //     <div className='flex flex-col'>
        //       <CheckboxExample />
        //       <CheckboxGroupExample />
        //       <CheckboxAndLabelSomethingExample />
        //       <CheckboxGroupAndLabelSomethingExample />

        //       <CheckboxIconExample />
        //     </div>
        //   </Block>

        //   <Block>
        //     <Heading variation='h4'>12. ToggleSwitch </Heading>
        //     <div className='flex flex-col'>
        //       <ToggleSwitchExample />
        //     </div>
        //   </Block>

        //   <Block>
        //     <Heading variation='h4'>13. Slider</Heading>
        //     <SliderExample />
        //   </Block>

        //   <Block>
        //     <Heading variation='h4'>14. Multi-range slider</Heading>
        //     <MultiRangeSliderExample />
        //   </Block>
          
        //   <Block>
        //     <Heading variation='h4'>16. List</Heading>
        //     <ListExample />
        //   </Block>

        //   <Block>
        //     <Heading variation='h4'>17. Card</Heading>
        //     <div className='flex flex-col'>
        //       <CardExample />
        //       <CardWithDropshadowExample />
        //     </div>
        //   </Block>

        //   <Block>
        //     <Heading variation='h4'>18. Layout</Heading>
        //     <div className='flex items-start flex-col'> 
        //       <a
        //         href='https://swagfinger-component-scss-flexbox-grid.vercel.app/'
        //         target='_blank'
        //         rel='noreferrer'
        //       >
        //         sass flexbox-grid -
        //         https://swagfinger-component-scss-flexbox-grid.vercel.app/
        //       </a>
        //       <a
        //         href='https://github.com/swagfinger/swagfinger-component-scss-flexbox-grid'
        //         target='_blank'
        //         rel='noreferrer'
        //       >
        //         github -
        //         https://github.com/swagfinger/swagfinger-component-scss-flexbox-grid
        //       </a>
        //     </div>
        //   </Block>

        //   <Block>
        //     <Heading variation='h4'>19. Table</Heading>
        //     <TableExample />
        //   </Block> 

        //   <Block>
        //     <Heading variation='h4'>20. Navbar</Heading>
        //   </Block>
        //   <Block>
        //     <Heading variation='h4'>21. Link</Heading>
        //   </Block>
        //   <Block>
        //     <Heading variation='h4'>22. Breadcrumbs</Heading>
        //   </Block>
        //   <Block>
        //     <Heading variation='h4'>23. Dialog (aka Modal)</Heading>
        //   </Block>
        //  <Block>
        //     <Heading variation='h4'>24. Progress</Heading>
        //   </Block>
        //   <Block>
        //     <Heading variation='h4'>25. Loading Button</Heading>
        //   </Block>
        //   <Block>
        //     <Heading variation='h4'>26. Timeline</Heading>
        //   </Block>

        //   <Block>
        //     <Heading variation='h4'>27. Multi-input</Heading>
        //     <div className='flex flex-col'></div>
        //   </Block>
        //   <Block>
        //     <Heading variation='h4'>28. Multi-input Objects</Heading>
        //     <div className='flex flex-col'></div>
        //   </Block>
        //   <Block>
        //     <Heading variation='h4'>29. Multi-select with input</Heading>
        //   </Block>
        //   <Block>
        //     <Heading variation='h4'>30. Upload</Heading>
        //   </Block>
        //   <Block>
        //     <Heading variation='h4'>
        //      31. DatePicker, TimePicker, DateTimePicker
        //     </Heading>
        //   </Block>
        //   <Block>
        //     <Heading variation='h4'>32. DateRangePicker</Heading>
        //   </Block> 
