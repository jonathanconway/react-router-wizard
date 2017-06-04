import * as React from 'react';
import { Component } from 'react';

import { HashRouter } from 'react-router-dom';

import Wizard, { Step } from '../lib';

interface P {}
interface S {}

export default class App extends Component<P, S> {
  render() {
    return <HashRouter>
      <Wizard>
        <Step>This is step one</Step>
        <Step>This is step two</Step>
        <Step>This is step three</Step>
      </Wizard>
    </HashRouter>;
  }
}
