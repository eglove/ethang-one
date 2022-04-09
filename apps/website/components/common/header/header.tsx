import { NextLink } from '@ethang/react-components';

import styles from './header.module.css';
import { Navigation } from './navigation';

export function Header(): JSX.Element {
  const headerContent = <header className={styles.Header}>EthanG</header>;

  return (
    <div className={styles.HeaderContainer}>
      <NextLink
        linkProperties={{ href: '/', style: { textDecoration: 'none' } }}
      >
        {headerContent}
      </NextLink>
      <Navigation />
    </div>
  );
}
