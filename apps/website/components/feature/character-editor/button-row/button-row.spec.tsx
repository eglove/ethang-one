import { render } from '@testing-library/react';

import { ButtonRow } from './button-row';

describe('ButtonRow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ButtonRow>
        <div />
      </ButtonRow>
    );
    expect(baseElement).toBeTruthy();
  });
});
