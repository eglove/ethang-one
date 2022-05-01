import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart-context';
import styles from './cart-icon.module.css';

export function CartIcon(): JSX.Element {
  const { cartState, setCartState } = useContext(CartContext);

  const toggleIsCartOpen = (): void => {
    setCartState(cartState_ => {
      return {
        ...cartState_,
        isCartOpen: !cartState_.isCartOpen,
      };
    });
  };

  return (
    <div
      className={styles['CartIconContainer']}
      role="button"
      tabIndex={0}
      onClick={toggleIsCartOpen}
      onKeyDown={toggleIsCartOpen}
    >
      <ShoppingIcon className={styles['ShoppingIcon']} />
      <span className={styles['ItemCount']}>{cartState.cartCount}</span>
    </div>
  );
}
