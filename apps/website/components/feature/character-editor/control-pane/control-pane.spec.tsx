import { render } from '@testing-library/react';

import ControlPane from './control-pane';

describe('ControlPane', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ControlPane />);
    expect(baseElement).toBeTruthy();
  });
});
