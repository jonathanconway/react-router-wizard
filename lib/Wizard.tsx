import * as React from 'react';
import { Component } from 'react';
import { Route, Redirect, RouteProps } from 'react-router';

interface P {
  path?: string;
  children?: Array<JSX.Element> | string;
}
interface S {}

interface V4RouteProps extends RouteProps {
  match: {
    params: any,
    url: string
  };
}

export default class Wizard extends Component<P, S> {
  public static defaultProps: P = {
    path: '/:step?', // must contain a `step` variable
    children: []
  }

  renderRoute = (routeProps: V4RouteProps) => {
    const step = parseInt(routeProps.match.params.step, 10);

    var { children } = this.props;
    if (children == null || children.length === 0) {
      return;
    }

    const childrenLength = children.length;
    children = React.Children.map(children,
      (item, index) => React.cloneElement((item as any), {
        isFirst: step <= 1,
        isLast: step >= childrenLength,
        path: this.props.path,
        show: (index === (step - 1)),
        key: index
      }));

    return (
      <div>
        {
          isNaN(step)
            ? <Redirect to={`${routeProps.match.url}1`} />
            : children
        }
      </div>
    );
  }

  render() {
    return <Route path={this.props.path} render={this.renderRoute} />
  }
}
