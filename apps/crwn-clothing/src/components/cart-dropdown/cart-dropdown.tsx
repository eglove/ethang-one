import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart-context';
import { Button } from '../button/button';
import { CartItem } from '../cart-item/cart-item';
import styles from './cart-dropdown.module.css';

export function CartDropdown(): JSX.Element {
  const navigate = useNavigate();
  const { cartState } = useContext(CartContext);

  const goToCheckout = (): void => {
    navigate('/checkout');
  };

  return (
    <div className={styles['CartDropdownContainer']}>
      <div className={styles['CartItems']}>
        {cartState.cartItems.map(item => {
          return <CartItem cartItem={item} key={item.id} />;
        })}
      </div>
      <Button
        buttonProperties={{
          onClick: goToCheckout,
        }}
      >
        Go to Checkout
      </Button>
    </div>
  );
}
