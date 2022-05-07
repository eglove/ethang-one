import { render } from '@testing-library/react';

import { ToggleButton } from './toggle-button';

describe('ToggleButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ToggleButton color="" isSelected={false} label="">
        <div />
      </ToggleButton>
    );
    expect(baseElement).toBeTruthy();
  });
});
