import { render } from '@testing-library/react';

import Directory from './directory';

describe('Directory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Directory categories={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
