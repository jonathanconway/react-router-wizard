import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

interface P {
  path?: string;
  children?: Array<JSX.Element>;
}
interface S {}

export default abstract class Nav extends Component<P, S> {
  protected abstract ComputeTargetIndex(currentIndex: number) : number;

  protected abstract DefaultText : string;

  step = (routeProps: any) =>
    routeProps.match.params.step;

  generateBackUrl = (routeProps: any) =>
    routeProps
      .match
      .url
      .split('/')
      .slice(0, -1) // remove last element of path
      .concat(this.ComputeTargetIndex(parseInt(this.step(routeProps), 10))) // append link with computed index
      .join('/');

  stepIsNumeric = (routeProps: any) =>
    !isNaN(parseInt(this.step(routeProps), 10));

  public render() {
    return (
      <Route path={this.props.path} render={(routeProps: any) =>
        this.stepIsNumeric(routeProps) &&
          <Link to={this.generateBackUrl(routeProps)}>
            { this.props.children || this.DefaultText }
          </Link>
      } />
    );
  }
}
