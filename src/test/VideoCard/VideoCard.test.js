import React from 'react';
import { render } from '@testing-library/react';
import VideoCard from '../../components/VideoCard/VideoCard';

describe('VideoCard', () => {

  let component;

  beforeEach(() => {
    component = render(<VideoCard
      key="test1"
      imgUrl="test"
      title="test title"
      description="description title"
    />);
  });

  test('should contains card title', () => {

    const title = component.queryByText(/test title/i);
    expect(title).toBeInTheDocument();
  })

  test('should contains card description', () => {

    const description = component.queryByText(/description title/i);
    expect(description).toBeInTheDocument();
  })

})
