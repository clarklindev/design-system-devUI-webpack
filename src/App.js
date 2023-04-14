import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

//styling
import './default.css';

//theming
import { defaultTheme } from './themes/DefaultTheme';

//Layout
import Layout from './components/Layout';

//Heading
import Heading from './components/Heading';
import HeadingExample from './components/Heading/HeadingExample';

//Text
import TextExample from './components/Text/TextExample';

//LabelSomething
import LabelSomethingExample from './components/LabelSomething/LabelSomethingExample';

//Icon
import IconExample from './components/Icon/IconExample';

// //Buttons
import ButtonExample from './components/Button/ButtonExample';
import ButtonContainedExample from './components/Button/ButtonContainedExample';
import ButtonOutlinedExample from './components/Button/ButtonOutlinedExample';
import ButtonTextExample from './components/Button/ButtonTextExample';
import ButtonIconExample from './components/Button/ButtonIconExample';
import ButtonWithLabelSomethingExample from './components/Button/ButtonWithLabelSomethingExample';
import ButtonModifiersExample from './components/Button/ButtonModifiersExample';

// //Accordion
import AccordionChevronExample from './components/Accordion/example/AccordionChevronExample';
import AccordionPlusMinusExample from './components/Accordion/example/AccordionPlusMinusExample';
import AccordionMinimalExample from './components/Accordion/example/AccordionMinimalExample';

// //Snackbar
import SnackbarExample from './components/Snackbar/SnackbarExample';

// //Input
import InputExample from './components/Input/InputExample';
import InputReadOnlyExample from './components/Input/InputReadOnlyExample';
import InputWithIconExample from './components/Input/InputWithIconExample';
import InputNoBorderExample from './components/Input/InputNoBorderExample';
import InputPasswordExample from './components/Input/InputPasswordExample';
import InputFilterExample from './components/Input/InputFilterExample';
import InputSearchExample from './components/Input/InputSearchExample';

// //Select
import SelectExample from './components/Select/SelectExample';

// //RadioButton
import RadioButtonExample from './components/RadioButton/RadioButtonExample';

// //RadioButtonGroup
import RadioButtonGroupVerticalExample from './components/RadioButtonGroup/RadioButtonGroupVerticalExample';
import RadioButtonGroupHorizontalExample from './components/RadioButtonGroup/RadioButtonGroupHorizontalExample';

// //Checkbox
import CheckboxExample from './components/Checkbox/CheckboxExample';

// // //CheckboxGroup
import CheckboxGroupHorizontalExample from './components/CheckboxGroup/CheckboxGroupHorizontalExample';
import CheckboxGroupVerticalExample from './components/CheckboxGroup/CheckboxGroupVerticalExample';
import CheckboxGroupIndeterminateExample from './components/CheckboxGroup/CheckboxGroupIndeterminateExample';

// //CheckboxIcon
import CheckboxIconExample from './components/CheckboxIcon/CheckboxIconExample';

// //Counter
import CounterExample from './components/Counter/CounterExample';

// //ToggleSwitch
import ToggleSwitchExample from './components/ToggleSwitch/ToggleSwitchExample';

// //Slider
import SliderExample from './components/Slider/SliderExample';

// //SliderMultiRange
import SliderMultiRangeExample from './components/SliderMultiRange/SliderMultiRangeExample';

// //List
import ListExample from './components/List/ListExample';

// //Table
import TableExample from './components/Table/TableExample';

// //Card
import CardExample from './components/Card/CardExample';

// //Separator
import SeparatorHorizontalExample from './components/Separator/SeparatorHorizontalExample';
import SeparatorHorizontalLabelledExample from './components/Separator/SeparatorHorizontalLabelledExample';
import SeparatorVerticalExample from './components/Separator/SeparatorVerticalExample';

// // Hooks
import UseHoverExample from './customhooks/UseHoverExample';
import UseFocusExample from './customhooks/UseFocusExample';
import UseHoverFocusExample from './customhooks/UseHoverFocusExample';

//-----------------------------------------------------------------------------------

const App = () => {
  const [theme, setTheme] = useState({});

  useEffect(() => {
    setTheme(defaultTheme);
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
        <Layout variation='section'>
          <Heading variation='h4'>Headings</Heading>
          <HeadingExample />
        </Layout>

        <Layout variation='section'>
          <Heading variation='h4'>Text</Heading>
          <TextExample />
        </Layout>

        {/* Icon */}
        <Layout variation='section'>
          <Heading variation='h4'>Icon</Heading>
          <IconExample />
        </Layout>

        {/* Labelsomething */}
        <Layout variation='section'>
          <Heading variation='h4'>LabelSomething</Heading>
          <LabelSomethingExample />
        </Layout>

        {/* Buttons */}
        <Layout variation='section'>
          <Heading variation='h4'>Buttons</Heading>

          <Layout variation='block'>
            <Heading variation='h5'>Basic button</Heading>
            <ButtonExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Contained button</Heading>
            <ButtonContainedExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Outlined button</Heading>
            <ButtonOutlinedExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Text button</Heading>
            <ButtonTextExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Icon button</Heading>
            <ButtonIconExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Button+LabelSomething button</Heading>
            <ButtonWithLabelSomethingExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Button modifiers</Heading>
            <ButtonModifiersExample />
          </Layout>
        </Layout>

        {/* Accordion */}
        <Layout variation='section'>
          <Heading variation='h4'>Accordion</Heading>

          <Layout variation='block'>
            <Heading variation='h5'>Accordion (chevron)</Heading>
            <AccordionChevronExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Accordion (plus/minus)</Heading>
            <AccordionPlusMinusExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Accordion (minimal)</Heading>
            <AccordionMinimalExample />
          </Layout>
        </Layout>

        {/* Snackbar*/}
        <Layout variation='section'>
          <Heading variation='h4'>Snackbar</Heading>
          <SnackbarExample />
        </Layout>

        {/* Input */}
        <Layout variation='section'>
          <Heading variation='h4'>Input</Heading>

          <Layout variation='block'>
            <Heading variation='h5'>Input (no-border)</Heading>
            <InputNoBorderExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Basic input</Heading>
            <InputExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Input (readonly)</Heading>
            <InputReadOnlyExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Input + Icon</Heading>
            <InputWithIconExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Input Password</Heading>
            <InputPasswordExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Input Filter</Heading>
            <InputFilterExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Input Search</Heading>
            <InputSearchExample />
          </Layout>
        </Layout>

        {/* Select */}
        <Layout variation='section'>
          <Heading variation='h4'>Select</Heading>
          <SelectExample />
        </Layout>

        {/* RadioButton */}
        <Layout variation='section'>
          <Heading variation='h4'>RadioButton</Heading>
          <RadioButtonExample />
        </Layout>

        {/* RadioButtonGroup */}
        <Layout variation='section'>
          <Heading variation='h4'>RadioButton Group</Heading>
          <Layout variation='block'>
            <Heading variation='h5'>RadioButton Group (horizontal)</Heading>
            <RadioButtonGroupHorizontalExample />
          </Layout>
          <Layout variation='block'>
            <Heading variation='h5'>RadioButton Group (vertical)</Heading>
            <RadioButtonGroupVerticalExample />
          </Layout>
        </Layout>

        {/* Checkbox */}
        <Layout variation='section'>
          <Heading variation='h4'>Checkbox</Heading>
          <CheckboxExample />
        </Layout>

        {/* CheckboxGroup */}
        <Layout variation='section'>
          <Heading variation='h4'>Checkbox Group</Heading>
          <Layout variation='block'>
            <Heading variation='h5'>Checkbox Group (horizontal)</Heading>
            <CheckboxGroupHorizontalExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Checkbox Group (vertical)</Heading>
            <CheckboxGroupVerticalExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>Checkbox Group (indeterminate)</Heading>
            <CheckboxGroupIndeterminateExample />
          </Layout>
        </Layout>

        {/* CheckboxIcon */}
        <Layout variation='section'>
          <Heading variation='h4'>Checkbox Icon</Heading>
          <CheckboxIconExample />
        </Layout>

        {/* Counter */}
        <Layout variation='section'>
          <Heading variation='h4'>Counter</Heading>
          <CounterExample />
        </Layout>

        {/* ToggleSwitch */}
        <Layout variation='section'>
          <Heading variation='h4'>ToggleSwitch</Heading>
          <ToggleSwitchExample />
        </Layout>

        {/* Slider */}
        <Layout variation='section'>
          <Heading variation='h4'>Slider</Heading>

          <Layout variation='block'>
            <Heading variation='h5'>Slider</Heading>
            <SliderExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>SliderMultiRange</Heading>
            <SliderMultiRangeExample />
          </Layout>
        </Layout>

        {/* List */}
        <Layout variation='section'>
          <Heading variation='h4'>List</Heading>
          <ListExample />
        </Layout>

        {/* Table */}
        <Layout variation='section'>
          <Heading variation='h4'>Table</Heading>
          <TableExample />
        </Layout>

        {/* Card */}
        <Layout variation='section'>
          <Heading variation='h4'>Card</Heading>
          <CardExample />
        </Layout>

        {/* Separator */}
        <Layout variation='section'>
          <Heading variation='h4'>Separator</Heading>
          <Layout variation='block'>
            <Heading variation='h5'>Separator (horizontal)</Heading>
            <SeparatorHorizontalExample />
          </Layout>
          <Layout variation='block'>
            <Heading variation='h5'>Separator labelled (horizontal)</Heading>
            <SeparatorHorizontalLabelledExample />
          </Layout>
          <Layout variation='block'>
            <Heading variation='h5'>Separator (vertical)</Heading>
            <SeparatorVerticalExample />
          </Layout>
        </Layout>

        {/* Hooks */}
        <Layout variation='section'>
          <Heading variation='h4'>Hooks</Heading>

          <Layout variation='block'>
            <Heading variation='h5'>useHover</Heading>
            <UseHoverExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>useFocus</Heading>
            <UseFocusExample />
          </Layout>

          <Layout variation='block'>
            <Heading variation='h5'>useHoverFocus</Heading>
            <UseHoverFocusExample />
          </Layout>
        </Layout>
      </div>
    </ThemeProvider>
  );
};

export default App;

//
//   <Layout>
//     <Heading variation='h4'>20. Navbar</Heading>
//   </Layout>
//   <Layout>
//     <Heading variation='h4'>21. Link</Heading>
//   </Layout>
//   <Layout>
//     <Heading variation='h4'>22. Breadcrumbs</Heading>
//   </Layout>
//   <Layout>
//     <Heading variation='h4'>23. Dialog (aka Modal)</Heading>
//   </Layout>
//  <Layout>
//     <Heading variation='h4'>24. Progress</Heading>
//   </Layout>
//   <Layout>
//     <Heading variation='h4'>25. Loading Button</Heading>
//   </Layout>
//   <Layout>
//     <Heading variation='h4'>26. Timeline</Heading>
//   </Layout>

//   <Layout>
//     <Heading variation='h4'>27. Multi-input</Heading>
//     <div className='flex flex-col'></div>
//   </Layout>
//   <Layout>
//     <Heading variation='h4'>28. Multi-input Objects</Heading>
//     <div className='flex flex-col'></div>
//   </Layout>
//   <Layout>
//     <Heading variation='h4'>29. Multi-select with input</Heading>
//   </Layout>
//   <Layout>
//     <Heading variation='h4'>30. Upload</Heading>
//   </Layout>
//   <Layout>
//     <Heading variation='h4'>
//      31. DatePicker, TimePicker, DateTimePicker
//     </Heading>
//   </Layout>
//   <Layout>
//     <Heading variation='h4'>32. DateRangePicker</Heading>
//   </Layout>
