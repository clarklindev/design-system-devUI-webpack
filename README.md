## build
- no create-react-app  

-----------------------------------------------------------------------------------------------

Initialize a new Node.js project:

```shell
npm init -y
```

```shell
npm install react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
npm i html-webpack-plugin
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


------------------------------------------------------------------------

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
