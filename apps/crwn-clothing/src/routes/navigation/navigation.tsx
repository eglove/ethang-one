import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import styles from './navigation.module.css';

export function Navigation(): JSX.Element {
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
          <Link className={styles['nav-link']} to="/authentication">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
