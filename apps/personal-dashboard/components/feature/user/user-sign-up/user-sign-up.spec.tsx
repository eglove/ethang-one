import { render } from '@testing-library/react';

import UserSignUp from './user-sign-up';

describe('UserSignUp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserSignUp />);
    expect(baseElement).toBeTruthy();
  });
});
