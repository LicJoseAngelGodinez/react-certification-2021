import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../../components/Navbar/Navbar';

describe('Navbar', () => {

  beforeEach(() => {
    render(<Navbar/>);
  });

  test('should contains card title', () => {

    const navbarClasses = [
      ".navbar__wrapper",
      ".navbar__left",
      ".navbar__menu",
      ".navbar__search",
      ".navbar__right",
      ".navbar__theme",
      ".navbar__account",
    ];

    navbarClasses.forEach( (nbClass) => {
      const elementExist = document.querySelector(nbClass);
      expect(elementExist).toBeInTheDocument();
    });
  })

})
