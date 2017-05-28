import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

interface P {
  path?: string;
  skip?: number;
}
interface S {}

export default class Next extends Component<P, S> {
  public static defaultProps: P = {
    skip: 0
  };

  generateNextUrl(routeProps: any) {
    return routeProps
      .match
      .url
      .split('/')
      .reverse()
      .slice(1)
      .reverse()
      .concat([(parseInt(routeProps.match.params.step, 10) + 1 + (this.props.skip))])
      .join('/');
  }

  render() {
    return (
      <Route path={this.props.path} render={(routeProps) =>
        <Link
          role="button"
          to={this.generateNextUrl(routeProps)}
        >
          { this.props.children || 'Next' }
        </Link>
      } />
    );
  }
}
