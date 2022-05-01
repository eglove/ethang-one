import { render } from '@testing-library/react';

import { CheckoutItem } from './checkout-item';

describe('CheckoutItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CheckoutItem
        cartItem={{
          id: '123',
          imageUrl: 'image',
          name: 'Product',
          price: 20,
          quantity: 5,
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
