https://github.com/swagfinger/swagfinger-ui.git

## CSS

- flex-box / css-grid

## Components (WORK IN PROGRESS)

<!-- Typescript -->

- Layout (TS / styled-components)
- Heading (TS / styled-components)
- Button (TS / styled-components)
- Icon (TS / styled-components)
- LabelSomething (TS / styled-components)
- Accordion (TS / styled-components / accessibility)

<!-- Javascript -->

- Card (JS / styled-components)
- Checkbox (JS / styled-components)
- CheckboxGroup (JS / styled-components)
- CheckboxIcon (JS / styled-components)
- Counter (JS / styled-components)
- Input (JS / styled-components)
- List (JS / styled-components)
- RadioButton (JS / styled-components)
- RadioButtonGroup (JS / styled-components)
- Select (JS / styled-components)
- Separator (JS / styled-components)
- Slider (JS / styled-components)
- SliderMultiRange (JS / styled-components)
- Snackbar (JS / styled-components)
- Spinner (JS / styled-components)
- Table (JS / styled-components)
- Text (JS / styled-components)
- ToggleSwitch (JS / styled-components)
- Tree (JS / styled-components)

---

## Tree

- when to use a tree: its more for menus that can have depth
- its similar to Accordion, difference is with an Accordion you can have any content for each item.

<!-- ----------------------------------------------------------------------------------------------------- -->

- initially wanted to use a config={} prop for consistency and this would help with versioning as its always the 'config' prop passed into the component
- but this is infact not true because even if this is solved at the passing-in-prop stage, the component itself would not work if the underlying architecture changed and the props become mismatched
- the problem with using a config={} prop is when you dont pass in a config prop and the component that is receivining the config prop

```js
const <Component config={ color:'red'}/>

// then later...
- you are destructing props and expecting a config object but it might not be there...
- so lets say you pre-empt this, and initialize it to an empty object to prevent an error if its not passed in,
- later you destruct the props from config as if it exists...BUT... it could possibly not even exist...
const Component = ({config={}})=>{
  const {color='blue', border} = config;
}
```

- then i thought about using named destructuring, but this becomes a problem if config object is not passed-in
- config:{} does not declare an initial empty object, it is saying there it is trying to destruct nothing...which is not allowed

```jsx
<Heading config={{ variation: 'h1' }}>H1 heading</Heading>
```

```jsx
export const Heading = ({ config: { variation }, children, ...rest }) => {};
```

## WAI-ARIA Roles, States, and Properties:

### Accordion

- https://www.w3.org/WAI/ARIA/apg/patterns/accordion/

## build

- no create-react-app

---

Initialize a new Node.js project:

```shell
npm init -y
```

```shell
npm i react react-dom
npm i --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
npm i --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
npm i --save-dev html-webpack-plugin
```

### webpack.config.js

- this is a basic webpack config

```js
//webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
```

```json
// add to package.json
  "scripts": {
    "start": "webpack-dev-server --mode development --config webpack.config.js",
    "build": "webpack --mode production --config webpack.config.js"
  },
```

## index.development.js

```js
//src/index.development.js

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Input } from './components/Input';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const InputExample = () => {
  const [value, setValue] = useState('');
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return <Input value={value} onChange={onChangeHandler} />;
};

root.render(<InputExample />);
```

## index.production.js

```js
//src/index.production.js
export * from './components/Input';
```

### html

<!-- dist/index.html -->

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./bundle.js"></script>
  </body>
</html>
```

Run: npm run build to build your application. The bundled file will be in the dist directory.
Create an HTML file where you want to use your react application and include the bundled file.
Finally, you can start writing your react code in the index.js file and the rest of the application in the src directory.

---

## publishing to NPM

### npm login

```shell
npm login
```

### create package

```shell
npm init --scope=@my-org
```

npm organization packages are scoped and private by default
to publish as public

```shell
npm publish --access=public
```

# Getting Started with Create React App and Redux

#### test url

https://swagfinger-portfolio-react-components-functionbased.vercel.app/

---

#### Project JS

- functional components
- uses hooks
- styled-components
- simplified components (built by developer for developers)

```js
import { createApi } from '@reduxjs/toolkit/query';

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi } from '@reduxjs/toolkit/query/react';
```

## Redux Fundamentals, Part 8: Modern Redux with Redux Toolkit

https://redux.js.org/tutorials/fundamentals/part-8-modern-redux

## Typography

https://type-scale.com/

## Component properties

- using configure={} allows stabilizes the properties a component can take in and creates familiarity on structure
- 'configure' we place all properties/functions we want pass to the component in the configure object
- 'data' (can be from async call) should pass to data property.
- 'savedData' is data that we store for this component which is handled outside of the component in state

- links are for redirecting outside/url changes
- buttons are for navigating within site

## Roadmap

- multi-range slider - add mouseclick for track - closest slider moves to track position
  - optimize renders
  - colors for track from amount slided
- standardize (hover/active state) outline for all components
- checkbox intermediate state

## updates

2023-01-25

- seems available gap- values are: gap-1, gap-2, gap-4, gap-5, gap-10
- changed to use "gap-" syntax instead of 'className="gap-4"'

- added RadioButtonAndLabelSomethingExample
- added RadioButtonGroupAndLabelSomethingExample
- added CheckboxAndLabelSomethingExample
- added CheckboxGroupAndLabelSomethingExample

- accordion - [allowMultiOpen, setAllowMultiOpen] useState moved into Accordion
- accordion example - updated

- button - default top/bottom padding set to 10px
- button variation example - icons moved out and imported from icons/
- ButtonWithLabelSomethingExample - icons moved out and imported from icons/
  - Button removed className='gap-2'
  - LabelSomething removed className - added spacing=""
- button modifiers - large - tweaks

- Checkbox - wrapping container removed - label is the wrapping container

  - default: flex-direction row
  - can pass-in label
  - can pass-in iconSize
  - can pass-in color

- CheckboxAndLabelSomethingExample
- CheckboxGroup
  - can set direction: row, row-reverse, column, column-reverse
  - can set spacing - whatever units you want: px, rem
  - receives children
  - Checkbox moved outside component
- CheckboxGroupAndLabelSomethingExample
- CheckboxGroupExample
- LabelSomething

  - component allows you to place labels in top,left,right, bottom direction of "Something"
  - labelClickable
  - gap - can set the gap between the label and the something. eg. spacing={1} spacing={2} spacing={4} spacing={5} spacing={10}
  - can set align
    ROADMAP: want to adjust labelPosition to "direction" more aligned with RadioButtonGroup and CheckboxGroup

- RadioButton + RadioButtonGroup + all their examples align with checkbox (same implementation)
- Select - padding top and bottom adjust
- Themes - added global margin

  2023-01-19

- Input component - overhaul of whole component - separation of concerns (buttons / icons moved out of component)
- InputWrapper which is part of Input component - you use this when you want to hide the input style that this component wraps
- input examples
- Icons moved to its own component
- additional Button modifiers
- LabelSomething class - use this to label anything - WithLabel class removed
- Snackbar uses an icon component
- colors added
- themes with adjustments and additions
- Button - Button content/label can be received as children
- Theme tweak to padding 1rem , add select defaults
- chevron icon
- Select styling
- Relook margins on all inputs - 1rem
- relooked App demo page component margins

- Redo Checkbox icon using Icon class - note: its not a Button because Checkbox has its own event handler for event.target.checked
- Icons can be left as svgs (dont need to touch)
- Icon fill and stroke is set on the Icon class for when it is toggelled (see example)
- Align Light theme with Dark theme properties
- fixed cursor pointer for some components
- fixed up Radio Button - no icons in heroicons, made my own

2023-01-16

## Roadmap

## Updates

- AccordionItem layout/padding and theme references
- Inputs - moved modifiers into its own file in same directory
  Composition of components:
  Input
  InputWithIcon -> Input
  InputSearch -> Input
  InputPassword -> InputWithIcon -> Input
- Icons inside components referenced as a variable instead of between Styled component tags as its children
- ToggleSwitch given ids with UID: import { useUID } from '../../utils/helpers/UseUID';
  - optimised with React.memo
  - React.memo check exclude onChange function what will cause this component to re-render as it always stays the same
- theme structure change (moved icons to its own section)

The outermost component should have the border.
Input components using other input components pass-in "noborder" and "noborderradius" or "noborderleftradius" or "noborderleftradius" modifier so the inner components dont have borders

you may get confused with what to change and where to change theme colors

1. first, code needs to link to an attribute of a theme
2. changes are only made to theme (which will ripple on to the code/components)
3. if you dont like colors in the theme, you only change the utils/colors (which will ripple on to the theme -> then to the code/components)

2023-01-15

- ToggleSwitch uses useUID() a custom hook in utils/helpers/UseUID to generate unique id classses so colors dont get overridden otherwise they are all using the same className and when color updates, they all update
- ToggleSwitch DOES NOT USE React.memo to optimize rerenders only when props change
- ToggleSwitch does not use React.useCallback to memoize onChange function as it is ignored in the React.memo() second prop function check
- theme structure change - added 'global' properties

  2023-01-15

- Hook - useUID() utils/helpers/UseUID
-

- fixed theme in App.js for dark mode (default) / default mode
- Accordion - rework to decouple Accordion children using render props
- Button
  - moved modifiers outside to its own file (easier to reference)
  - <Icon> children given size (not only to svg)
  - with icon - labelDirection
- Card - added dropshadow example (modifiers="dropshadow")
  - modifiers={Array.isArray(modifiers) ? [...modifiers] : modifiers}
- Input - styling reads from theme
  - child components imported inherit dimensions
- Radio - moved RadioGroup data outside of configure obj
  - data initialized inside useEffect()
- Snackbar - conform to jsx camelCase
- Typography - moved Header sizes into theme
- removed default Counter redux code
- themes moved to utils/themes

---

# Tailwind

- to expand full css file: `npx tailwind init tailwind-full.config.js --full`
- to customize tailwind, do it inside "extend":
- strip unused css with purgecss (use only in production)
  - invoke as function, pass an object,
  - content: tells it where css are [tell where are our templates] and also include html
  - uses regex to match

```js
// tailwind.config.js
theme: {
  extend: {},
},
```

```shell
npm i @fullhuman/postcss-purgecss

```

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),

    process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
      content:[
        './src/**/*.js',
        './src/template.html'
      ],
      // defines what constitues a classname
      defaultExtractor: content=> content.match(/[A-Za-z0-9-_:/]+/g) || []
    });
  ]
}
```

## css variables

- in the example, it tries to use the theme and uses the css variables as a fallback

```css
border-top: 1px solid ${({theme})=>theme?.global?.borderColor || 'var(--color-border)' };
```

<!-- ---------------------------------------------------------------------------------------------------------------------------------- -->

# Design system

- this README documents my design system journey

## React components (swagfinger-ui-ts)

- [https://github.com/swagfinger/swagfinger-ui-ts.git](https://github.com/swagfinger/swagfinger-ui-ts.git)
- adapted from: React components (swagfinger-ui-js)
- uses React hooks
- typescript components
- styled-components
- tailwindcss
- webpack config

## React components (swagfinger-ui-js)

- [https://github.com/swagfinger/swagfinger-ui-js.git](https://github.com/swagfinger/swagfinger-ui-js.git)
- uses React hooks
- javascript components
- styled-components
- tailwindcss
- webpack config
- if prop values use that -> otherwise check theme values -> fallback to css variables
- tweaks and code optimization
- does not use create-react-app
- adapted from: React components (functionbased) - DEPRECATED

## React components (functionbased) - DEPRECATED

- [https://github.com/swagfinger/swagfinger-portfolio-react-components-functionbased](https://github.com/swagfinger/swagfinger-portfolio-react-components-functionbased)
- uses hooks
- complete rewrite of components based off: React components (classbased) - DEPRECATED
- uses create-react-app

## React components (classbased) - DEPRECATED

- [https://github.com/swagfinger/swagfinger-portfolio-react-components-classbased.git](https://github.com/swagfinger/swagfinger-portfolio-react-components-classbased.git)
- this was my first design system for components
- written using react (class components)
- no hooks
- code was not documented
- components used context / redux
- create-react-app
