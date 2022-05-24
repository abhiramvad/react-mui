import React from 'react';
import Playground from './demo';
import { render, fireEvent, within } from 'react-testing-library';

describe('<Counter />', () => {
  it('shoult update component', () => {
    const { getByRole } = render(<Playground />);
    const autocomplete = getByRole('textbox');
    fireEvent.change(autocomplete, {
      target: { value: 'The Shawshank Redemption' },
    });
    expect(autocomplete.value).toEqual('The Shawshank Redemption');
  });
});
