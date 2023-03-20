import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

//dev mode
if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('root');
  const root = createRoot(container); 
  root.render(<App/>);
}
//Accordion
export {Accordion} from './components/Accordion';
export {AccordionItem} from './components/Accordion/AccordionItem';
export {AccordionExample} from './components/Accordion/AccordionExample';
//Button
export {Button} from './components/Button';
export {ButtonExample} from './components/Button/ButtonExample'
export {ButtonModifiersExample} from './components/Button/ButtonModifiersExample';
export {ButtonVariationExample} from './components/Button/ButtonVariationExample';
export {ButtonWithLabelSomethingExample} from './components/Button/ButtonWithLabelSomethingExample';
//Card
export {Card} from './components/Card';
export {CardExample} from './components/Card/CardExample';
//Checkbox
export {Checkbox} from './components/Checkbox';
export {CheckboxExample} from './components/Checkbox/CheckboxExample';
export {CheckboxAndLabelSomethingExample} from './components/Checkbox/CheckboxAndLabelSomethingExample';
//CheckboxGroup
export {CheckboxGroup} from './components/CheckboxGroup';
export {CheckboxGroupExample} from './components/CheckboxGroup/CheckboxGroupExample';
export {CheckboxGroupAndLabelSomethingExample} from './components/CheckboxGroup/CheckboxGroupAndLabelSomethingExample';
//CheckboxIcon
export {CheckboxIcon} from './components/CheckboxIcon';
export {CheckboxIconExample} from './components/CheckboxIcon/CheckboxIconExample';


export {Counter, CounterExample} from './components/Counter';
export {Datepicker} from './components/Datepicker';//add example
export {Heading, HeadingExample} from './components/Heading';
export {Icon, IconExample} from './components/Icon';
export {Input, InputExample, InputNoBorderExample, InputPasswordExample, InputReadOnlyExample, InputSearchExample, InputWithIconExample} from './components/Input';
export {LabelSomething, LabelSomethingExample} from './components/LabelSomething';
export {Block} from './components/Layout';//no example
export {List, ListItem, ListExample} from './components/List';
export {Modal, ModalExample} from './components/Modal';
export {RadioButton, RadioButtonExample, RadioButtonAndLabelSomethingExample, RadioButtonGroup, RadioButtonGroupAndLabelSomethingExample, RadioButtonGroupExample} from './components/RadioButton';
export {Select, SelectExample} from './components/Select';
export {Slider, SliderExample, MultiRangeSlider, MultiRangeSliderExample} from './components/Slider';
export {Snackbar, SnackbarExample} from './components/Snackbar';
export {ToggleSwitch, ToggleSwitchExample} from './components/Switch';
export {Table, TableExample} from './components/Table';