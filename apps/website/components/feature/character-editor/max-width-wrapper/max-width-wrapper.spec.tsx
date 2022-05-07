import { render } from '@testing-library/react';

import MaxWidthWrapper from './max-width-wrapper';

describe('MaxWidthWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MaxWidthWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
