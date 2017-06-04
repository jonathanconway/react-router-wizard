import * as React from 'react';
import { Component, ReactElement } from 'react';

import Back from './Back';
import Next from './Next';

interface P {
  path?:          string;                      // Passed-in by <Wizard>
  children?:      Array<JSX.Element> | string;
  isLast?:        boolean;                     // Passed-in by <Wizard>
  isFirst?:       boolean;                     // Passed-in by <Wizard>
  show?:          boolean;                     // Passed-in by <Wizard>
  back?:          ReactElement<any>;
  next?:          ReactElement<any>;
  onShowChanged?: Function;
}
interface S {}

export default class Step extends Component<P, S> {
  public static defaultProps: Partial<P> = {
    path: '/:step?',
    children: [],
    isFirst: false,
    isLast: false,
    show: true,
    back: <Back />,
    next: <Next />
  };

  componentWillReceiveProps(nextProps:any) {
    if (this.props.show !== nextProps.show && this.props.onShowChanged != null) {
      this.props.onShowChanged();
    }
  }

  withPath = (component:any) => React.cloneElement(component, { path: this.props.path });

  back = () => {
    const { back, isFirst } = this.props;
    if (!isFirst) {
      return this.withPath(back);
    }
  }

  next = () => {
    const { next, isLast } = this.props;
    if (!isLast) {
      return this.withPath(next);
    }
  }

  render() {
    const { children, show } = this.props;

    return (
      show
        ? (
          <div>
            <div>
              { this.back() }
            </div>

            { children }

            <div>
              { this.next() }
            </div>
          </div>)
        : null
    );
  }
}
