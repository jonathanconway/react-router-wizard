import * as React from 'react';
import { render } from 'enzyme';
import Back from '../lib/Back';
import { MemoryRouter } from 'react-router';

describe('<Back />', () =>
  describe('we are currently on a step, as defined by the `step` param in the current route', () =>
    it('links to the current step minus 1', () => {
      const back = render(
        <MemoryRouter
          initialEntries={[ '/1', '/2' ]}
          initialIndex={1}
        >
          <Back path="/:step" />
        </MemoryRouter>
      );
      expect(back[0].children[0].attribs.href).toEqual('/1');
    })
  })
);
