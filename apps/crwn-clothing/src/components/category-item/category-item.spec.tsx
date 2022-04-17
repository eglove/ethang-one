import { render } from '@testing-library/react';

import CategoryItem from './category-item';

describe('CategoryItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CategoryItem />);
    expect(baseElement).toBeTruthy();
  });
});
