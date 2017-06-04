import * as React from 'react';
import Nav from './Nav';

export default class Back extends Nav {
  protected ComputeTargetIndex(currentIndex: number) : number {
    return currentIndex - 1;
  }

  protected DefaultText : string = 'Back';
}
