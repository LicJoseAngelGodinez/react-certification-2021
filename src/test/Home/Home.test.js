import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../../pages/Home/Home.page';

describe('HomePage', () => {

  let component;

  beforeEach(() => {
    component = render(<HomePage />);
  });

  test('should contains a title', () => {

    const title = component.queryByText(/Hello World!/i);
    expect(title).toBeInTheDocument();
  })

  test('should contains a videoCard component', () => {

    const title = component.queryByText(/El plan de Wizeline, una empresa de inteligencia artificial, para ayudar a crecer la comunidad de ciencia de datos en CDMX y todo el país, a través de cursos .../i);
    expect(title).toBeInTheDocument();
  })

  test('should contains cards container', () => {

    const contentContainer = document.querySelector('.homepage__content');
    expect(contentContainer).toBeInTheDocument();
  })
  
  test('should contains a videoCard component', () => {

    const cards = [...document.querySelectorAll('.videocard__wrapper')];
    expect(cards.length).toBe(24);
  })

})
