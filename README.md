# react-router-wizard

A React container for assembling components into a wizard interface. Works with [`react-router`](https://github.com/ReactTraining/react-router).

## Installation

Install with npm (or yarn).

```sh
npm install react-wizard --save
```

## Usage

```
import React, { Component } from 'react';
import Wizard, { Step } from 'react-router-wizard';
import { HashRouter } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Wizard path="/:step?">
          <Step>
            <h1>Welcome to Step 1</h1>
          </Step>
          <Step>
            <h1>Welcome to Step 2</h1>
          </Step>
          <Step>
            <h1>Welcome to Step 3</h1>
          </Step>
        </Wizard>
      </HashRouter>
    );
  }
}
```

## License

[MIT](LICENSE). Copyright (c) 2017 Jonathan Conway.
