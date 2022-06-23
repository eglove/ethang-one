import { render } from '@testing-library/react';

import ReadingLayout from './reading-layout';

describe('ReadingLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReadingLayout />);
    expect(baseElement).toBeTruthy();
  });
});
