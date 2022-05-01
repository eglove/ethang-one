import { CartItemType } from '../../contexts/cart-context';
import styles from './cart-item.module.css';

interface CartItemProperties {
  cartItem: CartItemType;
}

export function CartItem({ cartItem }: CartItemProperties): JSX.Element {
  return (
    <div className={styles['CartItemContainer']}>
      <img alt={cartItem.name} src={cartItem.imageUrl} />
      <div className={styles['ItemDetails']}>
        <span className={styles['Name']}>{cartItem.name}</span>
        <span>
          {cartItem.quantity} x ${cartItem.price}
        </span>
      </div>
    </div>
  );
}
