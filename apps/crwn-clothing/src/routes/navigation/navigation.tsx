import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown';
import { CartIcon } from '../../components/cart-icon/cart-icon';
import { CartContext } from '../../contexts/cart-context';
import { UserContext } from '../../contexts/user-context';
import { signOutUser } from '../../utils/firebase/firebase';
import styles from './navigation.module.css';

export function Navigation(): JSX.Element {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { cartState } = useContext(CartContext);

  const signOutHandler = async (): Promise<void> => {
    await signOutUser();

    if (typeof setCurrentUser !== 'undefined') {
      // eslint-disable-next-line unicorn/no-useless-undefined
      setCurrentUser(undefined);
    }
  };

  return (
    <>
      <div className={styles['navigation']}>
        <Link className={styles['logo-container']} to="/">
          <CrwnLogo />
        </Link>
        <div className={styles['nav-links-container']}>
          <Link className={styles['nav-link']} to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span
              className={styles['nav-link']}
              role="button"
              tabIndex={0}
              onClick={signOutHandler}
              onKeyDown={signOutHandler}
            >
              SIGN OUT
            </span>
          ) : (
            <Link className={styles['nav-link']} to="/authentication">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {cartState.isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}
