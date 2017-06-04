import * as React from 'react';
import { render } from 'enzyme';
import Next from '../lib/Next';
import { MemoryRouter } from 'react-router';

describe('<Next />', () =>
  describe('we are currently on a step, as defined by the `step` param in the current route', () =>
    it('links to the current step plus 1', () => {
      const next = render(
        <MemoryRouter
          initialEntries={[ '/1', '/2' ]}
          initialIndex={0}
        >
          <Next path="/:step" />
        </MemoryRouter>
      );
      expect(next[0].children[0].attribs.href).toEqual('/2');
    })
  })
);
