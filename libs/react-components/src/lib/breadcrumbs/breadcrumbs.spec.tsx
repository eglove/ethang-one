import { render } from '@testing-library/react';

import { Breadcrumbs } from './breadcrumbs';

describe('Breadcrumbs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Breadcrumbs links={[{ href: '/', label: 'Home' }]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
