import { render } from '@testing-library/react';

import AddReadingLink from './add-reading-link-graphql';

describe('AddReadingLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddReadingLink />);
    expect(baseElement).toBeTruthy();
  });
});
