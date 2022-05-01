import { useContext } from 'react';

import { CheckoutItem } from '../../components/checkout-item/checkout-item';
import { CartContext } from '../../contexts/cart-context';
import styles from './checkout.module.css';

export function Checkout(): JSX.Element {
  const { cartState } = useContext(CartContext);

  return (
    <div className={styles['CheckoutContainer']}>
      <div className={styles['CheckoutHeader']}>
        <div className={styles['HeaderBlock']}>
          <span>Product</span>
        </div>
        <div className={styles['HeaderBlock']}>
          <span>Description</span>
        </div>
        <div className={styles['HeaderBlock']}>
          <span>Quantity</span>
        </div>
        <div className={styles['HeaderBlock']}>
          <span>Price</span>
        </div>
        <div className={styles['HeaderBlock']}>Remove</div>
      </div>
      {cartState.cartItems.map(cartItem => {
        return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
      })}
      <span className={styles['Total']}>Total: ${cartState.total}</span>
    </div>
  );
}
