import { useContext } from 'react';

import { CartContext, CartItemType } from '../../contexts/cart-context';
import styles from './checkout-item.module.css';

export interface CheckoutItemProperties {
  cartItem: CartItemType;
}

export function CheckoutItem({
  cartItem,
}: CheckoutItemProperties): JSX.Element {
  const { addItemToCart, clearItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className={styles['CheckoutItemContainer']}>
      <div className={styles['ImageContainer']}>
        <img alt={cartItem.name} src={cartItem.imageUrl} />
      </div>
      <span className={styles['Name']}>{cartItem.name}</span>
      <span className={styles['Quantity']}>
        <div
          className={styles['Arrow']}
          role="button"
          tabIndex={0}
          onClick={(): void => {
            removeItemFromCart(cartItem);
          }}
          onKeyDown={(): void => {
            removeItemFromCart(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className={styles['Value']}>{cartItem.quantity}</span>
        <div
          className={styles['Arrow']}
          role="button"
          tabIndex={0}
          onClick={(): void => {
            addItemToCart(cartItem);
          }}
          onKeyDown={(): void => {
            addItemToCart(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className={styles['Price']}>{cartItem.price}</span>
      <div
        className={styles['RemoveButton']}
        role="button"
        tabIndex={0}
        onClick={(): void => {
          clearItemFromCart(cartItem);
        }}
        onKeyDown={(): void => {
          clearItemFromCart(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
}
