# react-router-wizard

A React container for assembling components into a wizard interface. Works with [`react-router`](https://github.com/ReactTraining/react-router).

<div>
  <img style="display:inline-block;vertical-align:middle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" alt="ReactJS logo" height="50px" />
  <span style="font-size:50px;vertical-align:middle;display:inline-block;padding:0 1rem;">+</span>
  <img style="display:inline-block;vertical-align:middle" src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" alt="React-Router logo" height="50px" />
  <span style="font-size:50px;vertical-align:middle;display:inline-block;padding:0 1rem;">+</span>
  <img style="display:inline-block;vertical-align:middle" src="http://i.imgur.com/rbEzHFM.png" alt="Wizard sketch" height="50px" />
</div>

## Installation

Install with npm (or yarn).

```sh
npm install react-wizard --save
```

## Usage

```
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Wizard, { Step } from 'react-router-wizard';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Wizard>
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
