import { render } from '@testing-library/react';

import { IconInput } from './icon-input';

describe('IconInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconInput />);
    expect(baseElement).toBeTruthy();
  });
});
