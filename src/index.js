import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

//dev mode
if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('root');
  const root = createRoot(container); 
  root.render(<App/>);
}

export {Accordion, AccordionItem, AccordionExample} from './components/Accordion';
export {Button, ButtonExample, ButtonModifiersExample, ButtonVariationExample, ButtonWithLabelSomethingExample} from './components/Button';
export {Card, CardExample} from './components/Card';
export {Checkbox, CheckboxExample, CheckboxAndLabelSomethingExample, CheckboxGroup, CheckboxGroupExample, CheckboxGroupAndLabelSomethingExample, CheckboxIcon, CheckboxIconExample} from './components/Checkbox';
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