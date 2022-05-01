import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';
import { Button } from '../button/button';
import { CartItem } from '../cart-item/cart-item';
import styles from './cart-dropdown.module.css';

export function CartDropdown(): JSX.Element {
  const { cartState } = useContext(CartContext);

  return (
    <div className={styles['CartDropdownContainer']}>
      <div className={styles['CartItems']}>
        {cartState.cartItems.map(item => {
          return <CartItem cartItem={item} key={item.id} />;
        })}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  );
}
