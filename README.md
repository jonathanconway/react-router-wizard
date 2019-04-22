# react-router-wizard

A React container for assembling components into a wizard interface. Works with [`react-router`](https://github.com/ReactTraining/react-router).

<div>
  <img style="display:inline-block;vertical-align:middle" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="ReactJS logo" height="50px" />
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
