import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

interface P {
  path?: string;
}
interface S {}

export default class Back extends Component<P, S> {
  generateBackUrl(routeProps: any) {
    return routeProps
      .match
      .url
      .split('/')
      .reverse()
      .slice(1)
      .reverse()
      .concat([(parseInt(routeProps.match.params.step, 10) - 1)])
      .join('/');
  }

  render() {
    return (
      <Route path={this.props.path} render={(routeProps: any) =>
        <Link
          to={this.generateBackUrl(routeProps)}
        >
          { this.props.children || 'Back' }
        </Link>
      } />
    );
  }
}
