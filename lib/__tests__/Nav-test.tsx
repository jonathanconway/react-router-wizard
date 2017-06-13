import * as React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Nav from '../Nav';

export default class Fake extends Nav {
  protected ComputeTargetIndex(currentIndex: number) : number {
    return currentIndex;
  }

  protected DefaultText : string = 'Fake';
}

describe('<Fake />', () =>
  describe('does not render if', () =>
    [it('we are currently not on a step', () => {
      const fake = render(
        <MemoryRouter
          initialEntries={[ '/', '/' ]}
          initialIndex={1}
        >
          <Fake path="/:step" />
        </MemoryRouter>
      );
      expect(fake[0].children.length).toEqual(0);
    }),
    it('or current step is not numeric', () => {
      const fake = render(
        <MemoryRouter
          initialEntries={[ '/abc', '/def' ]}
          initialIndex={1}
        >
          <Fake path="/:step" />
        </MemoryRouter>
      );
      expect(fake[0].children.length).toEqual(0);
    })]
  })]
});
