## Bootstrapping the project

```
npx create-react-app flinker
yarn add axios
PORT=3001 npm start
```

Follow: https://github.com/cyu/rack-cors

## Installing JS flow

```
yarn add flow-bin --dev
./node_modules/.bin/flow init
./node_modules/.bin/flow coverage src/App.js
./node_modules/.bin/flow src/App.js

yarn add flow-typed --dev
./node_modules/.bin/flow-typed install axios@0.18.0
```

## Installing linter

```
yarn add eslint-plugin-flowtype --dev
yarn add eslint-plugin-react --dev
```
