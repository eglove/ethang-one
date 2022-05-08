import { render } from '@testing-library/react';

import { VisuallyHidden } from './visually-hidden';

describe('VisuallyHidden', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <VisuallyHidden>
        <div>Hi</div>
      </VisuallyHidden>
    );
    expect(baseElement).toBeTruthy();
  });
});
