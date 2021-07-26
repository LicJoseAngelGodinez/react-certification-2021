import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../../pages/Home/Home.page';

describe('HomePage', () => {

  let component;

  beforeEach(() => {
    component = render(<HomePage />);
  });

  test('should contains a title', () => {

    const title = component.queryByText(/Welcome to the Challenge!/i);
    expect(title).toBeInTheDocument();
  })

})
