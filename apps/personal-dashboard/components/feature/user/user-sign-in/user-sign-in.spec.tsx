import { render } from '@testing-library/react';

import UserSignIn from './user-sign-in';

describe('UserSignin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserSignIn />);
    expect(baseElement).toBeTruthy();
  });
});
