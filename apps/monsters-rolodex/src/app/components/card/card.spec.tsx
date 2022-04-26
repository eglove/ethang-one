import { render } from '@testing-library/react';

import Card from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Card
        monster={{ email: 'example@example.com', id: '123', name: 'example' }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
