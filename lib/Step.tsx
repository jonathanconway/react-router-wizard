import * as React from 'react';
import { Component, ReactElement } from 'react';

import Back from './Back';
import Next from './Next';

interface P {
  children?: any;
  isLast: boolean;
  isFirst: boolean;
  path?: string;
  show: boolean;
  onShowChanged?: Function;
  back?: ReactElement<any>;
  next?: ReactElement<any>;
}
interface S {}

export default class Step extends Component<P, S> {
  public static defaultProps: P = {
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

  render() {
    const { children, isLast, isFirst, path, show } = this.props;
    var { back, next } = this.props;
    if (back) {
      back = React.cloneElement(back, { path });
    }
    if (next) {
      next = React.cloneElement(next, { path });
    }
    return (
      <div style={{display: (show ? 'inherit' : 'none')}}>
        <div>
          { (!isFirst && !!back) && back }
        </div>

        { children }

        <div>
          { (!isLast && !!next) && next }
        </div>
      </div>
    );
  }
}
