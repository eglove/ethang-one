import { render } from '@testing-library/react';

import Character from './character';

describe('Character', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Character />);
    expect(baseElement).toBeTruthy();
  });
});
