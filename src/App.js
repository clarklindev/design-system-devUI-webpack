import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

//styling
import "./default.css";

//theming
import { darkTheme } from './themes/DarkTheme';

//Layout
import { Layout } from './components/Layout';

//Heading
import { Heading } from './components/Heading';
import { HeadingExample} from './components/Heading/HeadingExample';

//Text
import { TextExample} from './components/Text/TextExample';

//LabelSomething
import { LabelSomethingExample } from './components/LabelSomething/LabelSomethingExample';

//Buttons
import { ButtonExample } from './components/Button/ButtonExample';
import { ButtonContainedExample } from './components/Button/ButtonContainedExample';
import { ButtonOutlinedExample } from './components/Button/ButtonOutlinedExample';
import { ButtonTextExample } from './components/Button/ButtonTextExample';
import { ButtonIconExample } from './components/Button/ButtonIconExample';
import { ButtonWithLabelSomethingExample } from './components/Button/ButtonWithLabelSomethingExample';
import { ButtonModifiersExample } from './components/Button/ButtonModifiersExample';

//Accordion
import { AccordionExample } from './components/Accordion/AccordionExample';

//Snackbar
import { SnackbarExample } from './components/Snackbar/SnackbarExample';

//-----------------------------------------------------------------------------------





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
  const [theme, setTheme] = useState({});

  useEffect(() => {
    setTheme(darkTheme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        
        {/* theme */}
        {/* <Layout variation="section">
          <Heading variation='h4'>01. Theme</Heading> 
          <div className='flex flex-col items-start gap-2'>
          <button onClick={() => setTheme(lightTheme)}>light theme</button>
          <button onClick={() => setTheme(darkTheme)}>dark theme</button>
          </div>
        </Layout> */}

        {/* Typography */}
        <Layout variation="section">
          <Heading variation='h4'>Headings</Heading>
          
          <Layout variation="block">
            <HeadingExample />
          </Layout>
        </Layout>

        <Layout variation="section">
          <Heading variation='h4'>Text</Heading>
          <Layout variation="block">
            <TextExample/>
          </Layout>
        </Layout>

        {/* Labelsomething */}
        <Layout variation="section">
          <Heading variation='h4'>LabelSomething</Heading>

          <Layout variation="block">
            <LabelSomethingExample />
          </Layout>
        </Layout>
      
        {/* Buttons */}
        <Layout variation="section">
          <Heading variation='h4'>Buttons</Heading>

          <Layout variation="block">
            <Heading variation="h5">Basic button</Heading>
            <ButtonExample />
          </Layout>

          <Layout variation="block">
            <Heading variation="h5">Contained button</Heading>
            <ButtonContainedExample/>
          </Layout>

          <Layout variation="block">
            <Heading variation="h5">Outlined button</Heading>
            <ButtonOutlinedExample/>
          </Layout>

          <Layout variation="block">
            <Heading variation="h5">Text button</Heading>
            <ButtonTextExample/>
          </Layout>

          <Layout variation="block">
            <Heading variation="h5">Icon button</Heading>
            <ButtonIconExample/>
          </Layout>

          <Layout variation="block">
            <Heading variation="h5">Button+LabelSomething button</Heading>
            <ButtonWithLabelSomethingExample/>
          </Layout>

          <Layout variation="block">
            <Heading variation="h5">Button modifiers</Heading>
            <ButtonModifiersExample/>
          </Layout>
          
        </Layout>

        {/* Accordion */}
        <Layout variation="section">
          <Heading variation='h4'>Accordion</Heading> 

          <Layout variation="block">            
            <AccordionExample />
          </Layout>
        </Layout>

        {/* Snackbar */}
        <Layout variation="section">
          <Heading variation='h4'>Snackbar</Heading>

          <Layout variation="block">
            <SnackbarExample />
          </Layout>
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
