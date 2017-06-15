import * as React from 'react';
import { Component } from 'react';
import { MemoryRouter as MemoryRouter2, Route as Route2 } from 'react-router';

// interface MemoryRouterP {
//   children?:      Array<JSX.Element> | string;
// }
// interface MemoryRouterS {}

// class MemoryRouter extends Component<MemoryRouterP, MemoryRouterS> {
//   public render() {
//     return <div>{this.props.children}</div>;
//   }
// // }

// interface RouteP {
//   children?:      Array<JSX.Element> | string;
//   render?:        Function;
// }
// interface RouteS {}

// class Route extends Component<RouteP, RouteS> {
//   public render() {
//     return this.props.render({
//        match: {
//          url: 'step/1',
//          params: {
//            step: '1'
//          }
//        }
//     });
//   }
// }

export { MemoryRouter2 as MemoryRouter, Route2 as Route }
