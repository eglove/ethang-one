import { render } from '@testing-library/react';

import { MaxWidthWrapper } from './max-width-wrapper';

describe('MaxWidthWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MaxWidthWrapper className="">
        <div />
      </MaxWidthWrapper>
    );
    expect(baseElement).toBeTruthy();
  });
});
