import { render } from '@testing-library/react';

import CategoryItem from './category-item';

describe('CategoryItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CategoryItem category={{ id: 1, imageUrl: '', title: 'Title' }} />
    );
    expect(baseElement).toBeTruthy();
  });
});
